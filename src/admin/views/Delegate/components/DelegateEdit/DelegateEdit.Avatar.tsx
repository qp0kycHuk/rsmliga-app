import { useMemo } from 'react'
import { useDelegateEditContext } from './DelegateEdit.Context'
import { getFilePreview } from '@utils/helpers/files'
import { Uploader } from '@features/uploader'
import { CameraIcon, CrossIcon, PlusIcon } from '@assets/icons/fill'
import { FileDrop } from 'react-file-drop'
import { filterFiles } from '@features/uploader/helpers'
import { imageExtention } from '@features/uploader/extentions'
import { toast } from '@lib/Toast'
import { Button } from '@features/ui'

export function Avatar() {
  const { delegate, update } = useDelegateEditContext()

  const fileItems = useMemo(() => {
    if (delegate?.image_src) {
      return [
        {
          id: delegate?.id,
          src: delegate?.image_src,
          // title: article?.image,
        },
      ]
    }

    return []
  }, [delegate])

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
      <div className="w-60 h-60 rounded-full flex bg-primary bg-opacity-20 hover:bg-opacity-30 overflow-hidden">
        {delegate?.image_src ? (
          <img className="w-full h-full object-cover" src={delegate?.image_src} />
        ) : delegate.surname ? (
          <div className="m-auto text-primary text-7xl font-semibold">{delegate.surname?.[0]}</div>
        ) : (
          <CameraIcon className="m-auto text-primary text-7xl" />
        )}
        {!delegate?.image_src ? (
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

      {delegate?.image_src && (
        <Button
          onClick={removeImage}
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
    </div>
  )
}
