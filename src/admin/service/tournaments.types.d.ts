interface ITournament {
  ID: EntityId
  NAME: string
  NOTIFICATION: string
  SECTION_ID: EntityId
  STATUS: string
}

type ITournamentFetchResponse = IListResponse<ITournament> & IEntitesAdapter<ITournament>
