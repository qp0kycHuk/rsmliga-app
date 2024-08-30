import { createFetchEntitiesService } from './api'

export const [fetchGroup, useFetchGroup] = createFetchEntitiesService<Group>(
  '/get_fields.php',
  'groups',
  {
    action: 'groups',
  }
)

export const [fetchGroupSemifinal, useFetchGroupSemifinal] = createFetchEntitiesService<Group>(
  '/get_fields.php',
  'groups_pf',
  {
    action: 'groups_pf',
  }
)

export const [fetchGroupFinal, useFetchGroupFinal] = createFetchEntitiesService<Group>(
  '/get_fields.php',
  'groups_f',
  {
    action: 'groups_f',
  }
)
