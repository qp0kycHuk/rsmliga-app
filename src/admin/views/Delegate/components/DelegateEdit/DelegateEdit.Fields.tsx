import { Input, Select } from '@features/ui'
import { DatePicker } from '@features/ui/components/DatePicker'
import { useDelegateEditContext } from './DelegateEdit.Context'

export function Fields() {
  const { delegate, update } = useDelegateEditContext()

  return (
    <div className="grid grid-cols-2 gap-4">
      <label className="block">
        <div className="font-semibold mb-1">Фамилия {delegate.surname}</div>
        <Input
          className="w-full"
          defaultValue={delegate.surname}
          onChange={(event) => update({ surname: event.target.value })}
        />
      </label>
      <label className="block">
        <div className="font-semibold mb-1">Имя</div>
        <Input
          className="w-full"
          defaultValue={delegate.name}
          onChange={(event) => update({ name: event.target.value })}
        />
      </label>
      <label className="block">
        <div className="font-semibold mb-1">Отчество</div>
        <Input
          className="w-full"
          defaultValue={delegate.patronymic}
          onChange={(event) => update({ patronymic: event.target.value })}
        />
      </label>
      <label className="block">
        <div className="font-semibold mb-1">Дата рождения</div>
        <DatePicker
          className="w-full"
          defaultValue={delegate.birthday}
          onChange={(event) => update({ birthday: event.target.value })}
        />
      </label>
      <div>
        <div className="font-semibold mb-1">Пол</div>
        <Select
          inputProps={{
            defaultValue: delegate.sex,
            onChange: (event) => update({ sex: event.target.value }),
          }}
        >
          <option value="Male">Мужчина</option>
          <option value="Female">Женщина</option>
        </Select>
      </div>
      <div>
        <div className="font-semibold mb-1">Категория</div>
        <Select
          inputProps={{
            defaultValue: delegate.category,
            onChange: (event) => update({ category: event.target.value }),
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </div>
    </div>
  )
}
