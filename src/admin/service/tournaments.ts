import { useQuery } from 'react-query'
import { rootApi } from './api'

export async function fetchTournaments(): Promise<IListResponse<ITournament>> {
  const { data } = await rootApi.get<IListResponse<ITournament>>('/list_filter_blocks.php', {
    params: {
      action: 'turnier',
    },
  })

  return data
}

export function useFetchTournaments() {
  return useQuery('tournaments', fetchTournaments)
}
