import { rootApi } from '@admin/service/api'
import { SECRETARIES_PER_PAGE } from '../const'
import { useQuery } from 'react-query'
import { IFetchParams, IFetchResponse } from './api.types'

export const SECRETARY_KEY = 'secretaries'

export async function fetchSecretaries({
  page = 1,
  itemsPerPage = SECRETARIES_PER_PAGE,
  search = '',
  location = '',
  turnier = '',
}: IFetchParams): Promise<IFetchResponse> {
  const { data } = await rootApi.get<IFetchResponse>('/secretary_handler.php', {
    params: {
      action: 'getlist',
      PAGEN_1: page,
      nPageSize: itemsPerPage,
      search,
      location,
      turnier,
    },
  })

  return data
}

export function useFetchSecretaries(params: IFetchParams) {
  return useQuery([SECRETARY_KEY, params], fetchSecretaries.bind(null, params), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}
