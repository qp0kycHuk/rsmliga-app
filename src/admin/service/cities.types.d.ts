interface ICity {
  ID: string
  NAME: string
  SECTION: string
  CONFERENCE: string
  AREA?: string
}

type ICityFetchResponse = IListResponse<ICity> & IEntitesAdapter<ICity>
