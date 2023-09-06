interface IDelegate {
  number: string
  id: EntityId
  name: string
  surname: string
  patronymic: string
  category: string
  location: string // Населенный пункт
  birthdate: string
  matchesCount: number // Матчей проведено

  image_src?: string
  sex: string
  email: string
  phone: string
  comment: string
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

// interface IDelegate {
//   // bitrix type
//   ID: EntityId
//   CATEGORY: string
//   LOCATION: string // Населенный пункт
//   BIRTH_DATE: string
//   MATCHES_COUNT: number // Матчей проведено
//   FIO: {
//     SURNAME: string
//     NAME: string
//     PATRONNAME: string
//   }
// }

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
