interface IUplodaer {
  extention: IExtention
  fileItems: IFile[]
  addItems: (items: File[]) => void
  updateItem: (item: IFile, data: Partial<IFile>) => void
  removeItem: (item: IFile) => void
  multiple?: boolean
  rounded?: boolean
  sign?: boolean
  max?: number
  label?: React.ReactNode
}

type ExtentionType = 'image' | 'doc' | 'video'

interface IExtention {
  type: ExtentionType
  accept: string
  regex: RegExp
}

interface IUploaderProps extends React.PropsWithChildren {
  fileItems?: IFile[]
  extention?: IExtention
  multiple?: boolean
  rounded?: boolean
  sign?: boolean
  max?: number
  label?: React.ReactNode
  onChange?: (fileItems: IFile[]) => unknown
  onRemove?: (fileItem: IFile) => unknown
}
