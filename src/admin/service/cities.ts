import { useQuery } from 'react-query'
import { rootApi } from './api'
import { getEntities, getIds } from '@utils/helpers/entites'

export async function fetchCities(): Promise<ICityFetchResponse> {
  const { data } = await rootApi.get<IListResponse<ICity>>('/get_fields.php', {
    params: {
      action: 'city_list',
    },
  })

  return {
    ...data,
    ids: getIds(data.items),
    entites: getEntities(data.items),
  }
}

export function useFetchCities() {
  return useQuery('cities', fetchCities, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
}
