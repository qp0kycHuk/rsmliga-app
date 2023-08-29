import { useMemo } from 'react'
import { Uploader } from '@features/uploader'
import { useReportEditContext } from './ReportEdit.Context'
import { getFileItems } from '@utils/helpers/files'

interface IImagesProps extends React.PropsWithChildren {
  keyOfImages: 'generalImages' | 'contestImages'
  max: number
}

// control upload and remove images
export function Images({ children, keyOfImages, max }: IImagesProps) {
  const { report, update, loadingStart, loadingEnd } = useReportEditContext()

  const fileItems = useMemo(() => {
    return report?.[keyOfImages]?.map((item) => ({
      id: item.id,
      src: item.src,
      name: item.name,
    }))
  }, [report])

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
      [keyOfImages]: report?.[keyOfImages]?.filter((item) => item.id !== fileItem.id),
    })
  }

  return (
    <Uploader max={max} fileItems={fileItems} onChange={changeHandler} onRemove={removeHandler}>
      {children}
    </Uploader>
  )
}
