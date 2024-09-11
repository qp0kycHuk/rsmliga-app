import { Row, Cell } from '@admin/index'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { canEditGroups } from '../../const'

export function TableHead() {
  const { isAccess } = useUserAccess(canEditGroups)
  return (
    <Row>
      <Cell head className="text-xs sm:text-sm font-medium text-center">
        №
      </Cell>
      <Cell head className="text-xs sm:text-sm font-medium">
        ID
      </Cell>
      <Cell head className="text-xs sm:text-sm font-medium">
        ФИО
      </Cell>
      <Cell head className="text-xs sm:text-sm font-medium print:hidden">
        Соревнование
      </Cell>
      <Cell head className="text-xs sm:text-sm font-medium">
        Категория
      </Cell>
      <Cell head className="text-xs sm:text-sm font-medium">
        Населенный пункт
      </Cell>
      <Cell head className="text-xs sm:text-sm font-medium">
        Дата рождения
      </Cell>
      <Cell head className="text-xs sm:text-sm font-medium">
        Матчей проведено
      </Cell>
      {isAccess && (
        <Cell head className="text-xs sm:text-sm font-medium print:hidden">
          {/* for button */}
        </Cell>
      )}
    </Row>
  )
}
