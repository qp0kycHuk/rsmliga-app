import { FieldView } from '@admin/components/FieldView'
import { Separator } from '@admin/components/Separator'
import { Cell, CellTooltip, Row, Table } from '@admin/index'
import { PrintIcon } from '@assets/icons/fill'
import { Avatar, Button } from '@features/ui'
import { useFetchProtocol } from '../../service/protocol'
import { useFetchTournaments } from '@admin/service/tournaments'
import { useFetchCities } from '@admin/service/cities'

interface IProps {
  matchId: EntityId
}

export function Protocol({ matchId }: IProps) {
  const { data } = useFetchProtocol({ id: matchId })

  const { data: cityData } = useFetchCities()

  const area = cityData?.entites[data?.item.area_id || '']?.NAME

  return (
    <div>
      {/* <pre>{JSON.stringify(data.item, null, 2)}</pre> */}
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-2">
          <div className="font-semibold mb-2">Соревнование #{matchId}</div>
          <FieldView>
            <div className="text-sm leading-none">
              <CellTooltip>{data?.item.competition_name}</CellTooltip>
            </div>
          </FieldView>
        </div>
        <div className="col-span-2">
          <div className="font-semibold mb-2">Этап</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.stage_name}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2">Город или район</div>
          <FieldView>
            <div className="text-sm leading-none">{area || '-'}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2">Место проведения</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.location || '-'}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2">Дата проведения</div>
          <FieldView>
            <div className="text-sm leading-none">
              {new Date(data?.item.date || 0)?.toLocaleDateString()}
            </div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2">Время проведения</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.time}</div>
          </FieldView>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        <div className="flex flex-col gap-1">
          <div className="font-semibold mb-2">Команда 1</div>
          <FieldView className="pl-4 py-1 pr-1  flex items-center">
            <div className="text-sm leading-none">{data?.item.team_1_info.name}</div>
            <div className="bg-gray dark:bg-dark-100 dark:bg-opacity-40 p-1 pr-4 rounded-md ml-auto flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-md"
                style={{ background: '#' + data?.item.team_1_info.color }}
              />
              <div className="text-sm">Красный</div>
            </div>
          </FieldView>
          <FieldView>
            <div className="text-sm leading-none">Веселовский район</div>
          </FieldView>
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-semibold mb-2">Команда 2</div>
          <FieldView className="pl-4 py-1 pr-1  flex items-center">
            <div className="text-sm leading-none">{data?.item.team_2_info.name}</div>
            <div className="bg-gray dark:bg-dark-100 dark:bg-opacity-40 p-1 pr-4 rounded-md ml-auto flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-md"
                style={{ background: '#' + data?.item.team_2_info.color }}
              />
              <div className="text-sm">Синий</div>
            </div>
          </FieldView>
          <FieldView>
            <div className="text-sm leading-none">Веселовский район</div>
          </FieldView>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        <div>
          <div className="font-semibold mb-2">Судья</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.judge || 'Нет'}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2">Делегат</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.delegate || 'Нет'}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2">Помощник судьи 1</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.helper_1 || 'Нет'}</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2">Помощник судьи 2</div>
          <FieldView>
            <div className="text-sm leading-none">{data?.item.helper_2 || 'Нет'}</div>
          </FieldView>
        </div>
      </div>

      <Separator />

      <div className="text-3xl font-bold mb-8">Инфо о матче</div>
      <div className="grid grid-cols-3 gap-6">
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

      <div className="grid grid-cols-2 gap-6 mt-7">
        <div>
          <div className="font-semibold mb-4">Команда 1</div>
          <TeamTable />
        </div>
        <div>
          <div className="font-semibold mb-4">Команда 2</div>
          <TeamTable />
        </div>
      </div>

      <Separator />

      <div className="text-3xl font-bold mb-8">Представители</div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        <div>
          <div className="font-semibold mb-2">Представитель 1 команды</div>
          <FieldView>
            <div className="text-sm leading-none">Воловик Вячеслав</div>
          </FieldView>
        </div>
        <div>
          <div className="font-semibold mb-2">Представитель 2 команды</div>
          <FieldView>
            <div className="text-sm leading-none">Воловик Вячеслав</div>
          </FieldView>
        </div>
      </div>

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
          <Row className="text-sm">
            <Cell>Щербаков Иван </Cell>
            <Cell className="text-center">33</Cell>
            <Cell>Щербаков Иван </Cell>
            <Cell>Щербаков Иван </Cell>
          </Row>
        </Table>
      </div>

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
          <Row className="text-sm">
            <Cell>Щербаков Иван </Cell>
            <Cell className="text-center">33</Cell>
            <Cell>Щербаков Иван </Cell>
            <Cell>Щербаков Иван </Cell>
          </Row>
        </Table>
      </div>

      <div className="mt-7">
        <div className="font-semibold mb-4">Травматические случаи</div>
        <FieldView>
          <div className="text-sm ">
            Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты.
            Переулка она безорфографичный текстами бросил предложения, щеке последний, составитель
            инициал дал рыбными использовало вдали пустился наш пояс это встретил до.
          </div>
        </FieldView>
      </div>

      <div className="mt-7">
        <div className="font-semibold mb-4">Прочие замечания</div>
        <FieldView>
          <div className="text-sm ">{data?.item.other_remarks || '-'}</div>
        </FieldView>
      </div>

      <div className="mt-10 flex gap-8">
        <div className="text-xl font-semibold">Протокол заполнен верно</div>
        <div className="text-xl">Карагодин В. О.</div>
      </div>

      <div className="flex gap-4 mt-7">
        <Button variant="light" className="px-16">
          Закрыть
        </Button>
        <Button variant="contur" className="gap-2 px-16 ml-auto">
          <PrintIcon />
          Печать
        </Button>
      </div>
    </div>
  )
}

function TeamTable() {
  return (
    <Table xBorderLess>
      <Row className="text-sm font-semibold">
        <Cell head className="text-center w-14">
          №
        </Cell>
        <Cell head>{/* image */}</Cell>
        <Cell head>Фамилия Имя</Cell>
        <Cell head className="w-24 text-center">
          Попытки
        </Cell>
      </Row>
      {new Array(5).fill(true).map((_, index) => (
        <TeamItem key={index} />
      ))}
    </Table>
  )
}

function TeamItem() {
  return (
    <Row className="text-sm">
      <Cell className="text-center">33</Cell>
      <Cell className="w-12 py-1 px-0">
        <Avatar size="lg" src="/img/test.gif" />
      </Cell>
      <Cell>Щербаков Иван </Cell>
      <Cell className="py-0">
        <FieldView>
          <div className="text-sm leading-none text-center">3</div>
        </FieldView>
      </Cell>
    </Row>
  )
}
