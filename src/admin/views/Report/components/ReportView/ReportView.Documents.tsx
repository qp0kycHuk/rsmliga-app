import { Button } from '@features/ui'
import { useFetchReportDocuments } from '../../service/documents'
import { FileViewSingle } from '@admin/components/FileField/FileViewSingle'
import { useToggle } from '@hooks/useToggle'

const MAX_SHOW = 7

export function ReportViewDocuments({ item }: IProps) {
  const [showAll, toggleShowAll] = useToggle(false)
  const { data: schemaData } = useFetchReportDocuments()

  const documents = schemaData?.items
    ?.filter((schema) => item.documents?.['doc_' + schema.id]?.length > 0)
    .reduce((acc: IItem[], schema) => {
      item.documents?.['doc_' + schema.id].map((file) => {
        acc.push({
          schema,
          file,
        })
      })

      return acc
    }, [])

  return (
    <>
      <div className="mb-5 text-lg font-semibold">Файлы и документы</div>
      {documents?.map(
        ({ schema, file }, index) =>
          (showAll || index < MAX_SHOW) && (
            <FileViewSingle key={schema.id} schema={schema} doc={file}></FileViewSingle>
          )
      )}

      {documents && documents?.length > MAX_SHOW && (
        <Button
          onClick={toggleShowAll}
          variant="text"
          className="font-semibold underline underline-offset-4"
        >
          {showAll ? 'Скрыть' : 'Показать все файлы'}
        </Button>
      )}
    </>
  )
}

interface IProps {
  item: IReport
}

interface IItem {
  schema: IReportDocument
  file: IFile
}
