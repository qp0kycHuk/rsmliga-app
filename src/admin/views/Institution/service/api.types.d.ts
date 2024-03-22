export interface IFetchParams {
  page: number
  itemsPerPage?: number
  search?: string
  conference?: EntityId
  city?: EntityId
  schooltype?: EntityId
}

export interface IFetchResponse extends IListResponse<IInstitution> {
  NavPageCount: number
}
