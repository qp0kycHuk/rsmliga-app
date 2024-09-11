import { Cell } from '@admin/components/Table/Cell'
import { Row } from '@admin/components/Table/Row'
import { TriangleDownIcon } from '@assets/icons/fill'
import { twMerge } from 'tailwind-merge'
import { useMatchContext } from '../Context/Match.Context'

export function TableHead() {
  const { order, orderBy, changeOrder } = useMatchContext()

  return (
    <Row className="text-xs  font-medium">
      <Cell
        head
        onClick={changeOrder.bind(null, 'PROPERTY_MATCH_NUMBER')}
        className={twMerge(
          'cursor-pointer',
          orderBy === 'PROPERTY_MATCH_NUMBER' && 'text-primary print:text-default'
        )}
      >
        <div className="flex items-center gap-2">
          №П
          <TriangleDownIcon
            className={twMerge(
              'text-2xs shrink-0 print:hidden',
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
        className={twMerge(
          'cursor-pointer',
          orderBy === 'PROPERTY_DATE' && 'text-primary print:text-default'
        )}
      >
        <div className="flex items-center gap-2">
          Дата / Время
          <TriangleDownIcon
            className={twMerge(
              'text-2xs shrink-0 print:hidden',
              orderBy === 'PROPERTY_DATE' && order === 'asc' && 'rotate-180'
            )}
          />
        </div>
      </Cell>
      <Cell head>Судья</Cell>
      <Cell head>Место проведения</Cell>
      <Cell head>Этап</Cell>
      <Cell head>Стадия</Cell>
      <Cell head className="print:hidden">
        Протокол
      </Cell>
      <Cell head className="print:hidden">
        Видео
      </Cell>
      <Cell head>Статус</Cell>
      <Cell head className="print:hidden"></Cell>
      <Cell head>ID</Cell>
    </Row>
  )
}
