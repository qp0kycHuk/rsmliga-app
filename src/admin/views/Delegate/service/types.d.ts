interface IFetchParams {
  page: number
  itemsPerPage?: number
  search?: string
}

interface IFetchResponse extends IListResponse<IDelegate> {
  NavPageCount: number
}
