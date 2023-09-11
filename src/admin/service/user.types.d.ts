interface ICurrentUser {
  name: string
  imgPath?: string
  logoutUrl: string
}

type ICurrentUserFetchResponse = IItemResponse<ICurrentUser>
