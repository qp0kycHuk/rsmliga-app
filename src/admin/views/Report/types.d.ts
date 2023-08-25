interface IContest {
  id: EntityId
  season: string
  name: string
  step: string
  area: string
  place: string
  date: string
  report: IReport
}

interface IReport {
  id: EntityId
  documents: IDoc[]
  images: IFile[]
}
