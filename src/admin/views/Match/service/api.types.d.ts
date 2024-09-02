interface MatchFetchParams {
  page: number
  itemsPerPage?: number
  search?: string
  sezon?: EntityId
  turnier?: EntityId
  stage?: EntityId
  status?: EntityId
  tab?: 'A' | 'P' | 'F'
}

interface MatchFetchResponse extends IListResponse<Match> {
  NavPageCount: number
}

type MatchGetResponse = IItemResponse<MatchDetail>
