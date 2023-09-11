interface IReport {
  // id: EntityId
  // documents: Record<string, IFile[]>
  // generalImages: IFile[]
  // contestImages: IFile[]
  // teamsImages: { team: ITeam; image: IImage }[]

  number: number
  id: EntityId
  season_id: EntityId
  season: string
  competition_id: EntityId
  competition: string
  stage_id: EntityId
  stage: string
  area_id: EntityId
  area: string
  location: string
  date: BitrixDate
  status_id: EntityId
  status: string
}

interface ITeam {
  id: EntityId
  name: string
}
