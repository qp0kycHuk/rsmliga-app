import { AdminSelect } from '@admin/components/AdminSelect'
import { useFetchSeasons } from '@admin/service/seasons'
import { useDelegatesContext } from './Delegates.Context'

export function Seasons() {
  const { seasonId, changeFilterParam } = useDelegatesContext()
  const { data: seasonsData } = useFetchSeasons()

  return (
    <AdminSelect
      itemsClassName="!max-h-80 overflow-auto"
      label="Сезон"
      placeholder="Любой"
      value={seasonId}
      items={seasonsData?.ids || []}
      onChange={(value) => changeFilterParam('sezon', value?.toString() || '')}
      renderItem={(id) => seasonsData?.entites[id]?.NAME || ''}
    />
  )
}
