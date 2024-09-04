import { createFetchEntitiesService } from './api'

const KEY = 'team-colors'

export const [fetchColors, useFetchColors] = createFetchEntitiesService<Color>(
  '/get_fields.php',
  KEY,
  {
    action: 'team_colors',
  }
)
