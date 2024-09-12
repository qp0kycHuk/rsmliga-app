declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

type PartialRecord<K extends keyof unknown, T> = {
  [P in K]?: T
}

interface IEntitesAdapter<T> {
  ids: EntityId[]
  entites: Record<EntityId, T>
}

interface IListResponse<T> {
  items: T[]
  error?: string
}

interface IItemResponse<T> {
  item: T
  error?: string
}

interface TypedFormData<T> extends FormData {
  append(name: T | '_method', value: string | Blob, fileName?: string): void
  delete(name: T): void
  get(name: T): FormDataEntryValue | null
  getAll(name: T): FormDataEntryValue[]
  has(name: T): boolean
  set(name: T, value: string | Blob, fileName?: string): void
}

type EntityId = string | number

interface IFile {
  id?: EntityId
  key?: EntityId
  fid?: EntityId
  src?: string
  path?: string
  name?: string
  number?: string
  file?: File
}

type BitrixBoolean = 'Y' | 'N'
type BitrixDate = string

type IconComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined
  }
>

type Order = 'asc' | 'desc'

type PropsWithClassName = {
  className?: string
}

type BaseHtmlProps = React.PropsWithChildren & PropsWithClassName
