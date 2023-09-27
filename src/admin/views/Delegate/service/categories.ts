import { createFetchEntitiesService } from '@admin/service/api'

const KEY = 'delegate-categories'

export const [fetchCategories, useFetchCategories] = createFetchEntitiesService<ICategory>(
  '/get_fields.php',
  KEY,
  {
    action: 'category_judge_list',
  }
)
