import { FileAddIcon } from '@assets/icons/fill'
import { Button, Input } from '@features/ui'
import { id } from '@utils/helpers/id'

interface IFileFieldMultipleProps {
  schema: IDocSchema
  docs: IFile[]
  onChange?: (files: IFile[]) => void
}

export function FileFieldMultiple({ schema, docs, onChange }: IFileFieldMultipleProps) {
  return docs.map?.((file) => (
    <div className="flex items-center mb-4" key={id(file)}>
      <FileAddIcon className="mr-2 text-xl text-primary" />
      <div className="underline underline-offset-4">
        {schema.name} (Файл{' '}
        <Input
          className="inline w-8 px-1 text-sm text-center"
          size="xs"
          value={file.number}
          onChange={(event) =>
            onChange?.(
              docs.map((d) => (id(d) !== id(file) ? d : { ...d, number: event.target.value }))
            )
          }
        />
        )
      </div>
      <Button
        variant="text"
        className="ml-4 border-b"
        onClick={() => onChange?.(docs.filter((d) => id(d) !== id(file)))}
      >
        Удалить
      </Button>
    </div>
  ))
}
