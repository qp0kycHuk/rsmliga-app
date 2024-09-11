import { InfoField } from './Info.Field'

export function Info() {
  return (
    <>
      <div className="text-3xl print:text-2xl font-bold mb-8 print:mb-4">Инфо о матче</div>
      <div className="grid sm:grid-cols-3 items-end gap-6">
        <div>
          <div className="font-semibold mb-4">Счет после первого тайма</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 1</div>
              <InfoField block="score_first_half" team="team_1" />
            </div>
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 2</div>
              <InfoField block="score_first_half" team="team_2" />
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-4">Итоговый счет</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 1</div>
              <InfoField block="total_score" team="team_1" />
            </div>
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 2</div>
              <InfoField block="total_score" team="team_2" />
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-4">Счет после дополнительного времени</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 1</div>
              <InfoField block="score_overtime" team="team_1" />
            </div>
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 2</div>
              <InfoField block="score_overtime" team="team_2" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
