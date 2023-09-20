import { useQuery } from 'react-query'
import { getEntities, getIds } from '@utils/helpers/entites'
import { rootApi } from '@admin/service/api'

export async function fetchEducation(): Promise<IEducationFetchResponse> {
  const { data } = await rootApi.get<IListResponse<IEducation>>('/get_fields.php', {
    params: {
      action: 'education_secretary_list',
    },
  })

  return {
    ...data,
    ids: getIds(data.items),
    entites: getEntities(data.items),
  }
}

export function useFetchEducation() {
  return useQuery('secretary-education', fetchEducation, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
}
