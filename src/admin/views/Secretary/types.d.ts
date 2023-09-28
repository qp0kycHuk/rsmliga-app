interface ISecretary {
  number: number
  id: EntityId
  user_id: EntityId
  name: string
  surname: string
  patronymic: string
  category: string
  category_id: string
  email: string
  phone: string
  education: string
  education_id: EntityId
  competitions: EntityId[]
  locations: EntityId[]
  birthdate: BitrixDate
  image_src: string
  sex: EntityId
  comment: string
  documents: Record<SecretaryDocName, IFile>

  imageFile?: File
  image_delete?: boolean
}

type SecretaryDocName = 'SPORT' | 'LICHNOST' | 'PERDAN' | 'FILE_1' | 'FILE_2'
