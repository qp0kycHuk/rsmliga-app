import { useQuery } from 'react-query'
import { rootApi } from './api'

export async function fetchSeasons(): Promise<IListResponse<ISeason>> {
  const { data } = await rootApi.get<IListResponse<ISeason>>('/list_filter_blocks.php', {
    params: {
      action: 'sezon',
    },
  })

  return data
}

export function useFetchSeasons() {
  return useQuery('seasons', fetchSeasons)
}
