import { useFetchReportDocuments } from '../../service/documents'
import { documentsSchema } from '../../service/schema'
import { FileViewSingle } from '@admin/components/FileField/FileViewSingle'

interface IReportViewDocumentsProps {
  report: IReport
}

export function ReportViewDocuments({ report }: IReportViewDocumentsProps) {
  const { data: schemaData } = useFetchReportDocuments()

  return (
    <>
      <div className="mb-5 text-lg font-semibold">Файлы и документы</div>
      {schemaData?.items
        ?.filter((schema) => report.documents?.['doc_' + schema.id]?.length > 0)
        .map((schema) =>
          report.documents?.['doc_' + schema.id].map((file) => (
            <FileViewSingle key={schema.id} schema={schema} doc={file}></FileViewSingle>
          ))
        )}
    </>
  )
}
