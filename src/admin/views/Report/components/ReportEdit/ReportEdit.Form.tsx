import { Button, Textarea } from '@features/ui'
import { useReportEditContext } from './ReportEdit.Context'
import { Documents } from './ReportEdit.Documents'
import { ContestImages } from './ReportEdit.ContestImages'
import { GeneralImages } from './ReportEdit.GeneralImages'
import { Separator } from '@admin/components/Separator'
import { TeamImages } from './ReportEdit.TeamImages'
import { Fields } from './ReportEdit.Fields/Fields'

export function Form() {
  const { report, update, submit, send, loading, onCancel } = useReportEditContext()

  return (
    <form onSubmit={submit}>
      <div className="mb-8 text-2xl font-bold">Отчет о проведении соревнований</div>

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

      <div className="flex gap-4 mt-8">
        <Button onClick={send} disabled={loading}>
          Отправить отчет в департамент проведения соревнований
        </Button>
        <Button type="submit" variant="contur" disabled={loading}>
          Сохранить
        </Button>
        <Button variant="light" onClick={onCancel}>
          Отмена
        </Button>
      </div>
    </form>
  )
}
