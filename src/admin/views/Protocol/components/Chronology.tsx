import {
  CardsIcon,
  MedKitIcon,
  PlayerDropGoalIcon,
  PlayerPenaltyIcon,
  PlayerRealisationIcon,
} from '@assets/icons/fill'

const iconByType = {
  trauma: <MedKitIcon className="text-blue" />,
  warnings: <CardsIcon className="text-yellow" />,
  deletes: <CardsIcon className="text-red" />,
  drop_goals: <PlayerDropGoalIcon className="text-orange" />,
  realizations: <PlayerRealisationIcon className="text-purple" />,
  penalties: <PlayerPenaltyIcon className="text-green" />,
}

const textByType = {
  trauma: 'Травма',
  warnings: 'Желтая карточка',
  deletes: 'Красная карточка',
  drop_goals: 'Дроп-гол',
  realizations: 'Реализация',
  penalties: 'Штрафные удары',
}

export function Chronology({ item }: Props) {
  if (!item) {
    return null
  }

  const items = [
    ...(item.trauma?.map((el) => getItem(el, 'trauma')) || []),
    ...(item.warnings?.map((el) => getItem(el, 'warnings')) || []),
    ...(item.deletes?.map((el) => getItem(el, 'deletes')) || []),
    ...(item.drop_goals?.map((el) => getItem(el, 'drop_goals')) || []),
    ...(item.realizations?.map((el) => getItem(el, 'realizations')) || []),
    ...(item.penalties?.map((el) => getItem(el, 'penalties')) || []),
  ].sort((a, b) => +a.time - +b.time)

  function getItem(
    { time, player_id, name }: { time: string; name: string; player_id: EntityId },
    type: 'trauma' | 'warnings' | 'deletes' | 'drop_goals' | 'realizations' | 'penalties'
  ) {
    return {
      time,
      name,
      player_id,
      type,
    }
  }

  function getTeam(playerId: EntityId) {
    let team = ''

    for (const member of item?.team_1_info?.members || []) {
      if (member.id === playerId) {
        team = item?.team_1_info?.name || ''
        return team
      }
    }

    for (const member of item?.team_2_info?.members || []) {
      if (member.id === playerId) {
        team = item?.team_2_info?.name || ''
        return team
      }
    }

    return team
  }

  return (
    <>
      <div className="text-3xl print:text-2xl font-bold mb-8 print:mb-4">Хронология</div>

      <div className="flex flex-col gap-2">
        {items.map(({ time, type, name, player_id }, index) => (
          <div key={index} className="flex items-center rounded-lg bg-l2 py-2 px-4 gap-2">
            <div className="font-semibold w-12">{time}’</div>
            <div className="size-8 bg-l3 rounded-md flex items-center justify-center">
              {iconByType[type]}
            </div>
            <div className="opacity-70 w-36 text-sm">{textByType[type]}</div>
            <div className="font-semibold text-sm w-1/4">{name}</div>
            <div className="text-sm w-1/4">{getTeam(player_id)}</div>
          </div>
        ))}
      </div>
    </>
  )
}

type Props = {
  item?: Partial<Protocol>
}
