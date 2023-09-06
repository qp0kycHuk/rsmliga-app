import { useQuery } from 'react-query'
import { fetchDelegates } from './api'

export function useFetchDelegates(params: IFetchParams) {
  return useQuery('delegates', fetchDelegates.bind(null, params))
}
