import { Cell, Row, Table } from '@admin/index'
import { useDelegateEditContext } from './DelegateEdit.Context'

export function Statistic() {
  const { delegate } = useDelegateEditContext()

  return (
    <>
      <div className="text-2xl font-bold mb-5">Статистика</div>

      <Table>
        <Row>
          <Cell head className="text-sm font-medium text-center">
            Сезон
          </Cell>
          <Cell head className="text-sm font-medium text-center">
            Команда
          </Cell>
          <Cell head className="text-sm font-medium text-center">
            Соревнование
          </Cell>
          <Cell head className="text-sm font-medium text-center">
            Кол-во игр
          </Cell>
          <Cell head className="text-sm font-medium text-center">
            Роль
          </Cell>
          <Cell head className="text-sm font-medium text-center">
            Предупреждения/ <br />
            удаления
          </Cell>
        </Row>
        {delegate.statistic?.map((item) => (
          <Row key={item.id}>
            <Cell className="text-sm text-center">{item.season}</Cell>
            <Cell className="text-sm text-center">{item.team}</Cell>
            <Cell className="text-sm text-center">{item.contest}</Cell>
            <Cell className="text-sm text-center">{item.gamesCount}</Cell>
            <Cell className="text-sm text-center">{item.role}</Cell>
            <Cell className="text-sm text-center">
              {item.warnings}/ {item.deletions}
            </Cell>
          </Row>
        ))}
      </Table>
    </>
  )
}
