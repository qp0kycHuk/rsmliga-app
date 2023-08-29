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

      onChange?.([...(multiple ? newItems : newItems[0] ? [newItems[0]] : [])])
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
  }
}
