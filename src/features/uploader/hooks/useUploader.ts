import { getRandomUUID } from '@utils/index'
import { imageExtention } from '../extentions'
import { useCallback } from 'react'
import { filterFiles } from '../helpers'

export function useUploader({
  fileItems = [],
  extention = imageExtention,
  multiple = true,
  rounded = false,
  sign = true,
  max,
  label,
  onChange,
  onRemove,
}: IUploaderProps): IUplodaer {
  const addItems = useCallback(
    (items: File[]) => {
      const newItems = filterFiles(items, extention ? [extention.regex] : []).map((file) => ({
        key: getRandomUUID(),
        file,
        name: file.name,
      }))

      const updateditems = [...(multiple ? newItems : newItems[0] ? [newItems[0]] : [])]
      updateditems.splice((max || updateditems.length) - fileItems.length)

      onChange?.(updateditems)
    },
    [extention, multiple, onChange]
  )

  const updateItem = useCallback((item: IFile, data: Partial<IFile>) => {
    const changedItem = {
      ...item,
      ...data,
    }

    onChange?.(fileItems.map((el) => (el === item ? changedItem : el)))
  }, [])

  const removeItem = useCallback(
    (item: IFile) => {
      onRemove?.(item)
    },
    [onRemove]
  )

  return {
    extention: extention || imageExtention,
    multiple,
    rounded,
    sign,
    fileItems,
    addItems,
    updateItem,
    removeItem,
    max,
    label,
  }
}
