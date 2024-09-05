import { Cell, Row } from '@admin/index'
import { Protocol } from './Item.Protocol'
import { Video } from './Item.Video'
import { SettingsIcon } from '@assets/icons/fill'
import { Button, Dialog } from '@features/ui'
import { MatchEdit } from '../../MatchEdit/MatchEdit'
import { Suspense } from 'react'
import { useToggle } from '@hooks/useToggle'
import { Judge } from './Item.Judge'

interface Props {
  item: Match
}

export function MatchTableItem({ item }: Props) {
  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(false)

  return (
    <Row className="text-xs sm:text-sm">
      <Cell>{item.number}</Cell>
      <Cell>
        {item.team_1} / {item.team_2}
      </Cell>

      <Cell>{item.score}</Cell>
      <Cell>{new Date(item.date).toLocaleDateString()}</Cell>
      <Cell>
        <Judge item={item} />
      </Cell>
      <Cell>{item.location}</Cell>
      <Cell>{item.stage}</Cell>
      <Cell className="text-center">{item.phase}</Cell>
      <Cell>
        <Protocol item={item} />
      </Cell>
      <Cell>
        <Video item={item} />
      </Cell>
      <Cell>{item.status}</Cell>
      <Cell>
        <Button
          size={null}
          icon
          className="btn-[28px] mx-auto"
          color="gray-light"
          onClick={openEditDialog}
        >
          <SettingsIcon className="text-primary text-lg" />
        </Button>
      </Cell>
      <Cell>{item.id}</Cell>
      <Cell hidden>
        <Dialog
          isOpen={isEditDialogOpen}
          onClose={closeEditDialog}
          className="container max-w-xl px-4 py-10 md:px-8"
        >
          <Suspense fallback="Loading...">
            <MatchEdit item={item} onCancel={closeEditDialog} />
          </Suspense>
        </Dialog>
      </Cell>
    </Row>
  )
}
