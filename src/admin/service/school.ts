import { createFetchEntitiesService } from './api'

const SCHOOLS_KEY = 'schools'

export const [fetchSchools, useFetchSchools] = createFetchEntitiesService<ISchool, IFetchParams>(
  '/get_fields.php',
  SCHOOLS_KEY,
  {
    action: 'school_list',
  }
)

interface IFetchParams {
  competition?: EntityId // Соревнование
  stage?: EntityId // Этап
}
