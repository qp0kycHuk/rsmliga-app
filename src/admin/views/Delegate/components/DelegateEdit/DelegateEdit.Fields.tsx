import { Input, Select } from '@features/ui'
import { DatePicker } from '@features/ui/components/DatePicker'
import { useDelegateEditContext } from './DelegateEdit.Context'
import { dateToSQLFormatString } from '@utils/helpers/dates'
import { Asterisk } from '@components/Asterisk'
import { useFetchSex } from '@admin/service/sex'
import { useFetchCategories } from '../../service/categories'

export function Fields() {
  const { delegate, update } = useDelegateEditContext()

  const { data: sexData } = useFetchSex()
  const { data: categoriesData } = useFetchCategories()

  return (
    <div className="grid grid-cols-2 gap-4">
      <label className="block">
        <div className="font-semibold mb-1">
          Фамилия <Asterisk />
        </div>
        <Input
          required
          className="w-full"
          defaultValue={delegate.surname}
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
          defaultValue={delegate.name}
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
          defaultValue={delegate.patronymic}
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
          value={delegate.birthdate}
          onSelect={({ date }) => update({ birthdate: dateToSQLFormatString(date as Date) })}
        />
      </label>
      <div>
        <div className="font-semibold mb-1">
          Пол <Asterisk />
        </div>
        <Select
          required
          value={delegate.sex || ''}
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
          value={delegate.category || ''}
          onChange={(event) => update({ category: event.target.value })}
          placeholder="Не назначен"
        >
          {categoriesData?.items.map((cat) => (
            <option key={cat.ID} value={cat.ID}>
              {cat.VALUE}
            </option>
          ))}
        </Select>
      </div>
    </div>
  )
}
