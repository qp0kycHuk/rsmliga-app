import { Cell, Row } from '@admin/index'
import { useProtocolEditContext } from '../ProtocolEdit.Context'
import { Avatar, Button, Field, Menu, MenuButton, MenuItem, MenuItems } from '@features/ui'
import {
  CardsIcon,
  CirclePlusIcon,
  MedKitIcon,
  PlayerDropGoalIcon,
  PlayerPenaltyIcon,
  PlayerRealisationIcon,
} from '@assets/icons/fill'

export function Item({ member, teamName }: Props) {
  const { item, update } = useProtocolEditContext()
  const team = item[teamName]

  const menuItemProps = {
    as: Button,
    variant: 'none',
    size: 'xs',
  }

  return (
    <Row key={member.id} className="text-sm">
      <Cell className="text-center">{member.number}</Cell>
      <Cell className="w-12 py-1 px-0">
        <Avatar size="lg" src={member.avatar} placeholder={member.FIO} className="max-xs:size-9" />
      </Cell>
      <Cell className="max-xs:text-xs">{member.FIO}</Cell>
      <Cell className="max-xs:hidden">
        <div className="grid gap-1 grid-flow-col grid-rows-2 justify-center items-center">
          {hasRemark(member, 'deletes') && (
            <div className="p-1 rounded bg-red/20 text-red">
              <CardsIcon />
            </div>
          )}
          {hasRemark(member, 'warnings') && (
            <div className="p-1 rounded bg-yellow/20 text-yellow">
              <CardsIcon />
            </div>
          )}
          {hasRemark(member, 'trauma') && (
            <div className="p-1 rounded bg-blue/20 text-blue ">
              <MedKitIcon />
            </div>
          )}
          {hasRemark(member, 'drop_goals') && (
            <div className="p-1 rounded bg-orange/20 text-orange">
              <PlayerDropGoalIcon />
            </div>
          )}
          {hasRemark(member, 'realizations') && (
            <div className="p-1 rounded bg-purple/20 text-purple">
              <PlayerRealisationIcon />
            </div>
          )}
          {hasRemark(member, 'penalties') && (
            <div className="p-1 rounded bg-green/20 text-green">
              <PlayerPenaltyIcon />
            </div>
          )}
        </div>
      </Cell>
      <Cell className="py-.5 pr-0">
        <Field
          className="w-16 xs:w-w-24"
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
          <MenuButton as={Button} variant="light" icon className="btn-xs xs:btn-sm">
            <CirclePlusIcon className="text-xl" />
          </MenuButton>
          <MenuItems anchor="bottom end" className="p-1  w-52">
            <MenuItem
              {...menuItemProps}
              className="w-full justify-start gap-2 px-1 btn-red"
              onClick={addRemark.bind(null, member, 'deletes')}
            >
              <div className="p-1 rounded bg-red/20 text-red">
                <CardsIcon />
              </div>
              <span className="text-default">Удаление</span>
            </MenuItem>
            <MenuItem
              {...menuItemProps}
              className="w-full justify-start gap-2 px-1 btn-yellow"
              onClick={addRemark.bind(null, member, 'warnings')}
            >
              <div className="p-1 rounded bg-yellow/20 text-yellow">
                <CardsIcon />
              </div>
              <span className="text-default">Предупреждение</span>
            </MenuItem>
            <MenuItem
              {...menuItemProps}
              className="w-full justify-start gap-2 px-1 btn-blue"
              onClick={addTrauma.bind(null, member, 'trauma')}
            >
              <div className="p-1 rounded bg-blue/20 text-blue">
                <MedKitIcon />
              </div>
              <span className="text-default">Травматический случай</span>
            </MenuItem>
            <MenuItem
              {...menuItemProps}
              className="w-full justify-start gap-2 px-1 btn-orange"
              onClick={addAchivement.bind(null, member, 'drop_goals')}
            >
              <div className="p-1 rounded bg-orange/20 text-orange">
                <PlayerDropGoalIcon />
              </div>
              <span className="text-default">Дроп-гол</span>
            </MenuItem>
            <MenuItem
              {...menuItemProps}
              className="w-full justify-start gap-2 px-1 btn-purple"
              onClick={addAchivement.bind(null, member, 'realizations')}
            >
              <div className="p-1 rounded bg-purple/20 text-purple">
                <PlayerRealisationIcon />
              </div>
              <span className="text-default">Реализация</span>
            </MenuItem>
            <MenuItem
              {...menuItemProps}
              className="w-full justify-start gap-2 px-1 btn-green"
              onClick={addAchivement.bind(null, member, 'penalties')}
            >
              <div className="p-1 rounded bg-green/20 text-green">
                <PlayerPenaltyIcon />
              </div>
              <span className="text-default">Штрафной удар</span>
            </MenuItem>
          </MenuItems>
        </Menu>
      </Cell>
    </Row>
  )

  function hasRemark(
    member: Member,
    name: 'warnings' | 'deletes' | 'trauma' | 'realizations' | 'penalties' | 'drop_goals'
  ) {
    return !!item?.[name]?.find((item) => item.player_id === member.id)
  }

  function changeHandler(id: EntityId, value: string) {
    update({
      [teamName]: {
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

  function addRemark(member: Member, remarksKey: 'warnings' | 'deletes') {
    const remarks = item[remarksKey] || []
    const newRemark = {
      player_id: member.id,
      name: member.FIO,
      time: 0,
      text: '',
      team: team?.name || '',
    }

    update({
      [remarksKey]: [...remarks, newRemark],
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

  function addAchivement(member: Member, name: 'realizations' | 'penalties' | 'drop_goals') {
    const achivements = item[name] || []
    const newAchivement = {
      player_id: member.id,
      name: member.FIO,
      time: '0',
      team: team?.name || '',
    }

    update({
      [name]: [...achivements, newAchivement],
    })
  }
}

type Props = {
  member: Member
  teamName: 'team_1_info' | 'team_2_info'
}
