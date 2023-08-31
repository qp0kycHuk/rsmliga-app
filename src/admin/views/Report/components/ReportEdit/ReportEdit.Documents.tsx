import { FileField } from '@admin/components/FileField/FileField'
import { useReportEditContext } from './ReportEdit.Context'
import { PaperClipIcon } from '@assets/icons/fill'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { DocumentsDialog } from './ReportEdit.DocumentsDialog'
import { documentsSchema } from '../../service/schema'

export function Documents() {
  const { report, update } = useReportEditContext()
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)

  return (
    <>
      <div className="mb-5 text-lg font-semibold">Файлы и документы</div>
      {Object.entries(documentsSchema)
        ?.filter(([key, schema]) => schema.required || report.documents?.[key]?.length)
        .map(([key, schema]) => (
          <FileField
            onChange={(files) => {
              update({
                documents: {
                  ...report.documents,
                  [key]: files,
                },
              })
            }}
            key={key}
            schema={schema}
            docs={report.documents?.[key] || []}
          ></FileField>
        ))}

      <Button variant="text" className="mt-4" onClick={openDialog}>
        <PaperClipIcon className="mr-2 text-xl" />
        <div className="underline underline-offset-4">Прикрепить файл</div>
      </Button>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} className="max-w-lg w-full">
        <DocumentsDialog onClose={closeDialog} />
      </Dialog>
    </>
  )
}
