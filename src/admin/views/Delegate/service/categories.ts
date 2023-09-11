import { useQuery } from 'react-query'
import { getEntities, getIds } from '@utils/helpers/entites'
import { rootApi } from '@admin/service/api'

export async function fetchCategories(): Promise<ICategoryFetchResponse> {
  const { data } = await rootApi.get<IListResponse<ICategory>>('/get_fields.php', {
    params: {
      action: 'category_judge_list',
    },
  })

  return {
    ...data,
    ids: getIds(data.items),
    entites: getEntities(data.items),
  }
}

export function useFetchCategories() {
  return useQuery('delegate-categories', fetchCategories, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
}
