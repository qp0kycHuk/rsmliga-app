interface IMenuItem {
  name: string
  link: string
  icon: string
  sub?: IMenuItem[]
  isSub?: boolean
}

type IMenuFetchResponse = IListResponse<IMenuItem>
