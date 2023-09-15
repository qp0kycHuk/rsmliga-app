interface IDocSchema {
  name: string
  title: string
  required?: boolean
}

interface ILoadingContext {
  loading: boolean
  loadingStart(): void
  loadingEnd(): void
}

interface IEditContextValue extends ILoadingContext {
  submit(event: React.FormEvent): void
}

/**
 * Description placeholder
 * no -  не заявлен
 * check - на рассмотрении
 * zayav - заявлен
 * @typedef {Status}
 */
type Status = 'no' | 'check' | 'zayav'
