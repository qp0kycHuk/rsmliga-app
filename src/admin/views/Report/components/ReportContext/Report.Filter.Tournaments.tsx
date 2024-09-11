import { AdminSelect } from '@admin/components/AdminSelect'
import { useFetchTournaments } from '@admin/service/tournaments'
import { useReportContext } from './Report.Context'

export function Tournaments() {
  const { turnierId, seasonId, changeFilterParam } = useReportContext()
  const { data: tournamentsData } = useFetchTournaments()

  const ids = seasonId
    ? tournamentsData?.items
        .filter((tournament) => tournament.SECTION_ID === seasonId)
        .map(({ ID }) => ID) || []
    : tournamentsData?.ids || []

  return (
    <AdminSelect
      itemsClassName="!max-h-80 w-96 overflow-auto"
      label="Соревнование"
      placeholder="Любое"
      value={turnierId}
      items={ids}
      onChange={(value) => changeFilterParam('turnier', value?.toString() || '')}
      renderItem={(id) => tournamentsData?.entites[id]?.NAME || ''}
    />
  )
}
