interface IUplodaer {
  extention: IExtention
  fileItems: IFileItem[]
  addItems: (items: File[]) => void
  updateItem: (item: IFileItem, data: Partial<IFileItem>) => void
  removeItem: (item: IFileItem) => void
  multiple?: boolean
  rounded?: boolean
  sign?: boolean
}

type ExtentionType = 'image' | 'doc' | 'video'

interface IExtention {
  type: ExtentionType
  accept: string
  regex: RegExp
}
interface IFileItem {
  id?: string | number
  key?: string
  src?: string
  preview?: string
  name?: string
  file?: File
  extention?: IExtention
}
