import { createFetchEntitiesService } from './api'

const KEY = 'divisions'

export const [fetchDivisions, useFetchDivisions] = createFetchEntitiesService<Division>(
  '/get_fields.php',
  KEY,
  {
    action: 'divisions',
  }
)
