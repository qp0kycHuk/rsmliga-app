import { AdminSelect } from '@admin/components/AdminSelect'
import { useInstitutionsContext } from './Context'
import { useFetchSchoolTypes } from '@admin/service/schoolType'

export function SchoolType() {
  const { schooltypeId, changeFilterParam } = useInstitutionsContext()
  const { data: schoolTypesData } = useFetchSchoolTypes()

  return (
    <AdminSelect
      itemsClassName="max-h-80 w-64 overflow-auto"
      label="	Тип образовательного учреждения"
      placeholder="Любой"
      value={schooltypeId}
      items={schoolTypesData?.ids || []}
      onChange={(value) => changeFilterParam('schooltype', value?.toString() || '')}
      renderItem={(id) => schoolTypesData?.entites[id]?.VALUE || ''}
    />
  )
}
