import { Row, Cell, CellTooltip } from '@admin/index'
import type { IItem } from './ReportTable'

interface IProps {
  item: IItem
}

export function ReportTableItem({ item }: IProps) {
  return (
    <Row>
      <Cell className="text-sm">{item.season}</Cell>
      <Cell className="w-[264px] max-w-[264px] text-sm">
        <CellTooltip>{item.contest}</CellTooltip>
      </Cell>
      <Cell className="text-sm">{item.step}</Cell>
      <Cell className="text-sm">{item.area}</Cell>
      <Cell className="w-[228px] max-w-[228px] text-sm">
        <CellTooltip>{item.place}</CellTooltip>
      </Cell>
      <Cell className="text-sm">{item.date}</Cell>
      <Cell className="text-sm">Загружен</Cell>
    </Row>
  )
}
