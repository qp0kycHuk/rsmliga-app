import { FieldView } from '@admin/components/FieldView'
import { Table, Row, Cell } from '@admin/index'
import { Avatar } from '@features/ui'
import { Empty } from '@admin/components/Empty'

interface ITeamTableProps {
  team?: TeamInfo
}

export function TeamTable({ team }: ITeamTableProps) {
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
        <Cell head className="w-16 xs:w-w-24 text-center">
          Попытки
        </Cell>
      </Row>
      {team?.members.map((member) => (
        <Row key={member.id} className="text-sm">
          <Cell className="text-center">{member.number}</Cell>
          <Cell className="w-12 py-1 px-0">
            <Avatar
              size="lg"
              src={member.avatar}
              placeholder={member.FIO}
              className="max-xs:size-9"
            />
          </Cell>
          <Cell className="max-xs:text-xs">{member.FIO}</Cell>
          <Cell className="py-0.5">
            <FieldView>
              <div className="text-sm leading-none text-center">{member.try || '-'}</div>
            </FieldView>
          </Cell>
        </Row>
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
