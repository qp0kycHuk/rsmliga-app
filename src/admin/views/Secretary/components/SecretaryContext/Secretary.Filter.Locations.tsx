import { AdminSelect } from '@admin/components/AdminSelect'
import { useSecretariesContext } from './Secretary.Context'
import { useFetchCities } from '@admin/service/cities'

export function Locations() {
  const { locationId, changeFilterParam } = useSecretariesContext()
  const { data: locationsData } = useFetchCities()

  return (
    <AdminSelect
      itemsClassName="!max-h-80 w-96 overflow-auto"
      label="Муниципальный район или город"
      placeholder="Любой"
      value={locationId}
      items={locationsData?.ids || []}
      onChange={(value) => changeFilterParam('location', value?.toString() || '')}
      renderItem={(id) => locationsData?.entites[id]?.VALUE || ''}
    />
  )
}
