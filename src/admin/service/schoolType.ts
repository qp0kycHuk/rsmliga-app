import { createFetchEntitiesService } from './api'

const KEY = 'schools-types'

export const [fetchSchoolTypes, useFetchSchoolTypes] = createFetchEntitiesService<ISchoolType>(
  '/get_fields.php',
  KEY,
  {
    action: 'school_type',
  }
)
