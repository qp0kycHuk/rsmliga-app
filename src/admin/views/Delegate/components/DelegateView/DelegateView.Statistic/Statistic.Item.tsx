import { Row, Cell, CellTooltip } from '@admin/index'
import { useFetchSeasons } from '@admin/service/seasons'
import { useFetchStages } from '@admin/service/stages'
import { useFetchTournaments } from '@admin/service/tournaments'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { Detail } from './Statistic.Detail'

interface IItemProps {
  item: StatisticTournier
  delegate: IDelegate
}

export function Item({ delegate, item }: IItemProps) {
  const [isDetailOpen, , openDetail, closeDetail] = useToggle()
  const { data: seasonsData } = useFetchSeasons()
  const { data: tourneyData } = useFetchTournaments()
  const { data: stageData } = useFetchStages()

  return (
    <Row className="text-sm text-center">
      <Cell>{seasonsData?.entites[item.sezon_id].NAME}</Cell>
      <Cell className="w-[280px] max-w-[280px]">
        <CellTooltip>{tourneyData?.entites[item.id].NAME}</CellTooltip>
      </Cell>
      <Cell>
        <CellTooltip
          content={item.stages.map((stageId) => stageData?.entites[stageId].VALUE).join(', ')}
        >
          {item.stages_count}
        </CellTooltip>
      </Cell>
      <Cell onClick={openDetail} className="cursor-pointer btn-group">
        <Button variant="text" className="mx-auto underline underline-offset-4">
          {item.match_count}
        </Button>
      </Cell>
      <Cell>{item.roles.mainJudgeRole ?? '-'}</Cell>
      <Cell>{item.roles.judgeHelperRole ?? '-'}</Cell>
      <Cell>{item.roles.delegateRole ?? '-'}</Cell>
      <Cell></Cell>

      <Cell hidden>
        <Dialog isOpen={isDetailOpen} onClose={closeDetail} className="container max-w-6xl p-10">
          <Detail delegate={delegate} item={item}></Detail>
        </Dialog>
      </Cell>
    </Row>
  )
}
