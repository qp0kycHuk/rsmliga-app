import { UploaderFileDrop } from './UploaderFileDrop'
import { UploaderItems } from './UploaderItems'
import { UploaderLabel } from './UploaderLabel'
import { useUploader } from '../hooks/useUploader'

export function Uploader({
  fileItems,
  multiple,
  rounded,
  sign,
  onChange,
  onRemove,
  children,
  max,
  label,
}: IUploaderProps) {
  const uploader = useUploader({
    multiple,
    rounded,
    sign,
    fileItems: fileItems,
    onChange,
    onRemove,
    max,
    label,
  })

  const isNonMultipleAccept = !(!uploader.multiple && uploader.fileItems.length > 0)

  return (
    <div className="relative flex flex-wrap gap-3">
      {children ? <div className="w-full">{children}</div> : null}
      <UploaderFileDrop uploader={uploader} />
      <UploaderItems uploader={uploader} />
      {isNonMultipleAccept ? <UploaderLabel uploader={uploader} /> : null}
    </div>
  )
}
