import { createFetchEntitiesService } from './api'

const KEY = 'playoff'

export const [fetchPhases, useFetchPhases] = createFetchEntitiesService<Phase>(
  '/get_fields.php',
  KEY,
  {
    action: 'playoff',
  }
)

export const PHASE_XML_IDS = {
  group: 'group',
  semifinal: 'semifinal',
  final: 'final',
}
