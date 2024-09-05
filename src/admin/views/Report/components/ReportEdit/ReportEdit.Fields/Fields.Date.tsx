import { useReportEditContext } from '../ReportEdit.Context'
import { DatePicker } from '@features/ui/components/DatePicker'
import { FieldWrapper } from '@features/ui/components/Field/FieldWrapper'
import classes from '@ui/components/Field/Field.module.scss'
import { dateToSQLFormatString } from '@utils/helpers/dates'

export function Date() {
  const { report, update } = useReportEditContext()

  return (
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
  )
}
