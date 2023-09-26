import { FileField } from '@admin/components/FileField/FileField'
import { useReportEditContext } from './ReportEdit.Context'
import { PaperClipIcon } from '@assets/icons/fill'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { DocumentsDialog } from './ReportEdit.DocumentsDialog'
import { useFetchReportDocuments } from '../../service/documents'
import { FileFieldSingle } from '@admin/components/FileField/FileFieldSingle'
import { FileFieldMultiple } from '@admin/components/FileField/FileFieldMultiple'
import { id } from '@utils/helpers/id'

export function Documents() {
  const { report, update } = useReportEditContext()
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)

  const { data: schemaData } = useFetchReportDocuments()

  return (
    <>
      <div className="mb-5 text-lg font-semibold">Файлы и документы</div>

      {schemaData?.items.map((item) =>
        item.multi ? (
          <FileFieldMultiple
            schema={item}
            key={item.id}
            docs={report.documents?.['doc_' + item.id] || []}
            onRemove={(file) =>
              update({
                documents: {
                  ...report.documents,
                  ['doc_' + item.id]:
                    report.documents?.['doc_' + item.id].filter((d) => id(d) !== id(file)) || [],
                },
                file_del: [...(report.file_del || []), ...(file.fid ? [file.fid] : [])],
              })
            }
            onChange={(files) => {
              update({
                documents: {
                  ...report.documents,
                  ['doc_' + item.id]: files,
                },
              })
            }}
          />
        ) : (
          <FileFieldSingle
            key={item.id}
            schema={item}
            doc={report.documents?.['doc_' + item.id][0] || null}
            onRemove={(file) => {
              update({
                documents: {
                  ...report.documents,
                  ['doc_' + item.id]: [],
                },
                file_del: [...(report.file_del || []), ...(file.fid ? [file.fid] : [])],
              })
            }}
            onChange={(file) => {
              update({
                documents: {
                  ...report.documents,
                  ['doc_' + item.id]: [file],
                },
              })
            }}
          />
        )
      )}

      {/* {Object.entries(documentsSchema)
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
        ))} */}

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
