interface IDoc {
  name: string
  title: string
  files: Array<IFile> // : string | File | null
  file_remove?: boolean
  required?: boolean
}
