declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}

interface IListResponse<T> {
  items: T[]
}

interface IItemResponse<T> {
  item: T
}

interface TypedFormData<T> extends FormData {
  append(name: T | '_method', value: string | Blob, fileName?: string): void
  delete(name: T): void
  get(name: T): FormDataEntryValue | null
  getAll(name: T): FormDataEntryValue[]
  has(name: T): boolean
  set(name: T, value: string | Blob, fileName?: string): void
}
