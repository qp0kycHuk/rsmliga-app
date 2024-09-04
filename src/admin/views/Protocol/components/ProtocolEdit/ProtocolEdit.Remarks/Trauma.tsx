import { Cell } from '@admin/components/Table/Cell'
import { Row } from '@admin/components/Table/Row'
import { Table } from '@admin/components/Table/Table'
import { CirclePlusIcon, TrashIcon } from '@assets/icons/fill'
import { Button, Dialog, Field } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { useProtocolEditContext } from '../ProtocolEdit.Context'
import { MemberDialog } from './MemberDialog'

export function Trauma({ traumaKey = 'trauma' }: Props) {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)
  const { item, update } = useProtocolEditContext()

  async function add(memberId: string) {
    const trauma = item[traumaKey] || []
    const members = [...(item.team_1_info?.members || []), ...(item.team_2_info?.members || [])]
    const newTrauma = {
      name: '',
      time: '',
      text: '',
      help: '',
    }

    for (const member of members) {
      if (member.id === memberId) {
        newTrauma.name = member.FIO
      }
    }

    update({
      [traumaKey]: [...trauma, newTrauma],
    })

    closeDialog()
  }

  function deleteHandler(index: number) {
    const trauma = item[traumaKey] || []

    update({
      [traumaKey]: [...trauma.slice(0, index), ...trauma.slice(index + 1)],
    })
  }

  function changeHandler(index: number, key: 'text' | 'help' | 'time', value: string) {
    const trauma = item[traumaKey] || []
    trauma[index][key] = value

    update({
      [traumaKey]: [...trauma],
    })
  }

  return (
    <>
      <Table>
        <Row className="text-sm font-medium">
          <Cell head>Минута матча</Cell>
          <Cell head>Фамилия Имя</Cell>
          <Cell head>Характер повреждения, причины, диагноз</Cell>
          <Cell head>Какая оказана помощь</Cell>
          <Cell head>{/* delete */}</Cell>
        </Row>

        {item[traumaKey]?.length === 0 && (
          <Row>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell className="p-1 w-12">
              <Button variant="light" icon disabled>
                <TrashIcon className="text-lg" />
              </Button>
            </Cell>
          </Row>
        )}

        {item[traumaKey]?.map((trauma, index) => (
          <Row key={index}>
            <Cell className="p-1">
              <Field
                inputProps={{
                  value: trauma.time,
                  type: 'time',
                  onChange(event) {
                    changeHandler(index, 'time', event.target.value)
                  },
                }}
              />
            </Cell>
            <Cell className="text-sm">{trauma.name}</Cell>
            <Cell className="p-1 w-1/3">
              <Field
                inputProps={{
                  value: trauma.text,
                  onChange(event) {
                    changeHandler(index, 'text', event.target.value)
                  },
                }}
              />
            </Cell>
            <Cell className="p-1 w-1/4">
              <Field
                inputProps={{
                  value: trauma.help,
                  onChange(event) {
                    changeHandler(index, 'help', event.target.value)
                  },
                }}
              />
            </Cell>
            <Cell className="p-1 w-12">
              <Button variant="light" icon onClick={deleteHandler.bind(null, index)}>
                <TrashIcon className="text-lg" />
              </Button>
            </Cell>
          </Row>
        ))}
      </Table>

      <Button variant="text" className="gap-1 font-semibold ml-auto mt-2" onClick={openDialog}>
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
  traumaKey: 'trauma'
}
