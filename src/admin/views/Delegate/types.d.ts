interface IDelegate {
  number: string
  id: EntityId
  user_id: EntityId
  name: string
  surname: string
  patronymic: string
  category: string
  location: string // Населенный пункт
  birthdate: string
  matchesCount: number // Матчей проведено
  competitions: string[]
  image_src?: string
  sex: string
  email: string
  phone: string
  comment: string
  status: Status

  documents: Record<DelegateDocName, IFile[] | string>
  imageFile?: File
  image_delete?: boolean
  statistic: IStatistic[]
  analytics: {
    main_judge: number
    judge_helper: number
    delegate: number
    total: number
  }
}

type DelegateDocName = 'SCAN' | 'STRAH' | 'LICHNOST' | 'PERDAN'

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
