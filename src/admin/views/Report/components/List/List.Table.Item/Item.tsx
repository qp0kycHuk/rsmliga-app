import { Row, Cell, CellTooltip } from '@admin/index'
import { Buttons } from './Item.Buttons'
import { Control } from './Item.Control'

export function ReportTableItem({ item }: IProps) {
  const formattedDate = item.date ? new Date(item.date).toLocaleDateString() : '-'

  return (
    <Row>
      <Cell className="text-sm">{item.season}</Cell>
      <Cell className="w-[264px] max-w-[264px] text-sm">
        <CellTooltip>{item.competition}</CellTooltip>
      </Cell>
      <Cell className="text-sm">{item.stage || '-'}</Cell>
      <Cell className="text-sm">{item.area}</Cell>
      <Cell className="w-[228px] max-w-[228px] text-sm">
        {item.location && <CellTooltip>{item.location}</CellTooltip>}
      </Cell>
      <Cell className="text-sm">{formattedDate}</Cell>

      <Control item={item} />
      <Buttons item={item} />
    </Row>
  )
}

interface IProps {
  item: IReport
}
