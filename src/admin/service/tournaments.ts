import { useQuery } from 'react-query'
import { rootApi } from './api'
import { getEntities, getIds } from '@utils/helpers/entites'

export async function fetchTournaments(): Promise<ITournamentFetchResponse> {
  const { data } = await rootApi.get<IListResponse<ITournament>>('/list_filter_blocks.php', {
    params: {
      action: 'turnier',
    },
  })

  return {
    ...data,
    ids: getIds(data.items),
    entites: getEntities(data.items),
  }
}

export function useFetchTournaments() {
  return useQuery('tournaments', fetchTournaments)
}
