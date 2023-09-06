import { useQuery } from 'react-query'
import { rootApi } from './api'
import { getEntities, getIds } from '@utils/helpers/entites'

export async function fetchStages(): Promise<IStageFetchResponse> {
  const { data } = await rootApi.get<IListResponse<IStage>>('/list_filter_blocks.php', {
    params: {
      action: 'stage',
    },
  })

  return {
    ...data,
    ids: getIds(data.items),
    entites: getEntities(data.items),
  }
}

export function useFetchStages() {
  return useQuery('stages', fetchStages)
}
