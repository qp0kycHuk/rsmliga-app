import { useQuery } from 'react-query'
import { rootApi } from './api'

export async function fetchCurrentUser(): Promise<ICurrentUserFetchResponse> {
  const { data } = await rootApi.get<IItemResponse<ICurrentUser>>('/get_user_info.php')

  return {
    ...data,
  }
}

export function useFetchCurrentUser() {
  return useQuery('current-user', fetchCurrentUser, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
}
