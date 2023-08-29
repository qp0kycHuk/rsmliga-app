import { useMemo } from 'react'
import { Uploader } from '@features/uploader'
import { useReportEditContext } from './ReportEdit.Context'
import { getFileItems } from '@utils/helpers/files'

// control upload and remove images
export function ReportEditImages() {
  const { report, update, loadingStart, loadingEnd } = useReportEditContext()

  const fileItems = useMemo(() => {
    return report?.images?.map((item) => ({
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
      images: [...(report?.images || []), ...updatedFiles],
    })
  }

  function removeHandler(fileItem: IFile) {
    update({
      images: report?.images?.filter((item) => item.id !== fileItem.id),
    })
  }

  return (
    <Uploader max={5} fileItems={fileItems} onChange={changeHandler} onRemove={removeHandler}>
      <div className="text-lg font-semibold">Общее фото</div>
    </Uploader>
  )
}
