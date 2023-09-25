import { useMemo } from 'react'
import { Uploader } from '@features/uploader'
import { useReportEditContext } from './ReportEdit.Context'
import { getFileItems } from '@utils/helpers/files'
import { SERVER_URL } from '@utils/index'
import { id } from '@utils/helpers/id'

interface IImagesProps extends React.PropsWithChildren {
  keyOfImages: IImagesKey
  max: number
}

// control upload and remove images
export function Images({ children, keyOfImages, max }: IImagesProps) {
  const { report, update, loadingStart, loadingEnd } = useReportEditContext()

  const fileItems = useMemo(() => {
    return report?.[keyOfImages]?.map((item) => ({
      id: id(item),
      src: (item.file ? '' : SERVER_URL) + (item.path || item.src),
    }))
  }, [report[keyOfImages]])

  async function changeHandler(fileItems: IFile[]) {
    const files = fileItems.map((item) => (item as Required<IFile>).file)

    loadingStart()
    const updatedFiles = await getFileItems(files)
    loadingEnd()

    update({
      [keyOfImages]: [...(report?.[keyOfImages] || []), ...updatedFiles],
    })
  }

  function removeHandler(fileItem: IFile) {
    update({
      [keyOfImages]: report?.[keyOfImages]?.filter((item) => id(item) !== id(fileItem)),
      file_del: [...(report.file_del || []), ...(fileItem.id ? [fileItem.id] : [])],
    })
  }

  return (
    <Uploader max={max} fileItems={fileItems} onChange={changeHandler} onRemove={removeHandler}>
      {children}
    </Uploader>
  )
}
