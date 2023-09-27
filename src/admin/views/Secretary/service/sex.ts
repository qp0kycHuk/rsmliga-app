import { createFetchEntitiesService } from '@admin/service/api'

const KEY = 'secretary-sex'

export const [fetchSex, useFetchSex] = createFetchEntitiesService<ISex>('/get_fields.php', KEY, {
  action: 'sex_secretary_list',
})
