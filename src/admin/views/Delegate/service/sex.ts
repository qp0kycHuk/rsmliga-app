import { createFetchEntitiesService } from '@admin/service/api'

const KEY = 'delegate-sex'

export const [fetchSex, useFetchSex] = createFetchEntitiesService<ISex>('/get_fields.php', KEY, {
  action: 'sex_judge_list',
})
