import { FileAddIcon } from '@assets/icons/fill'

interface IProps {
  doc: IFile | null
  schema: IDocSchema
}

export function FileViewSingle({ doc, schema }: IProps) {
  return (
    <a target="_blank" href={doc?.path} className="flex items-center mb-4" rel="noreferrer">
      <FileAddIcon className="mr-2 text-xl text-primary" />
      <div className="underline underline-offset-4">{schema.name}</div>
    </a>
  )
}
