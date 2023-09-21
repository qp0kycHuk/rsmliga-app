import { getIds, getEntities } from '@utils/helpers/entites'
import axios from 'axios'
import { useQuery, UseQueryResult } from 'react-query'

export const rootApi = axios.create({
  baseURL: import.meta.env.VITE_API_ROOT_URL,
})

export function createFetchEntitiesService<
  E extends { id?: EntityId; ID?: EntityId },
  P = undefined
>(endpoint: string, key: string, defaultParams: any): Result<E, P> {
  async function fetchEntities(params?: P): Promise<IListResponse<E> & IEntitesAdapter<E>> {
    const { data } = await rootApi.get<IListResponse<E>>(endpoint, {
      params: {
        ...defaultParams,
        ...params,
      },
    })

    return {
      ...data,
      ids: getIds(data.items),
      entites: getEntities(data.items),
    }
  }

  function useFetchEntities(params?: P) {
    return useQuery([key, params], fetchEntities.bind(null, params), {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    })
  }

  return [fetchEntities, useFetchEntities]
}

type Result<E extends { id?: EntityId; ID?: EntityId }, P = undefined> = [
  (params?: P) => Promise<IListResponse<E> & IEntitesAdapter<E>>,
  (params?: P) => UseQueryResult<IListResponse<E> & IEntitesAdapter<E>, unknown>
]
