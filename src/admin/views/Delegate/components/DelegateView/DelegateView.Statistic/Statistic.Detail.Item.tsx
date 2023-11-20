import { Row, Cell } from '@admin/index'
import { useFetchStages } from '@admin/service/stages'
import { Protocol } from '@admin/views/Match/components/Protocol/Protocol'
import { ProtocolDialog } from '@admin/views/Match/components/Protocol/Protocol.Dialog'
import { Button, Dialog, DialogHeader } from '@features/ui'
import { useToggle } from '@hooks/useToggle'

interface IDetailItemProps {
  game: StatisticGame
  index: number
}

export function DetailItem({ game, index }: IDetailItemProps) {
  const [isProtocolOpen, , openProtocol, closeProtocol] = useToggle()
  const { data: stageData } = useFetchStages()

  return (
    <Row className="text-center text-sm">
      <Cell>{index}</Cell>
      <Cell>{game.role} </Cell>
      <Cell>{new Date(game.date).toLocaleDateString()} </Cell>
      <Cell>{game.time} </Cell>
      <Cell>{game.location}</Cell>
      <Cell>{stageData?.entites[game.stage].VALUE}</Cell>
      <Cell>{game.match_stage || '-'}</Cell>
      <Cell>{game.team_1}</Cell>
      <Cell>{game.team_2}</Cell>
      <Cell className="btn-group cursor-pointer" onClick={openProtocol}>
        <Button variant="text" className="underline underline-offset-4 mx-auto">
          {game.score}
        </Button>
      </Cell>
      <Cell>{'-'}</Cell>

      <Cell hidden>
        <ProtocolDialog id={game.match_id} isOpen={isProtocolOpen} onClose={closeProtocol} />
      </Cell>
    </Row>
  )
}
