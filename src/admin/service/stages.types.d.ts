interface IStage {
  ID: EntityId
  VALUE: string
  DEF: BitrixBoolean
  SORT: string
  XML_ID?: 'mun' | 'zon' | 'fin' | 'school' | 'base' | 'qual' | 'select' | 'elite'
  TMP_ID?: EntityId
  EXTERNAL_ID?: 'mun' | 'zon' | 'fin' | 'school' | 'base' | 'qual' | 'select' | 'elite'
  PROPERTY_NAME: string
  PROPERTY_CODE: string
  PROPERTY_SORT: string
}

type IStageFetchResponse = IListResponse<IStage> & IEntitesAdapter<IStage>
