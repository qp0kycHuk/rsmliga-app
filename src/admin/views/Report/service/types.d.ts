interface IFetchParams {
  page: number
  itemsPerPage?: number
  search?: string
  sezon?: EntityId
  turnier?: EntityId
  location?: EntityId
}

interface IReportDocument {
  id: EntityId
  name: string
  multi: boolean
}

interface IReportStatus {
  ID: EntityId
  PROPERTY_ID: EntityId
  VALUE: string
  DEF: BitrixBoolean
  SORT: number
  XML_ID: 'checking' | 'deny' | 'uploaded' | 'checked' | 'none'
  TMP_ID: EntityId
  EXTERNAL_ID: EntityId
  PROPERTY_NAME: string
  PROPERTY_CODE: string
  PROPERTY_SORT: number
}
