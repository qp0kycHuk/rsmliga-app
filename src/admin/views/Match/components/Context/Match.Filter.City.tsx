import { AdminSelect } from '@admin/components/AdminSelect'
import { useMatchContext } from './Match.Context'
import { useFetchCities } from '@admin/service/cities'

export function City() {
  const { locationId, changeFilterParam } = useMatchContext()
  const { data } = useFetchCities()

  return (
    <AdminSelect
      itemsClassName="!max-h-80 w-96 overflow-auto"
      label="Муниципальный район или город"
      placeholder="Любой"
      value={locationId}
      items={data?.ids || []}
      onChange={(value) => changeFilterParam([['location', value?.toString() || '']])}
      renderItem={(id) => data?.entites[id]?.VALUE || ''}
    />
  )
}
