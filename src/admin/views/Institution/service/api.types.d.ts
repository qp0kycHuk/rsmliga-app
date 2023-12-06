export interface IFetchParams {
  page: number
  itemsPerPage?: number
  search?: string
  conference?: EntityId
  city?: EntityId
}

export interface IFetchResponse extends IListResponse<IInstitution> {
  NavPageCount: number
}
