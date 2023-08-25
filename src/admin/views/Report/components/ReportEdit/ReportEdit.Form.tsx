import { PaperClipIcon } from '@assets/icons/fill'
import { Button, Field } from '@features/ui'
import { useReportEditContext } from './ReportEdit.Context'
import { ReportEditDocuments } from './ReportEdit.Documents'
import { ReportEditImages } from './ReportEdit.Images'

export function ReportEditForm() {
  const { contest } = useReportEditContext()

  return (
    <>
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

      <div className="my-8 border-t border-black border-opacity-20"></div>

      <ReportEditDocuments />
      <Button variant="text" className="mt-4">
        <PaperClipIcon className="mr-2 text-xl" />
        <div className="underline underline-offset-4">Прикрепить файл</div>
      </Button>

      <div className="my-8 border-t border-black border-opacity-20"></div>

      <ReportEditImages />
    </>
  )
}
