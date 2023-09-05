import { Table, Row, Cell, CellTooltip } from '@admin/index'

interface IDelegateContestsProps {
  delegate: IDelegate
}

export function DelegateContests({ delegate }: IDelegateContestsProps) {
  return (
    <>
      <div className="text-2xl font-bold mb-6">Заявлен на соревнования</div>
      <Table>
        <Row className="text-sm font-medium">
          <Cell className="text-center" head>
            №
          </Cell>
          <Cell head>ФИО</Cell>
          <Cell head>Соревнование</Cell>
        </Row>
        {delegate.contests.map((contest, index) => (
          <Row className="text-sm " key={index}>
            <Cell className="text-center">{index}</Cell>
            <Cell>
              {delegate.surname} {delegate.name} {delegate.patronymic}
            </Cell>
            <Cell className="w-[366px] max-w-[366px]">
              <CellTooltip>{contest}</CellTooltip>
            </Cell>
          </Row>
        ))}
      </Table>
    </>
  )
}
