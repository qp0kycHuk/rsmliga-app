interface ISecretary {
  number: number
  id: string
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
  documents: Record<DelegateDocName, IFile>
}

type SecretaryDocName = 'LICHNOST' | 'PERDAN' | 'FILE_1' | 'FILE_2'
