interface IFetchParams {
  page: number
  itemsPerPage?: number
  search?: string
  sezon?: EntityId
  turnier?: EntityId
  stage?: EntityId
}

interface IFetchResponse extends IListResponse<IDelegate> {
  NavPageCount: number
}
