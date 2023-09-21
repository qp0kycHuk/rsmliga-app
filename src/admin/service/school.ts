import { useQuery } from 'react-query'
import { rootApi } from './api'
import { getEntities, getIds } from '@utils/helpers/entites'
import { createFetchEntitiesService } from './api'

export const SCHOOLS_KEY = 'schools'

export const [fetchSchools, useFetchSchools] = createFetchEntitiesService<ISchool, IFetchParams>(
  '/get_fields.php',
  SCHOOLS_KEY,
  {
    action: 'school_list',
  }
)

export async function fetchSchools1({
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

export function useFetchSchools1(params: IFetchParams) {
  return useQuery([SCHOOLS_KEY, params], fetchSchools.bind(null, params), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
}

interface IFetchParams {
  competition?: EntityId // Соревнование
  stage?: EntityId // Этап
}
