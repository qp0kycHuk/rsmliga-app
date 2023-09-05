interface IDelegate {
  image_src?: string
  id: EntityId
  number: string
  name: string
  surname: string
  patronymic: string
  birthday: string
  sex: string
  category: string
  place: string // Населенный пункт
  email: string
  phone: string
  comment: string
  gamesCount: number // Матчей проведено
  documents: Record<string, IFile[]>
  imageFile?: File
  image_delete?: boolean
  statistic: IStatistic[]
  contests: string[]
  roles: {
    main: number
    support: number
    delegate: number
  }
}

interface IStatistic {
  id: EntityId
  season: string
  team: string
  contest: string
  gamesCount: number
  role: string
  warnings: number
  deletions: number
}
