interface IReport {
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
  status_id: EntityId | null
  status: string
  comment: string
  group_photos: IFile[] | null
  competition_photo: IFile[] | null
}

type IImagesKey = 'group_photos' | 'competition_photo'

interface ITeam {
  id: EntityId
  name: string
}
