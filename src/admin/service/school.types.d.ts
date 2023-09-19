interface ISchool {
  id: EntityId
  short_name: string
}

type ISchoolFetchResponse = IListResponse<ISchool> & IEntitesAdapter<ISchool>
