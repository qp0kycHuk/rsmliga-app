import { useFetchTournaments } from '@admin/service/tournaments'

interface ICompetitionsProps {
  item: ISecretary
}

export function Competitions({ item }: ICompetitionsProps) {
  const { data } = useFetchTournaments()

  return (
    <div className="space-y-4">
      {item.competitions?.map((id, index) => (
        <div className="p-4 rounded-md bg-gray bg-opacity-40" key={id}>
          <div className="text-lg leading-none">
            <span className="font-semibold">{index + 1}. </span>
            {data?.entites[id].NAME}
          </div>
        </div>
      ))}
    </div>
  )
}
