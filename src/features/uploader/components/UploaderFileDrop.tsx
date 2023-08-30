import { PlusIcon } from '@assets/icons/fill'
import { FileDrop } from 'react-file-drop'

interface IUploaderFileDropProps {
  uploader: IUplodaer
}

export function UploaderFileDrop({ uploader }: IUploaderFileDropProps) {
  function dropHandler(files: FileList | null) {
    uploader.addItems(Array.from(files || []))
  }

  return (
    <FileDrop
      className="absolute inset-0"
      targetClassName="filedrop-target absolute -inset-4"
      draggingOverFrameClassName="over-frame"
      draggingOverTargetClassName="over-target"
      onDrop={dropHandler}
    >
      <PlusIcon className="m-auto text-4xl text-primary" />
    </FileDrop>
  )
}
