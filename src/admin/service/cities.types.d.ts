interface ICity {
  ID: string
  VALUE: string
}

type ICityFetchResponse = IListResponse<ICity> & IEntitesAdapter<ICity>

type CityFetchPayload = {
  conference?: EntityId
}
