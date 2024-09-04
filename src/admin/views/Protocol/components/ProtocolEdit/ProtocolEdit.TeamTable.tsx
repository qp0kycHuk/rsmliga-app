import { Table, Row, Cell } from '@admin/index'
import { Avatar, Field } from '@features/ui'
import { Empty } from '@admin/components/Empty'
import { useProtocolEditContext } from './ProtocolEdit.Context'

interface ITeamTableProps {
  name: 'team_1_info' | 'team_2_info'
}

export function TeamTable({ name }: ITeamTableProps) {
  const { item, update } = useProtocolEditContext()
  const team = item[name]

  function changeHandler(id: EntityId, value: string) {
    update({
      [name]: {
        ...team,
        members: team?.members.map((member) => {
          if (member.id === id) {
            return {
              ...member,
              try: Math.max(Number(value), 0),
            }
          }

          return member
        }),
      },
    })
  }

  return (
    <Table xBorderLess>
      <Row className="text-sm font-semibold">
        <Cell head className="text-center w-14">
          №
        </Cell>
        <Cell head>{/* image */}</Cell>
        <Cell head>Фамилия Имя</Cell>
        <Cell head className="w-24 text-center">
          Попытки
        </Cell>
      </Row>
      {team?.members.map((member) => (
        <Row key={member.id} className="text-sm">
          <Cell className="text-center">{member.number}</Cell>
          <Cell className="w-12 py-1 px-0">
            <Avatar size="lg" src={member.avatar} placeholder={member.FIO} />
          </Cell>
          <Cell>{member.FIO}</Cell>
          <Cell className="py-0">
            <Field
              inputProps={{
                value: member.try || 0,
                type: 'number',
                className: 'text-sm leading-none text-center',
                onChange(event) {
                  changeHandler(member.id, event.target.value)
                },
              }}
            />
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
