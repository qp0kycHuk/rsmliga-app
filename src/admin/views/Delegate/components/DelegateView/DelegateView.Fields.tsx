import { useFetchCategories } from '../../service/categories'
import { useFetchSex } from '@admin/service/sex'

interface IFieldsProps {
  item: IDelegate
}

export function Fields({ item }: IFieldsProps) {
  const { data: sexData } = useFetchSex()
  const { data: categoriesData } = useFetchCategories()

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="text-lg leading-none">
          <span className="font-semibold">Фамилия: </span>
          {item.surname}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="text-lg leading-none">
          <span className="font-semibold">Имя: </span>
          {item.name}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="text-lg leading-none">
          <span className="font-semibold">Отчество: </span>
          {item.patronymic}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="text-lg leading-none">
          <span className="font-semibold">Дата рождения: </span>
          {new Date(item.birthdate).toLocaleDateString()}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="text-lg leading-none">
          <span className="font-semibold">Пол: </span>
          {sexData?.entites[item.sex]?.VALUE || '-'}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="text-lg leading-none">
          <span className="font-semibold">Категория: </span>
          {categoriesData?.entites[item.category]?.VALUE || '-'}
        </div>
      </div>
    </div>
  )
}
