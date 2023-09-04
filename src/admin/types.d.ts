interface IDocSchema {
  name: string
  title: string
  required?: boolean
}

interface IEditContextValue {
  loading: boolean
  submit(event: React.FormEvent): void
  loadingStart(): void
  loadingEnd(): void
}
