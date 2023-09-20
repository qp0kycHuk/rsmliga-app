interface IEducation {
  ID: string
  PROPERTY_ID: string
  VALUE: string
  DEF: BitrixBoolean
  SORT: string
  XML_ID: string
  TMP_ID: string
  EXTERNAL_ID: string
  PROPERTY_NAME: string
  PROPERTY_CODE: string
  PROPERTY_SORT: string
}

type IEducationFetchResponse = IListResponse<IEducation> & IEntitesAdapter<IEducation>
