import { createFetchEntitiesService } from '@admin/service/api'

const KEY = 'match-status'

export const [fetchStatus, useFetchStatus] = createFetchEntitiesService<MatchStatus>(
  '/get_fields.php',
  KEY,
  {
    action: 'status',
  }
)
