import { createFetchEntitiesService } from './api'

const KEY = 'conference'

export const [fetchConferences, useFetchConference] = createFetchEntitiesService<IConference>(
  '/get_fields.php',
  KEY,
  {
    action: 'school_conference',
  }
)
