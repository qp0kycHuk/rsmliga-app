import { useQuery } from 'react-query'
import { rootApi } from './api'
import { getEntities, getIds } from '@utils/helpers/entites'

export const SCHOOLS_KEY = 'schools'

export async function fetchSchools({
  competition,
  stage,
}: IFetchParams): Promise<ISchoolFetchResponse> {
  const { data } = await rootApi.get<IListResponse<ISchool>>('/get_fields.php', {
    params: {
      action: 'school_list',
      competition,
      stage,
    },
  })

  return {
    ...data,
    ids: getIds(data.items),
    entites: getEntities(data.items),
  }
}

export function useFetchSchools(params: IFetchParams) {
  return useQuery([SCHOOLS_KEY, params], fetchSchools.bind(null, params), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
}

interface IFetchParams {
  competition?: EntityId // Соревнование
  stage?: EntityId // Этап
}
