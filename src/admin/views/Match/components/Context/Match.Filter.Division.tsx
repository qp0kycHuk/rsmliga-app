import { AdminSelect } from '@admin/components/AdminSelect'
import { useMatchContext } from './Match.Context'
import { useFetchDivisions } from '@admin/service/divisions'

export function Division() {
  const { divisionId, changeFilterParam } = useMatchContext()
  const { data } = useFetchDivisions()

  return (
    <AdminSelect
      itemsClassName="max-h-80 w-96 overflow-auto"
      label="Дивизион"
      placeholder="Любой"
      value={divisionId}
      items={data?.ids || []}
      onChange={(value) => changeFilterParam([['division', value?.toString() || '']])}
      renderItem={(id) => data?.entites[id]?.VALUE || ''}
    />
  )
}
