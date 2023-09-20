import { useFetchCategories } from '../../service/categories'
import { useFetchEducation } from '../../service/education'
import { useFetchSex } from '../../service/sex'

interface IFieldsProps {
  item: ISecretary
}

export function Fields({ item }: IFieldsProps) {
  const { data: sexData } = useFetchSex()
  const { data: categoriesData } = useFetchCategories()
  const { data: educationData } = useFetchEducation()

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
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
          {categoriesData?.entites[item.category_id]?.VALUE || '-'}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40 col-span-2">
        <div className="text-lg leading-none">
          <span className="font-semibold">Образование: </span>
          {educationData?.entites[item.education_id]?.VALUE || '-'}
        </div>
      </div>
    </div>
  )
}
