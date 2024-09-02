import { useQuery } from 'react-query'
import { MATCH_PER_PAGE } from '../const'
import { rootApi } from '@admin/service/api'
import { AxiosRequestConfig } from 'axios'
import { dateToSQLFormatString } from '@utils/helpers/dates'

export const MATCHES_KEY = 'matches'

export async function fetchMatches(
  {
    page = 1,
    itemsPerPage = MATCH_PER_PAGE,
    turnier = '',
    stage = '',
    tab = 'A',
  }: MatchFetchParams,
  config?: AxiosRequestConfig<any>
): Promise<MatchFetchResponse> {
  const { data } = await rootApi.get<MatchFetchResponse>('/manager/matches/matches_handler.php', {
    params: {
      action: 'get_list',
      PAGEN_1: page,
      nPageSize: itemsPerPage,
      competition: turnier,
      stage,
      tab,
    },
    ...config,
  })

  return data
}

export function usefetchMatches(params: MatchFetchParams) {
  return useQuery([MATCHES_KEY, params], ({ signal }) => fetchMatches(params, { signal }), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}

export async function fetchMatchById(
  id?: EntityId,
  config?: AxiosRequestConfig<any>
): Promise<MatchGetResponse> {
  const { data } = await rootApi.get<MatchGetResponse>('/manager/matches/matches_handler.php', {
    params: {
      action: 'get_match',
      match_id: id,
    },
    ...config,
  })

  return data
}

export function usefetchMatchById(id?: EntityId) {
  return useQuery(['match', id], ({ signal }) => fetchMatchById(id, { signal }), {
    enabled: !!id,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}

export async function upsertMatch(data: EditableMatch) {
  const formData = new FormData()

  for (const [key, value] of Object.entries(data)) {
    if (key === 'date') {
      formData.append(key, dateToSQLFormatString(new Date(value)) || '')
      continue
    }

    formData.append(key, value)
  }

  if (data.id) {
    return await rootApi.post<{ id: EntityId; error?: string }>(
      '/manager/matches/matches_handler.php',
      formData,
      {
        params: {
          action: 'edit_match',
        },
      }
    )
  } else {
    return await rootApi.post<{ id: EntityId; error?: string }>(
      '/manager/matches/matches_handler.php',
      formData,
      {
        params: {
          action: 'add_match',
        },
      }
    )
  }
}
