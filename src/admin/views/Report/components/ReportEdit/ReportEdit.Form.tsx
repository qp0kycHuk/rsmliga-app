import { Button, Dialog, DialogHeader, Textarea } from '@features/ui'
import { useReportEditContext } from './ReportEdit.Context'
import { Documents } from './ReportEdit.Documents'
import { ContestImages } from './ReportEdit.ContestImages'
import { GeneralImages } from './ReportEdit.GeneralImages'
import { Separator } from '@admin/components/Separator'
import { TeamImages } from './ReportEdit.TeamImages'
import { Fields } from './ReportEdit.Fields/Fields'
import { useToggle } from '@hooks/useToggle'
import { useFetchReportStatuses } from '../../service/statuses'
import { useRef } from 'react'
import { useReportStatus } from '../../hooks/useReportStatus'

export function Form() {
  const { report, update, submit, loading, onCancel } = useReportEditContext()
  const [isSendDialogOpen, , openSendDialog, closeSendDialog] = useToggle(false)

  const { data: statusesData, isStatusNone, isStatusEditable } = useReportStatus(report as IReport)

  const checkingId = statusesData?.items.find(({ XML_ID }) => XML_ID == 'checking')?.ID
  const editingId = statusesData?.items.find(({ XML_ID }) => XML_ID == 'editing')?.ID

  const sendedStatusId = useRef<EntityId>()

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault()

    await submit({
      newStatus: sendedStatusId.current as string,
    })

    if (checkingId === sendedStatusId.current) {
      openSendDialog()
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-8 text-xl sm:text-2xl font-bold">Отчет о проведении соревнований</div>

      <Fields />

      <Separator />
      <Documents />

      <Separator />
      <TeamImages />

      <Separator />
      <GeneralImages />

      <Separator />
      <ContestImages />

      <Separator />
      <Textarea
        className="w-full h-40 resize-none"
        placeholder="Комментарий"
        value={report.comment || ''}
        onChange={(event) =>
          update({
            comment: event.target.value,
          })
        }
      />

      <div className="flex max-lg:flex-col gap-4 mt-8">
        <Button
          type="submit"
          disabled={loading || !isStatusEditable}
          onClick={() => (sendedStatusId.current = checkingId)}
        >
          Отправить отчет в департамент проведения соревнований
        </Button>
        <Button
          type="submit"
          variant="contur"
          disabled={loading || !isStatusEditable}
          onClick={() => (sendedStatusId.current = editingId)}
        >
          Сохранить
        </Button>
        <Button variant="light" onClick={onCancel}>
          Отмена
        </Button>
      </div>

      <Dialog isOpen={isSendDialogOpen} onClose={closeSendDialog} className="max-w-xl w-full">
        <DialogHeader>
          <div className="text-3xl font-semibold text-center">Ваш отчет принят на рассмотрение</div>
        </DialogHeader>
        <div className="p-8">
          Не забудьте отправить оригиналы документов в Департамент проведения соревнований по
          адресу: 344029, г. Ростов-на-Дону, ул. Менжинского, д. 2Л, офис 106
          <Button className="mt-6" onClick={closeSendDialog}>
            Закрыть
          </Button>
        </div>
      </Dialog>
    </form>
  )
}
