import { FileAddIcon } from '@assets/icons/fill'
import { Button, Dialog, Input } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { getFileItems } from '@utils/helpers/files'
import { ConfirmDialog } from '../ConfirmDialog'

interface IFileFieldProps {
  docs: string | IFile[]
  schema: IDocSchema
  onChange?: (files: Array<string | IFile>) => void
}

interface IFileFieldViewProps {
  docs: string | string[] | IFile[]
  schema: IDocSchema
}

export function FileField({ docs, schema, onChange }: IFileFieldProps) {
  const [isDeleteDialogOpen, , openDeleteDialog, closeDeleteDialog] = useToggle(false)

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
          <>
            <Button variant="text" className="ml-4 border-b" onClick={openDeleteDialog}>
              Удалить
            </Button>
            <Dialog
              isOpen={isDeleteDialogOpen}
              onClose={closeDeleteDialog}
              className="max-w-lg w-full"
            >
              <ConfirmDialog
                title="Удалить документ"
                confirmText="Удалить"
                cancelText="Отмена"
                onConfirm={() => {
                  closeDeleteDialog()
                  onChange?.([])
                }}
                onCancel={closeDeleteDialog}
              />
            </Dialog>
          </>
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
        {typeof docs !== 'string' &&
          docs.map?.((file) => (
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

export function FileFieldView({ docs, schema }: IFileFieldViewProps) {
  if (schema.required && docs[0]) {
    return (
      <a target="_blank" href={docs as string} className="flex items-center mb-4" rel="noreferrer">
        <FileAddIcon className="mr-2 text-xl text-primary" />
        <div className="underline underline-offset-4">{schema.title}</div>
      </a>
    )
  } else {
    return (
      <>
        {(docs as Array<string>).map((file, index) => (
          <a
            target="_blank"
            href={file as string}
            className="flex items-center mb-4 hover:text-primary"
            key={index}
            rel="noreferrer"
          >
            <FileAddIcon className="mr-2 text-xl text-primary" />
            <div className="underline underline-offset-4">
              {schema.title} (Файл {index})
            </div>
          </a>
        ))}
      </>
    )
  }
}
