interface IContest {
  id: EntityId
  season: string
  name: string
  step: string
  area: string
  place: string
  date: string
  report: IReport | null
  teams: ITeam[]
}

interface IReport {
  id: EntityId
  documents: IDoc[]
  generalImages: IFile[]
  contestImages: IFile[]
  teamsImages: { team: ITeam; image: IImage }[]
}

interface ITeam {
  id: EntityId
  name: string
}
