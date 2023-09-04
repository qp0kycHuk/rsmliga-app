import { Input, Select } from '@features/ui'
import { DatePicker } from '@features/ui/components/DatePicker'
import { useDelegateEditContext } from './DelegateEdit.Context'

export function Fields() {
  const { delegate, update } = useDelegateEditContext()

  return (
    <div className="grid grid-cols-2 gap-4">
      <label className="block">
        <div className="font-semibold mb-1">Фамилия</div>
        <Input className="w-full" defaultValue={delegate.surname} />
      </label>
      <label className="block">
        <div className="font-semibold mb-1">Имя</div>
        <Input className="w-full" defaultValue={delegate.name} />
      </label>
      <label className="block">
        <div className="font-semibold mb-1">Отчество</div>
        <Input className="w-full" defaultValue={delegate.patronymic} />
      </label>
      <label className="block">
        <div className="font-semibold mb-1">Дата рождения</div>
        <DatePicker className="w-full" defaultValue={delegate.birthday} />
      </label>
      <div>
        <div className="font-semibold mb-1">Пол</div>
        <Select inputProps={{ defaultValue: delegate.sex }}>
          <option value="Male">Мужчина</option>
          <option value="Female">Женщина</option>
        </Select>
      </div>
      <div>
        <div className="font-semibold mb-1">Категория</div>
        <Select inputProps={{ defaultValue: delegate.category }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </div>
    </div>
  )
}
