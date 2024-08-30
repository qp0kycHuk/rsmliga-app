import { createFetchEntitiesService } from './api'

const KEY = 'judges'

export const [fetchJudges, useFetchJudges] = createFetchEntitiesService<Judge>(
  '/get_fields.php',
  KEY,
  {
    action: 'judges',
  }
)
