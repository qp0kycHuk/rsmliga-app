import { Button, Field, Select, SelectField, Textarea } from '@features/ui'
import { useReportEditContext } from './ReportEdit.Context'
import { Documents } from './ReportEdit.Documents'
import { ContestImages } from './ReportEdit.ContestImages'
import { GeneralImages } from './ReportEdit.GeneralImages'
import { Separator } from '../../../../components/Separator'
import { TeamImages } from './ReportEdit.TeamImages'
import { DatePicker } from '@features/ui/components/DatePicker'
import { dateToSQLFormatString } from '@utils/helpers/dates'
import { FieldWrapper } from '@features/ui/components/Field/FieldWrapper'
import { useFetchCities } from '@admin/service/cities'
import classes from '@ui/components/Field/Field.module.scss'

export function Form() {
  const { report, update, submit } = useReportEditContext()

  const { data: CitiesData } = useFetchCities()

  return (
    <form onSubmit={submit}>
      <div className="mb-8 text-2xl font-bold">Отчет о проведении соревнований</div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Соревнование: </span>
            {report.competition}
          </div>
        </div>
        <div className="col-span-2 p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Этап: </span>
            {report.stage}
          </div>
        </div>
        {/* <div className="p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Город/район: </span>
            {report.area}
          </div>
        </div> */}
        <div>
          <Select
            placeholder="Город/район:"
            required
            value={report.area_id}
            onChange={(event) => {
              update({
                area_id: event.target.value,
              })
            }}
          >
            {CitiesData?.items.map((city) => (
              <option key={city.ID} value={city.ID}>
                {city.NAME}
              </option>
            ))}
          </Select>
        </div>

        <div className="p-4 rounded-md bg-gray bg-opacity-40">
          <div className="text-lg leading-none">
            <span className="font-semibold">Сезон: </span>
            {report.season}
          </div>
        </div>

        <div>
          <Field
            placeholder="Место проведения:"
            inputProps={{
              value: report.location || '',
              onChange: (event) => {
                update({
                  location: event.target.value,
                })
              },
            }}
          />
        </div>

        <div className="">
          <FieldWrapper
            placeholder="Дата проведения"
            inputProps={{ value: report.date }}
            className={report.date ? classes.active : ''}
            input={
              <DatePicker
                required
                className="w-full border-none"
                value={report.date}
                onSelect={({ date }) => update({ date: dateToSQLFormatString(date as Date) })}
              />
            }
          />
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
        <Button>Отправить отчет в департамент проведения соревнований</Button>
        <Button type="submit" variant="contur">
          Сохранить
        </Button>
        <Button variant="light">Отмена</Button>
      </div>
    </form>
  )
}
