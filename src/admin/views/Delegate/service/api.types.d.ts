interface IFetchParams {
  page: number
  itemsPerPage?: number
  search?: string
  sezon?: EntityId
  turnier?: EntityId
  stage?: EntityId
  status?: EntityId
}

interface IFetchResponse extends IListResponse<IDelegate> {
  NavPageCount: number
}
