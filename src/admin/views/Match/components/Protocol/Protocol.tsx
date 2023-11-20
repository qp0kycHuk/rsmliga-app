import { FieldView } from '@admin/components/FieldView'
import { Separator } from '@admin/components/Separator'
import { Cell, CellTooltip, Row, Table } from '@admin/index'
import { PrintIcon } from '@assets/icons/fill'
import { Button } from '@features/ui'
import { useFetchProtocol } from '../../service/protocol'
import { useFetchCities } from '@admin/service/cities'
import { TeamData } from './Protocol.TeamInfo'
import { TeamTable } from './Protocol.TeamTable'

interface IProps {
  matchId: EntityId
}

export function Protocol({ matchId }: IProps) {
  const { data } = useFetchProtocol({ id: matchId })

  const { data: cityData } = useFetchCities()

  const area = cityData?.entites[data?.item.area_id || '']?.NAME

  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-2">
          <div className="font-semibold mb-2 print:text-sm">Соревнование #{matchId}</div>
          <FieldView>
            <div className="text-sm leading-none">
              <CellTooltip>{data?.item.competition_name}</CellTooltip>
            </div>
          </FieldView>
        </div>
        <div className="col-span-2">
          <div className="font-semibold mb-2 print:text-sm">Этап</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.stage_name || '-'}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2 print:text-sm">Город или район</div>
          <FieldView>
            <div className="text-sm leading-none">{area || '-'}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2 print:text-sm">Место проведения</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.location || '-'}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2 print:text-sm">Дата проведения</div>
          <FieldView>
            <div className="text-sm leading-none">
              {new Date(data?.item.date || 0)?.toLocaleDateString()}
            </div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2 print:text-sm">Время проведения</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.time}</div>
          </FieldView>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        {/* Команда 1 */}
        <div>
          <div className="font-semibold mb-2 print:text-sm">Команда 1</div>
          <TeamData team={data?.item.team_1_info} />
        </div>
        {/* Команда 2 */}
        <div>
          <div className="font-semibold mb-2 print:text-sm">Команда 2</div>
          <TeamData team={data?.item.team_2_info} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        <div>
          <div className="font-semibold mb-2 print:text-sm">Судья</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.judge || 'Нет'}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2 print:text-sm">Делегат</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.delegate || 'Нет'}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2 print:text-sm">Помощник судьи 1</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.helper_1 || 'Нет'}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2 print:text-sm">Помощник судьи 2</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.helper_2 || 'Нет'}</div>
          </FieldView>
        </div>
      </div>

      <Separator />

      <div className="text-3xl print:text-2xl font-bold mb-8 print:mb-4">Инфо о матче</div>
      <div className="grid grid-cols-3 items-end gap-6">
        <div>
          <div className="font-semibold mb-4">Счет после первого тайма</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 1</div>
              <FieldView>
                <div className="text-sm leading-none text-center">
                  {data?.item.score_first_half.team_1 || 0}
                </div>
              </FieldView>
            </div>
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 2</div>
              <FieldView>
                <div className="text-sm leading-none text-center">
                  {data?.item.score_first_half.team_2 || 0}
                </div>
              </FieldView>
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-4">Итоговый счет</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 1</div>
              <FieldView>
                <div className="text-sm leading-none text-center">
                  {data?.item.total_score.team_1 || 0}
                </div>
              </FieldView>
            </div>
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 2</div>
              <FieldView>
                <div className="text-sm leading-none text-center">
                  {data?.item.total_score.team_2 || 0}
                </div>
              </FieldView>
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-4">Счет после дополнительного времени</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 1</div>
              <FieldView>
                <div className="text-sm leading-none text-center">
                  {data?.item.score_overtime.team_1 || 0}
                </div>
              </FieldView>
            </div>
            <div>
              <div className="opacity-80 text-sm mb-2">Команда 2</div>
              <FieldView>
                <div className="text-sm leading-none text-center">
                  {data?.item.score_overtime.team_2 || 0}
                </div>
              </FieldView>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-7 break-inside-avoid-page">
        <div>
          <div className="font-semibold mb-4">Команда 1</div>
          <TeamTable team={data?.item.team_1_info} />
        </div>
        <div>
          <div className="font-semibold mb-4">Команда 2</div>
          <TeamTable team={data?.item.team_2_info} />
        </div>
      </div>

      <Separator />

      <div className="text-3xl print:text-2xl font-bold mb-8 print:mb-4">Представители</div>
      <div className="grid grid-cols-2 gap-6 ">
        <div>
          <div className="font-semibold mb-2 print:text-sm">Представитель 1 команды</div>
          {data?.item.team_1_info.preds.map((name, index) => (
            <FieldView key={index} className="mt-1">
              <div className="text-sm leading-none">{name}</div>
            </FieldView>
          ))}
          {data?.item.team_1_info.preds.length == 0 && (
            <FieldView>
              <div className="text-sm leading-none">Нет</div>
            </FieldView>
          )}
        </div>
        <div>
          <div className="font-semibold mb-2 print:text-sm">Представитель 2 команды</div>
          {data?.item.team_2_info.preds.map((name, index) => (
            <FieldView key={index} className="mt-1">
              <div className="text-sm leading-none">{name}</div>
            </FieldView>
          ))}
          {data?.item.team_2_info.preds.length == 0 && (
            <FieldView>
              <div className="text-sm leading-none">Нет</div>
            </FieldView>
          )}
        </div>
      </div>

      {/* Предупреждения */}
      <div className="mt-7">
        <div className="font-semibold mb-4">Предупреждения</div>
        <Table>
          <Row className="text-sm font-semibold">
            <Cell head>Фамилия Имя</Cell>
            <Cell head className="text-center w-11">
              №
            </Cell>
            <Cell head>Команда</Cell>
            <Cell head>Причина</Cell>
          </Row>
          {data?.item.warnings.map((item, i) => (
            <Row className="text-sm" key={i}>
              <Cell>{item.name}</Cell>
              <Cell className="text-center">{i + 1}</Cell>
              <Cell>{item.team} </Cell>
              <Cell>{item.text} </Cell>
            </Row>
          ))}
          {data?.item.warnings.length == 0 && (
            <Row className="text-sm">
              <Cell colSpan={100}>-</Cell>
            </Row>
          )}
        </Table>
      </div>

      {/* Удаления */}
      <div className="mt-7">
        <div className="font-semibold mb-4">Удаления</div>
        <Table>
          <Row className="text-sm font-semibold">
            <Cell head>Фамилия Имя</Cell>
            <Cell head className="text-center w-11">
              №
            </Cell>
            <Cell head>Команда</Cell>
            <Cell head>Причина</Cell>
          </Row>
          {data?.item.deletes.map((item, i) => (
            <Row className="text-sm" key={i}>
              <Cell>{item.name}</Cell>
              <Cell className="text-center">{i + 1}</Cell>
              <Cell>{item.team}</Cell>
              <Cell>{item.text}</Cell>
            </Row>
          ))}
          {data?.item.deletes.length == 0 && (
            <Row className="text-sm">
              <Cell colSpan={100}>-</Cell>
            </Row>
          )}
        </Table>
      </div>

      {/* Травматические случаи */}
      <div className="mt-7">
        <div className="font-semibold mb-4">Травматические случаи</div>
        <Table>
          <Row className="text-sm font-semibold">
            <Cell head>Фамилия Имя</Cell>
            <Cell head className="">
              Минута матча
            </Cell>
            <Cell head>Характер повреждения, причины, диагноз</Cell>
            <Cell head>Какая оказана помощь</Cell>
          </Row>
          {data?.item.trauma.map((item, i) => (
            <Row className="text-sm" key={i}>
              <Cell>{item.name}</Cell>
              <Cell>{item.time}</Cell>
              <Cell>{item.text}</Cell>
              <Cell>{item.help}</Cell>
            </Row>
          ))}
          {data?.item.trauma.length == 0 && (
            <Row className="text-sm">
              <Cell colSpan={100}>-</Cell>
            </Row>
          )}
        </Table>
      </div>

      {/* Прочие замечания */}
      <div className="mt-7">
        <div className="font-semibold mb-4">Прочие замечания</div>
        <FieldView>
          <div className="text-sm ">{data?.item.other_remarks || '-'}</div>
        </FieldView>
      </div>

      <div className="mt-10 flex gap-8">
        <div className="text-xl font-semibold">Протокол заполнен верно</div>
        {/* <div className="text-xl">Карагодин В. О.</div> */}
      </div>

      <div className="flex gap-4 mt-7 print:hidden">
        <Button variant="light" className="px-16">
          Закрыть
        </Button>
        <Button variant="contur" className="gap-2 px-16 ml-auto" onClick={() => window.print()}>
          <PrintIcon />
          Печать
        </Button>
      </div>
    </div>
  )
}
