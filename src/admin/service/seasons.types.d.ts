interface ISeason {
  ID: EntityId
  TIMESTAMP_X: string
  MODIFIED_BY: string
  DATE_CREATE: string
  CREATED_BY: string
  IBLOCK_ID?: EntityId
  IBLOCK_SECTION_ID?: EntityId
  ACTIVE: BitrixBoolean
  GLOBAL_ACTIVE: BitrixBoolean
  SORT: string
  NAME: string
  PICTURE?: string
  LEFT_MARGIN: string
  RIGHT_MARGIN: string
  DEPTH_LEVEL: string
  DESCRIPTION: string
  DESCRIPTION_TYPE: string
  SEARCHABLE_CONTENT: string
  CODE: string
  XML_ID?: EntityId
  TMP_ID?: EntityId
  DETAIL_PICTURE: null
  SOCNET_GROUP_ID?: EntityId
  LIST_PAGE_URL: string
  SECTION_PAGE_URL: string
  IBLOCK_TYPE_ID: string
  IBLOCK_CODE: string
  IBLOCK_EXTERNAL_ID?: EntityId
  EXTERNAL_ID?: EntityId
  ELEMENT_CNT: string
}

type ISeasonFetchResponse = IListResponse<ISeason> & IEntitesAdapter<ISeason>
