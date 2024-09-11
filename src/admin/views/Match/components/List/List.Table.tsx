import { Table, Row, Cell } from '@admin/index'
import { MatchTableItem } from './List.Table.Item/Item'
import { useMatchContext } from '../Context/Match.Context'
import { TriangleDownIcon } from '@assets/icons/fill'
import { twMerge } from 'tailwind-merge'

interface Props {
  items: Match[]
  className?: string
}

export function ListTable({ items, className }: Props) {
  const { order, orderBy, changeOrder } = useMatchContext()

  return (
    <Table className={className}>
      <Row className="text-xs  font-medium">
        <Cell
          head
          onClick={changeOrder.bind(null, 'PROPERTY_MATCH_NUMBER')}
          className={twMerge(
            'cursor-pointer',
            orderBy === 'PROPERTY_MATCH_NUMBER' && 'text-primary'
          )}
        >
          <div className="flex items-center gap-2">
            №П
            <TriangleDownIcon
              className={twMerge(
                'text-2xs shrink-0',
                orderBy === 'PROPERTY_MATCH_NUMBER' && order === 'asc' && 'rotate-180'
              )}
            />
          </div>
        </Cell>
        <Cell head>Соперники</Cell>
        <Cell head>Счет</Cell>
        <Cell
          head
          onClick={changeOrder.bind(null, 'PROPERTY_DATE')}
          className={twMerge('cursor-pointer', orderBy === 'PROPERTY_DATE' && 'text-primary')}
        >
          <div className="flex items-center gap-2">
            Дата / Время
            <TriangleDownIcon
              className={twMerge(
                'text-2xs shrink-0',
                orderBy === 'PROPERTY_DATE' && order === 'asc' && 'rotate-180'
              )}
            />
          </div>
        </Cell>
        <Cell head>Судья</Cell>
        <Cell head>Место проведения</Cell>
        <Cell head>Этап</Cell>
        <Cell head>Стадия</Cell>
        <Cell head>Протокол</Cell>
        <Cell head>Видео</Cell>
        <Cell head>Статус</Cell>
        <Cell head></Cell>
        <Cell head>ID</Cell>
      </Row>
      {items.map((item) => (
        <MatchTableItem key={item.id} item={item} />
      ))}
    </Table>
  )
}
