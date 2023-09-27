import { createFetchEntitiesService } from './api'

export const [fetchCities, useFetchCities] = createFetchEntitiesService<ICity>(
  '/get_fields.php',
  'cities',
  {
    action: 'city_list',
  }
)
