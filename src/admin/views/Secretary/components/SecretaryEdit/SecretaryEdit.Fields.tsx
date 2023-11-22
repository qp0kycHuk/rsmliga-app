import { Input, Select } from '@features/ui'
import { DatePicker } from '@features/ui/components/DatePicker'
import { dateToSQLFormatString } from '@utils/helpers/dates'
import { Asterisk } from '@components/Asterisk'
import { useSecretaryEditContext } from './SecretaryEdit.Context'
import { useFetchSex } from '../../service/sex'
import { useFetchCategories } from '../../service/categories'
import { useFetchEducation } from '../../service/education'
import { twMerge } from 'tailwind-merge'

interface IProps {
  className?: string
}

export function Fields({ className }: IProps) {
  const { item, update } = useSecretaryEditContext()

  const { data: sexData } = useFetchSex()
  const { data: categoriesData } = useFetchCategories()
  const { data: educationData } = useFetchEducation()

  return (
    <div className={twMerge('grid md:grid-cols-2 gap-4 max-w-2xl w-full', className)}>
      <label className="block">
        <div className="font-semibold mb-1">
          Фамилия <Asterisk />
        </div>
        <Input
          required
          className="w-full"
          defaultValue={item.surname}
          onChange={(event) => update({ surname: event.target.value })}
        />
      </label>
      <label className="block">
        <div className="font-semibold mb-1">
          Имя <Asterisk />
        </div>
        <Input
          required
          className="w-full"
          defaultValue={item.name}
          onChange={(event) => update({ name: event.target.value })}
        />
      </label>
      <label className="block">
        <div className="font-semibold mb-1">
          Отчество <Asterisk />
        </div>
        <Input
          required
          className="w-full"
          defaultValue={item.patronymic}
          onChange={(event) => update({ patronymic: event.target.value })}
        />
      </label>
      <label className="block">
        <div className="font-semibold mb-1">
          Дата рождения <Asterisk />
        </div>
        <DatePicker
          required
          className="w-full"
          value={item.birthdate}
          onSelect={({ date }) => update({ birthdate: dateToSQLFormatString(date as Date) })}
        />
      </label>
      <div>
        <div className="font-semibold mb-1">
          Пол <Asterisk />
        </div>
        <Select
          required
          value={item.sex || ''}
          onChange={(event) => update({ sex: event.target.value })}
          placeholder="Не назначен"
        >
          {sexData?.items.map((sex) => (
            <option key={sex.ID} value={sex.ID}>
              {sex.VALUE}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <div className="font-semibold mb-1">Категория</div>
        <Select
          value={item.category_id || ''}
          onChange={(event) => update({ category_id: event.target.value })}
          placeholder="Не назначен"
        >
          {categoriesData?.items.map((cat) => (
            <option key={cat.ID} value={cat.ID}>
              {cat.VALUE}
            </option>
          ))}
        </Select>
      </div>
      <div className="md:col-span-2">
        <div className="font-semibold mb-1">Образование</div>
        <Select
          value={item.education_id || ''}
          onChange={(event) => update({ education_id: event.target.value })}
          placeholder="Нет"
        >
          {educationData?.items.map((education) => (
            <option key={education.ID} value={education.ID}>
              {education.VALUE}
            </option>
          ))}
        </Select>
      </div>
    </div>
  )
}
