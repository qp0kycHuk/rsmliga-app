import { Cell } from '@admin/components/Table/Cell'
import { Row } from '@admin/components/Table/Row'
import { Table } from '@admin/components/Table/Table'
import { CirclePlusIcon, TrashIcon } from '@assets/icons/fill'
import { Button, Dialog, Field } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { useProtocolEditContext } from '../ProtocolEdit.Context'
import { MemberDialog } from './MemberDialog'

export function Warning({ warningsKey }: Props) {
  const [isDialogOpen, , openDialog, closeDialog] = useToggle(false)
  const { item, update } = useProtocolEditContext()

  function add(memberId: string) {
    const warnings = item[warningsKey] || []
    const newWarning = {
      name: '',
      text: '',
      team: '',
    }

    for (const member of item.team_1_info?.members || []) {
      if (member.id === memberId) {
        newWarning.name = member.FIO
        newWarning.team = item.team_1_info?.name || ''
      }
    }

    for (const member of item.team_2_info?.members || []) {
      if (member.id === memberId) {
        newWarning.name = member.FIO
        newWarning.team = item.team_2_info?.name || ''
      }
    }

    update({
      [warningsKey]: [...warnings, newWarning],
    })

    closeDialog()
  }

  function deleteHandler(index: number) {
    const warnings = item[warningsKey] || []

    update({
      [warningsKey]: [...warnings.slice(0, index), ...warnings.slice(index + 1)],
    })
  }

  function changeHandler(index: number, value: string) {
    const warnings = item[warningsKey] || []
    warnings[index].text = value

    update({
      [warningsKey]: [...warnings],
    })
  }

  return (
    <>
      <Table>
        <Row className="text-sm font-medium">
          <Cell head className="text-center w-12">
            №
          </Cell>
          <Cell head>Фамилия Имя</Cell>
          <Cell head>Команда</Cell>
          <Cell head>Причина</Cell>
          <Cell head className="print:hidden">
            {/* delete */}
          </Cell>
        </Row>

        {item[warningsKey]?.length === 0 && (
          <Row>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell className="p-1 w-12 print:hidden">
              <Button variant="light" icon disabled>
                <TrashIcon className="text-lg" />
              </Button>
            </Cell>
          </Row>
        )}

        {item[warningsKey]?.map((warn, index) => (
          <Row key={index}>
            <Cell className="text-center">{index + 1}</Cell>
            <Cell>{warn.name}</Cell>
            <Cell>{warn.team}</Cell>
            <Cell className="p-1">
              <Field
                inputProps={{
                  value: warn.text,
                  required: true,
                  onChange(event) {
                    changeHandler(index, event.target.value)
                  },
                }}
              />
            </Cell>
            <Cell className="p-1 w-12 print:hidden">
              <Button variant="light" icon onClick={deleteHandler.bind(null, index)}>
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
  warningsKey: 'warnings' | 'deletes'
}
