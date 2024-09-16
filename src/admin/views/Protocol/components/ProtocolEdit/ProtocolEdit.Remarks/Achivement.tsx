import { Cell } from '@admin/components/Table/Cell'
import { Row } from '@admin/components/Table/Row'
import { Table } from '@admin/components/Table/Table'
import { CirclePlusIcon, TrashIcon } from '@assets/icons/fill'
import { Button, Dialog, Field } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { useProtocolEditContext } from '../ProtocolEdit.Context'
import { MemberDialog } from './MemberDialog'

export function Achivement({ name }: Props) {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)
  const { item, update } = useProtocolEditContext()

  function add(memberId: string) {
    const achivements = item[name] || []
    const newAchivement = {
      player_id: memberId,
      name: '',
      team: '',
    }

    for (const member of item.team_1_info?.members || []) {
      if (member.id === memberId) {
        newAchivement.name = member.FIO
        newAchivement.team = item.team_1_info?.name || ''
      }
    }

    for (const member of item.team_2_info?.members || []) {
      if (member.id === memberId) {
        newAchivement.name = member.FIO
        newAchivement.team = item.team_2_info?.name || ''
      }
    }

    update({
      [name]: [...achivements, newAchivement],
    })

    closeDialog()
  }

  function deleteHandler(index: number) {
    const achivements = item[name] || []

    update({
      [name]: [...achivements.slice(0, index), ...achivements.slice(index + 1)],
    })
  }

  function changeHandler(index: number, key: 'time', value: string) {
    const achivement = item[name] || []
    achivement[index][key] = value

    update({
      [name]: [...achivement],
    })
  }

  return (
    <>
      <Table>
        <Row className="text-sm font-medium max-xs:text-xs">
          <Cell head className="text-center w-12">
            №
          </Cell>
          <Cell head className="w-28 px-2">
            Минута матча
          </Cell>
          <Cell head>Фамилия Имя</Cell>
          <Cell head>Команда</Cell>
          <Cell head className="print:hidden">
            {/* delete */}
          </Cell>
        </Row>

        {item[name]?.length === 0 && (
          <Row>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell className="p-1 w-12 print:hidden">
              <Button variant="light" icon disabled className="max-xs:btn-sm">
                <TrashIcon className="text-lg" />
              </Button>
            </Cell>
          </Row>
        )}

        {item[name]?.map((remark, index) => (
          <Row key={index} className="max-xs:text-xs">
            <Cell className="text-center">{index + 1}</Cell>
            <Cell className="p-1">
              <Field
                inputProps={{
                  value: remark.time,
                  required: true,
                  type: 'number',
                  onChange(event) {
                    changeHandler(index, 'time', Math.max(Number(event.target.value), 0).toString())
                  },
                }}
              />
            </Cell>
            <Cell>{remark.name}</Cell>
            <Cell>{remark.team}</Cell>

            <Cell className="p-1 w-12 print:hidden">
              <Button
                variant="light"
                icon
                onClick={deleteHandler.bind(null, index)}
                className="max-xs:btn-sm"
              >
                <TrashIcon className="text-lg" />
              </Button>
            </Cell>
          </Row>
        ))}
      </Table>

      <Button
        variant="text"
        className="gap-1 font-semibold ml-auto mt-2 print:hidden"
        onClick={openDialog}
      >
        <CirclePlusIcon className="" />
        Добавить
      </Button>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} className="max-w-lg w-full p-6">
        <MemberDialog onSubmit={add} />
      </Dialog>
    </>
  )
}

type Props = {
  name: 'realizations' | 'penalties' | 'drop_goals'
}
