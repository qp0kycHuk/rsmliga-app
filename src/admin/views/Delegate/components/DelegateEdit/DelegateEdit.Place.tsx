import { Select } from '@features/ui'
import { useDelegateEditContext } from './DelegateEdit.Context'

export function Place() {
  const { delegate, update } = useDelegateEditContext()

  return (
    <div>
      <div className="font-semibold mb-1">Населенный пункт</div>
      <Select inputProps={{ defaultValue: delegate.place }}>
        <option value="г. Геленджик">г. Геленджик</option>
        <option value="г. Краснодар">г. Краснодар</option>
        <option value="г. Ростов">г. Ростов</option>
        <option value="г. Аксай">г. Аксай</option>
        <option value="г. Майкоп">г. Майкоп</option>
      </Select>
    </div>
  )
}
