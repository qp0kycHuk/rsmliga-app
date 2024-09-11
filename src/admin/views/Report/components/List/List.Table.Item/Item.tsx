import { Row, Cell, CellTooltip } from '@admin/index'
import { Buttons } from './Item.Buttons'
import { Control } from './Item.Control'

export function ReportTableItem({ item }: IProps) {
  const formattedDate = item.date ? new Date(item.date).toLocaleDateString() : '-'

  return (
    <Row className="text-xs sm:text-sm">
      <Cell className="">{item.season}</Cell>
      <Cell className="w-[264px] max-w-[264px] ">
        <CellTooltip>{item.competition}</CellTooltip>
      </Cell>
      <Cell className="">{item.stage || '-'}</Cell>
      <Cell className="">{item.area}</Cell>
      <Cell className="w-[228px] max-w-[228px] ">
        {item.location && <CellTooltip>{item.location}</CellTooltip>}
      </Cell>
      <Cell className="">{formattedDate}</Cell>
      <Cell className="w-40 text-xs sm:text-sm">
        <Control item={item} />
      </Cell>
      <Cell className="print:hidden">
        <Buttons item={item} />
      </Cell>
    </Row>
  )
}

interface IProps {
  item: IReport
}
