interface IFetchParams {
  page: number
  itemsPerPage?: number
  search?: string
  sezon?: EntityId
  turnier?: EntityId
  stage?: EntityId
}

interface IReportDocument {
  id: EntityId
  name: string
  multi: boolean
}
