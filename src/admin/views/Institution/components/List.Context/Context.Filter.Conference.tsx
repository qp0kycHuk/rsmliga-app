import { AdminSelect } from '@admin/components/AdminSelect'
import { useInstitutionsContext } from './Context'
import { useFetchConference } from '@admin/service/conference'

export function Conference() {
  const { conferenceId, changeFilterParam } = useInstitutionsContext()
  const { data: conferenceData } = useFetchConference()

  return (
    <AdminSelect
      itemsClassName="max-h-80 w-96 overflow-auto"
      label="Конференция"
      placeholder="Любая"
      value={conferenceId}
      items={conferenceData?.ids || []}
      onChange={(value) => changeFilterParam('conference', value?.toString() || '')}
      renderItem={(id) => conferenceData?.entites[id]?.VALUE || ''}
    />
  )
}
