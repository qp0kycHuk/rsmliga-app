import { AdminSelect } from '@admin/components/AdminSelect'
import { useFetchTournaments } from '@admin/service/tournaments'
import { useMatchContext } from './Match.Context'

export function Competition() {
  const { competitionId, changeFilterParam } = useMatchContext()
  const { data: tournamentsData } = useFetchTournaments()

  return (
    <AdminSelect
      itemsClassName="!max-h-80 w-96 overflow-auto"
      label="Соревнование"
      placeholder="Любое"
      value={competitionId}
      items={tournamentsData?.ids || []}
      onChange={(value) => changeFilterParam([['competition', value?.toString() || '']])}
      renderItem={(id) => tournamentsData?.entites[id]?.NAME || ''}
    />
  )
}
