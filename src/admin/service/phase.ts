import { createFetchEntitiesService } from './api'

const KEY = 'playoff'

export const [fetchPhases, useFetchPhases] = createFetchEntitiesService<Phase>(
  '/get_fields.php',
  KEY,
  {
    action: 'playoff',
  }
)
