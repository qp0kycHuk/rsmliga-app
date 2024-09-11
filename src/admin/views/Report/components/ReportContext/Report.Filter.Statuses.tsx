import { AdminSelect } from '@admin/components/AdminSelect'
import { useReportContext } from './Report.Context'
import { useFetchReportStatuses } from '../../service/statuses'

export function Statuses() {
  const { statusId, changeFilterParam } = useReportContext()
  const { data: statusesData } = useFetchReportStatuses()

  return (
    <AdminSelect
      itemsClassName="!max-h-80 overflow-auto"
      label="Статус"
      placeholder="Любой"
      value={statusId}
      items={statusesData?.ids || []}
      onChange={(value) => changeFilterParam('status', value?.toString() || '')}
      renderItem={(id) => statusesData?.entites[id]?.VALUE || ''}
    />
  )
}
