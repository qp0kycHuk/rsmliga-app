import { Cell } from '@admin/components/Table/Cell'
import { Row } from '@admin/components/Table/Row'
import { Table } from '@admin/components/Table/Table'
import { CirclePlusIcon, TrashIcon } from '@assets/icons/fill'
import { Button, Dialog, Field } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { useProtocolEditContext } from '../ProtocolEdit.Context'
import { MemberDialog } from './MemberDialog'

export function Remark({ name }: Props) {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)
  const { item, update } = useProtocolEditContext()

  function add(memberId: string) {
    const remarks = item[name] || []
    const newRemark = {
      player_id: memberId,
      name: '',
      text: '',
      team: '',
    }

    for (const member of item.team_1_info?.members || []) {
      if (member.id === memberId) {
        newRemark.name = member.FIO
        newRemark.team = item.team_1_info?.name || ''
      }
    }

    for (const member of item.team_2_info?.members || []) {
      if (member.id === memberId) {
        newRemark.name = member.FIO
        newRemark.team = item.team_2_info?.name || ''
      }
    }

    update({
      [name]: [...remarks, newRemark],
    })

    closeDialog()
  }

  function deleteHandler(index: number) {
    const remarks = item[name] || []

    update({
      [name]: [...remarks.slice(0, index), ...remarks.slice(index + 1)],
    })
  }

  function changeHandler(index: number, key: 'text' | 'time', value: string) {
    const remark = item[name] || []
    remark[index][key] = value

    update({
      [name]: [...remark],
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
          <Cell head>Причина</Cell>
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
            <Cell className="p-1">
              <Field
                inputProps={{
                  value: remark.text,
                  required: true,
                  onChange(event) {
                    changeHandler(index, 'text', event.target.value)
                  },
                }}
              />
            </Cell>
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
  name: 'warnings' | 'deletes'
}
