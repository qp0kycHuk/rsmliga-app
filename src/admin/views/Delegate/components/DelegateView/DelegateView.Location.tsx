import { FieldView } from '@admin/components/FieldView'
import { useFetchCities } from '@admin/service/cities'

interface ILocationProps {
  item: IDelegate
}

export function Location({ item }: ILocationProps) {
  const { data } = useFetchCities()

  return (
    <FieldView>
      <div className="text-lg leading-none">
        <span className="font-semibold">Населенный пункт: </span>
        {data?.entites[item.location]?.NAME || '-'}
      </div>
    </FieldView>
  )
}
