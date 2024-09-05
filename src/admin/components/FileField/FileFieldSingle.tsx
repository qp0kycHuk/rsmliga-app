import { FileAddIcon } from '@assets/icons/fill'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { getFileItems } from '@utils/helpers/files'
import { ConfirmDialog } from '../ConfirmDialog'

interface IProps {
  doc: IFile | null
  schema: IDocSchema
  onChange?: (file: IFile) => void
  onRemove?: (file: IFile) => void
}

export function FileFieldSingle({ doc, schema, onChange, onRemove }: IProps) {
  const [isDeleteDialogOpen, , openDeleteDialog, closeDeleteDialog] = useToggle(false)

  async function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const newFiles = await getFileItems(Array.from(event.target.files || []))
    const file = newFiles[0]
    onChange?.(file)
  }

  return (
    <div className="flex items-center mb-4">
      <FileAddIcon className="mr-2 text-xl text-primary shrink-0" />
      <div className="max-sm:text-sm underline underline-offset-4">{schema.name}</div>
      {doc?.path || doc?.file ? (
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
                onRemove?.(doc)
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
}
