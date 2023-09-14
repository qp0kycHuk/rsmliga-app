import { useFetchCurrentUser } from '@admin/service/user'
import { Outlet } from 'react-router-dom'

export function PrivateOutlet() {
  // initial user data load
  const { data } = useFetchCurrentUser()

  if (!data?.item.access && import.meta.env.PROD) {
    window.location = '/login/' as string & Location
    return
  }

  return <Outlet />
}
