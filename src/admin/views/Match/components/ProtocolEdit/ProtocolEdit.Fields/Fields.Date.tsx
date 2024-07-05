import { Field } from '@features/ui'
import { DatePicker } from '@features/ui/components/DatePicker'
import { FieldWrapper } from '@features/ui/components/Field/FieldWrapper'
import classes from '@ui/components/Field/Field.module.scss'
import { dateToSQLFormatString } from '@utils/helpers/dates'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function Date() {
  const { item, update } = useProtocolEditContext()

  return (
    <FieldWrapper
      placeholder="Дата проведения"
      inputProps={{ value: item?.date }}
      className={item?.date ? classes.active : ''}
      input={
        <DatePicker
          required
          className="w-full border-none"
          value={item?.date}
          onSelect={({ date }) => update({ date: dateToSQLFormatString(date as Date) })}
        />
      }
    />
  )
}
