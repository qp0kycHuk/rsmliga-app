import { FieldView } from '@admin/components/FieldView'
import { TeamInfo } from '../../service/protocol.types'
import { useFetchCities } from '@admin/service/cities'

interface IInfoProps {
  team?: TeamInfo
}

export function TeamData({ team }: IInfoProps) {
  const { data: cityData } = useFetchCities()

  return (
    <div className="flex flex-col gap-1">
      <FieldView className="pl-4 py-1 pr-1  flex items-center">
        <div className="text-sm leading-none">{team?.name}</div>
        <div className="bg-gray dark:bg-dark-100 dark:bg-opacity-40 p-1 pr-4 rounded-md ml-auto flex items-center gap-2 print:bg-opacity-40">
          <div className="w-7 h-7 rounded-md" style={{ background: '#' + team?.color }} />
          <div className="text-sm">{team?.color_name || '-'}</div>
        </div>
      </FieldView>
      <FieldView>
        <div className="text-sm leading-none">
          {cityData?.entites[team?.location as string]?.NAME || '-'}
        </div>
      </FieldView>
    </div>
  )
}
