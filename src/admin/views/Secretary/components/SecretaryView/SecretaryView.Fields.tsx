import { twMerge } from 'tailwind-merge'
import { useFetchCategories } from '../../service/categories'
import { useFetchEducation } from '../../service/education'
import { useFetchSex } from '../../service/sex'

interface IFieldsProps {
  item: ISecretary
  className?: string
}

export function Fields({ item, className }: IFieldsProps) {
  const { data: sexData } = useFetchSex()
  const { data: categoriesData } = useFetchCategories()
  const { data: educationData } = useFetchEducation()

  return (
    <div className={twMerge('grid md:grid-cols-2 gap-4 w-full max-w-xl', className)}>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="sm:text-lg leading-none">
          <span className="font-semibold">Фамилия: </span>
          {item.surname}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="sm:text-lg leading-none">
          <span className="font-semibold">Имя: </span>
          {item.name}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="sm:text-lg leading-none">
          <span className="font-semibold">Отчество: </span>
          {item.patronymic}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="sm:text-lg leading-none">
          <span className="font-semibold">Дата рождения: </span>
          {new Date(item.birthdate).toLocaleDateString()}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="sm:text-lg leading-none">
          <span className="font-semibold">Пол: </span>
          {sexData?.entites[item.sex]?.VALUE || '-'}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40">
        <div className="sm:text-lg leading-none">
          <span className="font-semibold">Категория: </span>
          {categoriesData?.entites[item.category_id]?.VALUE || '-'}
        </div>
      </div>
      <div className="p-4 rounded-md bg-gray bg-opacity-40 md:col-span-2">
        <div className="sm:text-lg leading-none">
          <span className="font-semibold">Образование: </span>
          {educationData?.entites[item.education_id]?.VALUE || '-'}
        </div>
      </div>
    </div>
  )
}
