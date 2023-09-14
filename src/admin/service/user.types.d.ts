interface ICurrentUser {
  id: string
  name: string
  imgPath?: string
  logoutUrl: string
  access: boolean
  userGroups: string[]
}

type ICurrentUserFetchResponse = IItemResponse<ICurrentUser>
