import { Button, Field } from '@features/ui'
import { useReportEditContext } from './ReportEdit.Context'
import { Documents } from './ReportEdit.Documents'
import { ContestImages } from './ReportEdit.ContestImages'
import { GeneralImages } from './ReportEdit.GeneralImages'
import { Separator } from './ReportEdit.Separator'
import { TeamImages } from './ReportEdit.TeamImages'

export function Form() {
  const { contest, submit } = useReportEditContext()

  return (
    <form onSubmit={submit}>
      <div className="mb-8 text-2xl font-bold">Отчет о проведении соревнований</div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Соревнование: </span>
            {contest.name}
          </div>
        </div>
        <div className="col-span-2 p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Этап: </span>
            {contest.step}
          </div>
        </div>
        <div className="p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Город/район: </span>
            {contest.area}
          </div>
        </div>
        <div className="p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Сезон: </span>
            {contest.season}
          </div>
        </div>

        <div>
          <Field
            placeholder="Место проведения:"
            inputProps={{
              defaultValue: contest.place,
            }}
          />
        </div>

        <div className="p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Дата проведения: </span>
            {contest.date}
          </div>
        </div>
      </div>

      <Separator />
      <Documents />

      <Separator />
      <TeamImages />

      <Separator />
      <GeneralImages />

      <Separator />
      <ContestImages />

      <div className="flex gap-4 mt-8">
        <Button>Отправить отчет в департамент проведения соревнований</Button>
        <Button type="submit" variant="contur">
          Сохранить
        </Button>
        <Button variant="light">Отмена</Button>
      </div>
    </form>
  )
}
