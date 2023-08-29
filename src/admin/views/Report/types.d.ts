interface IContest {
  id: EntityId
  season: string
  name: string
  step: string
  area: string
  place: string
  date: string
  report: IReport | null
}

interface IReport {
  id: EntityId
  documents: IDoc[]
  generalImages: IFile[]
  contestImages: IFile[]
  teamsImages?: Record<EntityId, IFile>
}
