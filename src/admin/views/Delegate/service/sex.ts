import { useQuery } from 'react-query'
import { getEntities, getIds } from '@utils/helpers/entites'
import { rootApi } from '@admin/service/api'

export async function fetchSex(): Promise<ISexFetchResponse> {
  const { data } = await rootApi.get<IListResponse<ISex>>('/get_fields.php', {
    params: {
      action: 'sex_judge_list',
    },
  })

  return {
    ...data,
    ids: getIds(data.items),
    entites: getEntities(data.items),
  }
}

export function useFetchSex() {
  return useQuery('sex_judge', fetchSex, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
}
