import { useQuery } from 'react-query'
import { rootApi } from './api'
import { getEntities, getIds } from '@utils/helpers/entites'

export async function fetchSeasons(): Promise<ISeasonFetchResponse> {
  const { data } = await rootApi.get<IListResponse<ISeason>>('/list_filter_blocks.php', {
    params: {
      action: 'sezon',
    },
  })

  return {
    ...data,
    ids: getIds(data.items),
    entites: getEntities(data.items),
  }
}

export function useFetchSeasons() {
  return useQuery('seasons', fetchSeasons)
}
