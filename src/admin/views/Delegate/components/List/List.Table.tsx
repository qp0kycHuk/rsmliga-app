import { Table, Row, Cell } from '@admin/index'
import { ListItem } from './List.Item'
import { canEditGroups } from '../../const'
import { useUserAccess } from '@admin/hooks/useUserAccess'
import { Empty } from '@admin/components/Empty'

interface IListTableProps {
  items: IDelegate[]
  className?: string
}

export function ListTable({ items, className }: IListTableProps) {
  const { isAccess } = useUserAccess(canEditGroups)

  if (!items || items.length == 0) {
    return <Empty className={className} />
  }

  return (
    <Table className={className}>
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
        <Cell head className="text-xs sm:text-sm font-medium">
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
          <Cell head className="text-xs sm:text-sm font-medium">
            {/* for button */}
          </Cell>
        )}
      </Row>
      {items?.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </Table>
  )
}
