import { AdminSelect } from '@admin/components/AdminSelect'
import { useFetchStages } from '@admin/service/stages'
import { useReportContext } from './Report.Context'

export function Stages() {
  const { stageId, changeFilterParam } = useReportContext()
  const { data: stagesData } = useFetchStages()

  return (
    <AdminSelect
      itemsClassName="max-h-80 overflow-auto"
      label="Этап"
      placeholder="Любой"
      value={stageId}
      items={stagesData?.ids || []}
      onChange={(value) => changeFilterParam('stage', value?.toString() || '')}
      renderItem={(id) => stagesData?.entites[id]?.VALUE || ''}
    />
  )
}
