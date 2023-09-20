import { Table, Row, Cell, CellTooltip } from '@admin/index'
import { useFetchTournaments } from '@admin/service/tournaments'

interface IProps {
  item: ISecretary
}

export function CompetitionsDialog({ item }: IProps) {
  const { data } = useFetchTournaments()

  if (!item.competitions || item.competitions.length == 0) {
    return <div className="text-2xl font-bold mb-6">Не заявлен на соревнования</div>
  }

  return (
    <>
      <div className="text-2xl font-bold mb-6">Заявлен на соревнования</div>
      <Table>
        <Row className="text-sm font-medium">
          <Cell className="text-center w-14" head>
            №
          </Cell>
          <Cell head>ФИО</Cell>
          <Cell head>Соревнование</Cell>
        </Row>
        {item.competitions?.map((contestId, index) => (
          <Row className="text-sm " key={index}>
            <Cell className="text-center">{index + 1}</Cell>
            <Cell>
              {item.surname} {item.name} {item.patronymic}
            </Cell>
            <Cell className="w-[366px] max-w-[366px]">
              <CellTooltip>{data?.entites[contestId].NAME}</CellTooltip>
            </Cell>
          </Row>
        ))}
      </Table>
    </>
  )
}
