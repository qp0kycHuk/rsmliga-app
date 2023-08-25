import { FileField } from '@admin/components/FileField/FileField'
import { useReportEditContext } from './ReportEdit.Context'

export function ReportEditDocuments() {
  const { report, update } = useReportEditContext()

  return (
    <>
      <div className="mb-5 text-lg font-semibold">Файлы и документы</div>
      {report?.documents
        ?.filter((doc) => doc.files?.length > 0 || doc.required)
        .map((doc) => (
          <FileField
            onChange={(files) => {
              update({
                documents: report.documents?.map((item) => ({
                  ...item,
                  files: item.name === doc.name ? files : item.files,
                })),
              })
            }}
            key={doc.name}
            item={doc}
          ></FileField>
        ))}
    </>
  )
}
