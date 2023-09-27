import { createFetchEntitiesService } from '@admin/service/api'

const KEY = 'secretary-categories'

export const [fetchCategories, useFetchCategories] = createFetchEntitiesService<ICategory>(
  '/get_fields.php',
  KEY,
  {
    action: 'category_secretary_list',
  }
)
