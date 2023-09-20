export interface IFetchParams {
  page: number
  itemsPerPage?: number
  search?: string
  turnier?: EntityId
  location?: EntityId
}

export interface IFetchResponse extends IListResponse<ISecretary> {
  NavPageCount: number
}
