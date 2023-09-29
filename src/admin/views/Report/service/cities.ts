import { createFetchEntitiesService } from '@admin/service/api'

export const [fetchCities, useFetchCities] = createFetchEntitiesService<ICity>(
  '/get_fields.php',
  'secretary-cities',
  {
    action: 'secretary_city_list',
  }
)
