interface IDoc {
  name: string
  title: string
  files: Array<File | string> // : string | File | null
  file_remove?: boolean
  required?: boolean
}
