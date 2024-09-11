import { FieldView } from '@admin/components/FieldView'
import { useFetchCities } from '@admin/service/cities'

interface IInfoProps {
  team?: TeamInfo
}

export function TeamData({ team }: IInfoProps) {
  const { data: cityData } = useFetchCities()

  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        <FieldView className="pl-4 pr-1 flex items-center">
          <div className="text-sm leading-none">{team?.name}</div>
        </FieldView>
        <div className="sm:absolute right-1 top-1/2 sm:-translate-y-1/2 bg-default/5 p-1 pr-4 rounded-md ml-auto flex items-center gap-2 print:bg-opacity-40 max-sm:mt-1">
          <div className="w-7 h-7 rounded-md" style={{ background: '#' + team?.color }} />
          <div className="text-sm">{team?.color_name || '-'}</div>
        </div>
      </div>
      <FieldView>
        <div className="text-sm leading-none">
          {cityData?.entites[team?.location as string]?.VALUE || '-'}
        </div>
      </FieldView>
    </div>
  )
}
