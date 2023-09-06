import { useQuery } from 'react-query'
import { rootApi } from './api'

export async function fetchStages(): Promise<IListResponse<IStage>> {
  const { data } = await rootApi.get<IListResponse<IStage>>('/list_filter_blocks.php', {
    params: {
      action: 'stage',
    },
  })

  return data
}

export function useFetchStages() {
  return useQuery('stages', fetchStages)
}
