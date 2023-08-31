import { FileField } from '@admin/components/FileField/FileField'
import { documentsSchema } from '../../service/schema'

interface IReportViewDocumentsProps {
  report: IReport
}

export function ReportViewDocuments({ report }: IReportViewDocumentsProps) {
  return (
    <>
      <div className="mb-5 text-lg font-semibold">Файлы и документы</div>
      {Object.entries(documentsSchema)
        ?.filter(([key, schema]) => schema.required || report.documents?.[key]?.length)
        .map(([key, schema]) => (
          <FileField key={key} schema={schema} docs={report.documents?.[key] || []}></FileField>
        ))}
    </>
  )
}
