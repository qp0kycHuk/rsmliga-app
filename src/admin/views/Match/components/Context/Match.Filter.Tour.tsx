import { AdminSelect } from '@admin/components/AdminSelect'
import { useMatchContext } from './Match.Context'
import { useFetchTours } from '@admin/service/tours'

export function Tour() {
  const { tourId, changeFilterParam } = useMatchContext()
  const { data } = useFetchTours()

  return (
    <AdminSelect
      itemsClassName="!max-h-80 w-96 overflow-auto"
      label="Тур"
      placeholder="Любой"
      value={tourId}
      items={data?.ids || []}
      onChange={(value) => changeFilterParam([['tour', value?.toString() || '']])}
      renderItem={(id) => data?.entites[id]?.VALUE || ''}
    />
  )
}
