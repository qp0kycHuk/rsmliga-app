import { FieldView } from '@admin/components/FieldView'
import { useFetchCategories } from '../../service/categories'
import { useFetchSex } from '../../service/sex'
import { twMerge } from 'tailwind-merge'

interface IFieldsProps {
  item: IDelegate
  className?: string
}

export function Fields({ item, className }: IFieldsProps) {
  const { data: sexData } = useFetchSex()
  const { data: categoriesData } = useFetchCategories()

  return (
    <div className={twMerge('grid md:grid-cols-2 gap-4 max-w-2xl w-full', className)}>
      <FieldView>
        <div className="text-lg leading-none">
          <span className="font-semibold">Фамилия: </span>
          {item.surname}
        </div>
      </FieldView>
      <FieldView>
        <div className="text-lg leading-none">
          <span className="font-semibold">Имя: </span>
          {item.name}
        </div>
      </FieldView>
      <FieldView>
        <div className="text-lg leading-none">
          <span className="font-semibold">Отчество: </span>
          {item.patronymic}
        </div>
      </FieldView>
      <FieldView>
        <div className="text-lg leading-none">
          <span className="font-semibold">Дата рождения: </span>
          {new Date(item.birthdate).toLocaleDateString()}
        </div>
      </FieldView>
      <FieldView>
        <div className="text-lg leading-none">
          <span className="font-semibold">Пол: </span>
          {sexData?.entites[item.sex]?.VALUE || '-'}
        </div>
      </FieldView>
      <FieldView>
        <div className="text-lg leading-none">
          <span className="font-semibold">Категория: </span>
          {categoriesData?.entites[item.category]?.VALUE || '-'}
        </div>
      </FieldView>
    </div>
  )
}
