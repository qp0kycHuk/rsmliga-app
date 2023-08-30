import { FileAddIcon } from '@assets/icons/fill'
import { Button, Input } from '@features/ui'
import { getFileItems } from '@utils/helpers/files'

interface IFileFieldProps {
  docs: IFile[]
  schema: IDocSchema
  onChange?: (files: Array<IFile>) => void
}

export function FileField({ docs, schema, onChange }: IFileFieldProps) {
  async function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const newFiles = await getFileItems(Array.from(event.target.files || []))
    const files = [...docs, ...newFiles]
    onChange?.(files)
  }

  if (schema.required) {
    return (
      <div className="flex items-center mb-4">
        <FileAddIcon className="mr-2 text-xl text-primary" />
        <div className="underline underline-offset-4">{schema.title}</div>
        {docs?.length > 0 ? (
          <Button variant="text" className="ml-4 border-b" onClick={() => onChange?.([])}>
            Удалить
          </Button>
        ) : (
          <Button as="label" variant="text" className="ml-4 border-b cursor-pointer">
            <input onChange={changeHandler} type="file" accept="application/*" hidden />
            Загрузить
          </Button>
        )}
      </div>
    )
  } else {
    return (
      <>
        {docs.map((file) => (
          <div className="flex items-center mb-4" key={file.id}>
            <FileAddIcon className="mr-2 text-xl text-primary" />
            <div className="underline underline-offset-4">
              {schema.title} (Файл{' '}
              <Input
                className="inline w-8 px-1 text-sm text-center"
                size="xs"
                value={file.name}
                onChange={(event) =>
                  onChange?.(
                    docs.map((d) => (d.id !== file.id ? d : { ...d, name: event.target.value }))
                  )
                }
              />
              )
            </div>
            <Button
              variant="text"
              className="ml-4 border-b"
              onClick={() => onChange?.(docs.filter(({ id }) => id !== file.id))}
            >
              Удалить
            </Button>
          </div>
        ))}
      </>
    )
  }
}