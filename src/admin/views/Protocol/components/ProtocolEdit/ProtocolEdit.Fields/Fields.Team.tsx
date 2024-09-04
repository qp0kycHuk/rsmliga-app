import { AdminSelect } from '@admin/components/AdminSelect'
import { FieldView } from '@admin/components/FieldView'
import { useFetchCities } from '@admin/service/cities'
import { useFetchColors } from '@admin/service/colors'
import { useProtocolEditContext } from '../ProtocolEdit.Context'

export function Team({ name, label = 'Команда' }: Props) {
  const { item, update } = useProtocolEditContext()
  const { data: colorsData } = useFetchColors()
  const { data: cityData } = useFetchCities()

  const team = item[name]
  const city = team?.location ? cityData?.entites[team?.location] : null

  return (
    <div>
      <div className="text-sm font-semibold mb-2">{label}</div>
      <div className="relative z-1">
        <div className="input w-full flex items-center">{team?.name}</div>

        <AdminSelect
          itemsClassName="max-h-80 w-96 overflow-auto"
          className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-default/5 rounded-md"
          placeholder="Нету"
          underline={false}
          value={colorsData?.items.find(({ XML_ID }) => team?.color == XML_ID)?.ID || ''}
          items={colorsData?.ids || []}
          onChange={(value) =>
            update({
              [name]: {
                ...team,
                color: colorsData?.items.find(({ ID }) => value == ID)?.XML_ID,
              },
            })
          }
          renderItem={(id) => (
            <div className="flex items-center gap-3 text-black">
              <div
                className="size-6 rounded-md border border-gray"
                style={{ background: '#' + (colorsData?.entites[id]?.XML_ID || 'eee') }}
              ></div>
              {colorsData?.entites[id]?.VALUE || ''}
            </div>
          )}
        />
      </div>
      <FieldView className="mt-1 py-2">{city?.VALUE}</FieldView>
    </div>
  )
}

type Props = {
  name: 'team_1_info' | 'team_2_info'
  label?: string
}
