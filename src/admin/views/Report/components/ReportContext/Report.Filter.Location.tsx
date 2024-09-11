import { AdminSelect } from '@admin/components/AdminSelect'
import { useReportContext } from './Report.Context'
import { useFetchCities } from '../../service/cities'

export function Location() {
  const { locationId, changeFilterParam } = useReportContext()
  const { data: locationData } = useFetchCities()

  return (
    <AdminSelect
      itemsClassName="!max-h-80 overflow-auto"
      label="Муниципальный район или город"
      placeholder="Любой"
      value={locationId}
      items={locationData?.ids || []}
      onChange={(value) => changeFilterParam('location', value?.toString() || '')}
      renderItem={(id) => locationData?.entites[id]?.NAME || ''}
    />
  )
}
