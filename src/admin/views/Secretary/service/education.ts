import { createFetchEntitiesService } from '@admin/service/api'

const KEY = 'secretary-education'

export const [fetchEducation, useFetchEducation] = createFetchEntitiesService<IEducation>(
  '/get_fields.php',
  KEY,
  {
    action: 'education_secretary_list',
  }
)
