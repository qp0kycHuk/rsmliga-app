import { Table, Row, Cell } from '@admin/index'
import { Empty } from '@admin/components/Empty'
import { useProtocolEditContext } from '../ProtocolEdit.Context'
import { Item } from './TeamTable.Item'

interface ITeamTableProps {
  name: 'team_1_info' | 'team_2_info'
}

export function TeamTable({ name }: ITeamTableProps) {
  const { item } = useProtocolEditContext()
  const team = item[name]

  return (
    <Table xBorderLess>
      <Row className="text-sm font-semibold">
        <Cell head className="text-center w-14">
          №
        </Cell>
        <Cell head>{/* image */}</Cell>
        <Cell head className="max-xs:text-xs">
          Фамилия Имя
        </Cell>
        <Cell head className="max-xs:hidden"></Cell>
        <Cell head className="w-16 xs:w-w-24 text-center max-xs:text-xs">
          Попытки
        </Cell>
        <Cell head className="print:hidden">
          {/* remark */}
        </Cell>
      </Row>
      {team?.members.map((member) => (
        <Item member={member} teamName={name} key={member.id} />
      ))}

      {team?.members.length == 0 && (
        <Row className="">
          <Cell colSpan={100}>
            <Empty className="w-40 mx-auto print:hidden" />
            <div className="hidden print:block">-</div>
          </Cell>
        </Row>
      )}
    </Table>
  )
}
