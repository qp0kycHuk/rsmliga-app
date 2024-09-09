import { Table, Row, Cell } from '@admin/index'
import { Avatar, Button, Field, Menu, MenuButton, MenuItem, MenuItems } from '@features/ui'
import { Empty } from '@admin/components/Empty'
import { useProtocolEditContext } from './ProtocolEdit.Context'
import { CirclePlusIcon, DeleteIcon, MedKitIcon, WarningIcon } from '@assets/icons/fill'

interface ITeamTableProps {
  name: 'team_1_info' | 'team_2_info'
}

export function TeamTable({ name }: ITeamTableProps) {
  const { item, update } = useProtocolEditContext()
  const team = item[name]

  function hasRemark(member: Member, name: 'warnings' | 'deletes' | 'trauma') {
    return !!item?.[name]?.find((item) => item.player_id === member.id)
  }

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

  function addWarning(member: Member, warningsKey: 'warnings' | 'deletes') {
    const warnings = item[warningsKey] || []
    const newWarning = {
      player_id: member.id,
      name: member.FIO,
      text: '',
      team: team?.name || '',
    }

    update({
      [warningsKey]: [...warnings, newWarning],
    })
  }

  function addTrauma(member: Member, traumaKey: 'trauma' = 'trauma') {
    const trauma = item[traumaKey] || []
    const newTrauma = {
      player_id: member.id,
      name: member.FIO,
      time: '0',
      text: '',
      help: '',
    }

    update({
      [traumaKey]: [...trauma, newTrauma],
    })
  }

  return (
    <Table xBorderLess className="overflow-visible">
      <Row className="text-sm font-semibold">
        <Cell head className="text-center w-14">
          №
        </Cell>
        <Cell head>{/* image */}</Cell>
        <Cell head>Фамилия Имя</Cell>
        <Cell head></Cell>
        <Cell head className="w-24 text-center">
          Попытки
        </Cell>
        <Cell head className="print:hidden">
          {/* remark */}
        </Cell>
      </Row>
      {team?.members.map((member) => (
        <Row key={member.id} className="text-sm">
          <Cell className="text-center">{member.number}</Cell>
          <Cell className="w-12 py-1 px-0">
            <Avatar size="lg" src={member.avatar} placeholder={member.FIO} />
          </Cell>
          <Cell>{member.FIO}</Cell>
          <Cell>
            <div className="flex gap-2 justify-center">
              {hasRemark(member, 'deletes') && (
                <div className="p-1 rounded bg-red/20 text-red">
                  <DeleteIcon />
                </div>
              )}
              {hasRemark(member, 'warnings') && (
                <div className="p-1 rounded bg-yellow/20 text-yellow">
                  <WarningIcon />
                </div>
              )}
              {hasRemark(member, 'trauma') && (
                <div className="p-1 rounded bg-blue/20 text-blue">
                  <MedKitIcon />
                </div>
              )}
            </div>
          </Cell>
          <Cell className="py-0 pr-0">
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
          <Cell className="print:hidden w-12">
            <Menu>
              <MenuButton as={Button} variant="light" icon className="" size="sm">
                <CirclePlusIcon className="text-xl" />
              </MenuButton>
              <MenuItems className="p-1 right-0 left-auto w-52">
                <MenuItem>
                  <Button
                    variant="none"
                    size="xs"
                    className="w-full justify-start gap-2 btn-red px-1"
                    onClick={addWarning.bind(null, member, 'deletes')}
                  >
                    <div className="p-1 rounded bg-red/20 text-red">
                      <DeleteIcon />
                    </div>
                    <span className="text-default">Удаление</span>
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="none"
                    size="xs"
                    className="w-full justify-start gap-2 btn-yellow px-1"
                    onClick={addWarning.bind(null, member, 'warnings')}
                  >
                    <div className="p-1 rounded bg-yellow/20 text-yellow">
                      <WarningIcon />
                    </div>
                    <span className="text-default">Предупреждение</span>
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="none"
                    size="xs"
                    className="w-full justify-start gap-2 btn-blue px-1"
                    onClick={addTrauma.bind(null, member, 'trauma')}
                  >
                    <div className="p-1 rounded bg-blue/20 text-blue">
                      <MedKitIcon />
                    </div>
                    <span className="text-default">Травматический случай</span>
                  </Button>
                </MenuItem>
              </MenuItems>
            </Menu>
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
