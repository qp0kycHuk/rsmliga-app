import { AdminSelect } from '@admin/components/AdminSelect'
import { useMatchContext } from './Match.Context'
import { useFetchConference } from '@admin/views/Match/service/conference'

export function Conference() {
  const { conferenceId, changeFilterParam } = useMatchContext()
  const { data } = useFetchConference()

  return (
    <AdminSelect
      itemsClassName="!max-h-80 w-96 overflow-auto"
      label="Конференция"
      placeholder="Любая"
      value={conferenceId}
      items={data?.ids || []}
      onChange={(value) => changeFilterParam([['conference', value?.toString() || '']])}
      renderItem={(id) => data?.entites[id]?.VALUE || ''}
    />
  )
}
