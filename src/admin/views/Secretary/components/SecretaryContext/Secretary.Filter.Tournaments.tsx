import { AdminSelect } from '@admin/components/AdminSelect'
import { useFetchTournaments } from '@admin/service/tournaments'
import { useSecretariesContext } from './Secretary.Context'

export function Tournaments() {
  const { turnierId, changeFilterParam } = useSecretariesContext()
  const { data: tournamentsData } = useFetchTournaments()

  return (
    <AdminSelect
      itemsClassName="!max-h-80 w-96 overflow-auto"
      label="Соревнование"
      placeholder="Любое"
      value={turnierId}
      items={tournamentsData?.ids || []}
      onChange={(value) => changeFilterParam('turnier', value?.toString() || '')}
      renderItem={(id) => tournamentsData?.entites[id]?.NAME || ''}
    />
  )
}
