import { useFetchCities } from '@admin/service/cities'

interface ICompetitionsProps {
  item: ISecretary
}

export function Locations({ item }: ICompetitionsProps) {
  const { data } = useFetchCities()

  if (!item.locations) {
    return null
  }

  return (
    <div className="space-y-4">
      {item.locations?.map((id, index) => (
        <div className="p-4 rounded-md bg-gray bg-opacity-40" key={id}>
          <div className="text-lg leading-none">
            <span className="font-semibold">{index + 1}. Город/район: </span>
            {data?.entites[id].NAME}
          </div>
        </div>
      ))}
    </div>
  )
}
