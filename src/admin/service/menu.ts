import { useQuery } from 'react-query'
import { rootApi } from './api'

export async function fetchMenu(): Promise<IMenuFetchResponse> {
  const { data } = await rootApi.get<IListResponse<IMenuItem>>(
    import.meta.env.PROD ? '/get_menu.php' : '/get_menu_dev.php'
  )

  return {
    ...data,
  }
}

export function useFetchMenu() {
  return useQuery('menu', fetchMenu, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
}
