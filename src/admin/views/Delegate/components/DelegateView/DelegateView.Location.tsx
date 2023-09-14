import { useFetchCities } from '@admin/service/cities'

interface ILocationProps {
  item: IDelegate
}

export function Location({ item }: ILocationProps) {
  const { data } = useFetchCities()

  return (
    <div className="p-4 rounded-md bg-gray bg-opacity-40">
      <div className="text-lg leading-none">
        <span className="font-semibold">Населенный пункт: </span>
        {data?.entites[item.location]?.NAME || '-'}
      </div>
    </div>
  )
}
