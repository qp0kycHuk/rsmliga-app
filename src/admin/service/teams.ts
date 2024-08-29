import { createFetchEntitiesService } from './api'

const KEY = 'teams'

export const [fetchTeams, useFetchTeams] = createFetchEntitiesService<Team, FetchTeamsPayload>(
  '/get_fields.php',
  KEY,
  {
    action: 'teams',
  }
)
