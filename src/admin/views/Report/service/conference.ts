import { createFetchEntitiesService } from '@admin/service/api'

const KEY = 'reports-conference'

export const [fetchConferences, useFetchConference] = createFetchEntitiesService<IConference>(
  '/get_fields.php',
  KEY,
  {
    action: 'conference_list',
  }
)
