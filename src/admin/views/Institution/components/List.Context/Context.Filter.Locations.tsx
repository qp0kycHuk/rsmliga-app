import { AdminSelect } from '@admin/components/AdminSelect'
import { useInstitutionsContext } from './Context'
import { useFetchCities } from '@admin/service/cities'

export function Locations() {
  const { cityId, changeFilterParam } = useInstitutionsContext()
  const { data: locationsData } = useFetchCities()

  return (
    <AdminSelect
      itemsClassName="max-h-80 w-96 overflow-auto"
      label="Муниципальный район или город"
      placeholder="Любой"
      value={cityId}
      items={locationsData?.ids || []}
      onChange={(value) => changeFilterParam('city', value?.toString() || '')}
      renderItem={(id) => locationsData?.entites[id]?.VALUE || ''}
    />
  )
}
