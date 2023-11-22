import { getFilePreview } from '@utils/helpers/files'
import { CameraIcon, CrossIcon, PlusIcon } from '@assets/icons/fill'
import { FileDrop } from 'react-file-drop'
import { filterFiles } from '@features/uploader/helpers'
import { imageExtention } from '@features/uploader/extentions'
import { toast } from '@lib/Toast'
import { Button, Dialog } from '@features/ui'
import { SERVER_URL } from '@utils/index'
import { ConfirmDialog } from '@admin/components/ConfirmDialog'
import { useToggle } from '@hooks/useToggle'

interface IProps {
  item: IItem
  update: any
  placeholder?: string
}

interface IItem {
  imageFile?: File
  image_src?: string
  image_delete?: boolean
}

export function EditAvatar({ item, update, placeholder }: IProps) {
  const [isDeleteDialogOpen, , openDeleteDialog, closeDeleteDialog] = useToggle(false)

  async function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const dataUrl = await getFilePreview(file)

    update({
      imageFile: file,
      image_src: dataUrl || '',
      image_delete: false,
    })
  }

  async function removeImage() {
    // if (!user?.id) return

    update({
      imageFile: undefined,
      image_src: undefined,
      image_delete: true,
    })
    closeDeleteDialog()
  }

  async function dropHandler(files: FileList | null) {
    if (files?.[0]) {
      const filteredFiles = filterFiles(Array.from(files), [imageExtention.regex])

      if (filteredFiles[0]) {
        const file = filteredFiles[0]
        const dataUrl = await getFilePreview(file)

        update({
          imageFile: file,
          image_src: dataUrl || '',
          image_delete: false,
        })
      } else {
        toast.error('Неверный тип файла!', {
          autoClose: 1500,
          closeButton: false,
        })
      }
    }
  }

  return (
    <div className="relative">
      <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full flex bg-primary bg-opacity-20 hover:bg-opacity-30 overflow-hidden">
        {item?.image_src ? (
          <img
            className="w-full h-full object-cover"
            src={(item.imageFile ? '' : SERVER_URL) + item?.image_src}
          />
        ) : placeholder ? (
          <div className="m-auto text-primary text-7xl font-semibold">
            {placeholder?.[0].toUpperCase()}
          </div>
        ) : (
          <CameraIcon className="m-auto text-primary text-7xl" />
        )}
        {!item?.image_src ? (
          <label className="absolute inset-0 cursor-pointer">
            <input
              type="file"
              accept={imageExtention.accept}
              onChange={changeHandler}
              className="absolute inset-0 opacity-0 pointer-events-none"
            />
          </label>
        ) : null}
      </div>

      {item?.image_src && (
        <Button
          onClick={openDeleteDialog}
          className="absolute rounded-full right-1 top-1 shadow-lg"
          color="red"
          variant="whitebg"
          icon
        >
          <CrossIcon />
        </Button>
      )}

      <FileDrop
        className=""
        targetClassName="filedrop-target absolute -inset-4 rounded-full"
        draggingOverFrameClassName="over-frame"
        draggingOverTargetClassName="over-target"
        onDrop={dropHandler}
      >
        <PlusIcon className="m-auto text-4xl text-primary" />
      </FileDrop>

      <Dialog isOpen={isDeleteDialogOpen} onClose={closeDeleteDialog} className="max-w-lg w-full">
        <ConfirmDialog
          title="Удалить аватар"
          confirmText="Удалить"
          cancelText="Отмена"
          onConfirm={removeImage}
          onCancel={closeDeleteDialog}
        />
      </Dialog>
    </div>
  )
}
