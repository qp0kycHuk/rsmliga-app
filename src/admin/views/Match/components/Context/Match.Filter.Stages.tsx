import { AdminSelect } from '@admin/components/AdminSelect'
import { useFetchStages } from '@admin/service/stages'
import { useMatchContext } from './Match.Context'

export function Stages() {
  const { stageId, changeFilterParam } = useMatchContext()
  const { data: stagesData } = useFetchStages()

  return (
    <AdminSelect
      itemsClassName="max-h-80 overflow-auto"
      label="Этап"
      placeholder="Любой"
      value={stageId}
      items={stagesData?.ids || []}
      onChange={(value) =>
        changeFilterParam([['stage', value?.toString() || '']], false, [
          'competition',
          'tab',
          'order',
          'order_by',
        ])
      }
      renderItem={(id) => stagesData?.entites[id]?.VALUE || ''}
    />
  )
}
