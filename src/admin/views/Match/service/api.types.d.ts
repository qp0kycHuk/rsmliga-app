interface MatchFetchParams {
  page: number
  itemsPerPage?: number
  competition?: EntityId
  stage?: EntityId

  conference?: EntityId
  location?: EntityId // город
  division?: EntityId
  tour?: EntityId

  tab?: 'A' | 'P' | 'F'
  order?: Order
  order_by?: MatchOrderKey
}

interface MatchFetchResponse extends IListResponse<Match> {
  NavPageCount: number
}

type MatchGetResponse = IItemResponse<MatchDetail>

type MatchOrderKey = 'PROPERTY_MATCH_NUMBER' | 'PROPERTY_DATE'
