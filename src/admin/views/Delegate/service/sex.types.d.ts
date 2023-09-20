interface ISex {
  ID: string
  PROPERTY_ID: string
  VALUE: string
  DEF: string
  SORT: string
  XML_ID: string
  TMP_ID: null
  EXTERNAL_ID: string
  PROPERTY_NAME: string
  PROPERTY_CODE: string
  PROPERTY_SORT: string
}

type ISexFetchResponse = IListResponse<ISex> & IEntitesAdapter<ISex>
