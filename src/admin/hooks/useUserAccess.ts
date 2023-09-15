import { useFetchCurrentUser } from '@admin/service/user'

export function useUserAccess(accessGroups: number[] = []) {
  const { data: userData } = useFetchCurrentUser()

  const isAccess = userData?.item.userGroups.some((groupId) => {
    return accessGroups.includes(parseInt(groupId))
  })

  return {
    isAccess,
    userData,
  }
}
