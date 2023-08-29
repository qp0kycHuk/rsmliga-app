import { FileField } from '@admin/components/FileField/FileField'
import { useReportEditContext } from './ReportEdit.Context'
import { PaperClipIcon } from '@assets/icons/fill'
import { Button } from '@features/ui'

export function Documents() {
  const { report, update } = useReportEditContext()

  if (!report.documents) return null

  return (
    <>
      <div className="mb-5 text-lg font-semibold">Файлы и документы</div>
      {Object.entries(report.documents)
        ?.filter(([key, doc]) => doc.files?.length > 0 || doc.required)
        .map(([key, doc]) => (
          <FileField
            onChange={(files) => {
              update({
                documents: {
                  ...report.documents,
                  [key]: {
                    ...(report.documents as Record<string, IDoc>)[key],
                    files: files,
                  },
                },
              })
            }}
            key={key}
            item={doc}
          ></FileField>
        ))}

      <Button variant="text" className="mt-4">
        <PaperClipIcon className="mr-2 text-xl" />
        <div className="underline underline-offset-4">Прикрепить файл</div>
      </Button>
    </>
  )
}
