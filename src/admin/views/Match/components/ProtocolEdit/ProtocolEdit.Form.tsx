import { AdminSelect } from '@admin/components/AdminSelect'
import { Fields } from './ProtocolEdit.Fields/Fields'
import { useState } from 'react'
import { getEntities, getIds } from '@utils/helpers/entites'

export function ProtocolEditForm() {
  const [colorId, setColorId] = useState('red')

  const colors = [
    {
      id: 'red',
      name: 'Красный',
      value: '#FF6B6B',
    },
    {
      id: 'green',
      name: 'Зелёный',
      value: '#3EAE2C',
    },
    {
      id: 'blue',
      name: 'Синий',
      value: '#448FFF',
    },
  ]

  const entites = getEntities(colors)
  const ids = getIds(colors)

  return (
    <div>
      <div className="text-center text-2xl font-semibold mb-6">Протокол</div>
      <Fields />
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div>
          <div className="text-sm font-semibold mb-2">Команда 1</div>
          <div className="relative">
            <div className="input w-full flex items-center">МБОУ Лопанская СОШ № 3 2013г.</div>

            <AdminSelect
              itemsClassName="max-h-80 w-96 overflow-auto"
              className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-default/5 rounded-md"
              placeholder="Нету"
              underline={false}
              value={colorId}
              items={ids || []}
              onChange={(value) => setColorId((value as string) || '')}
              renderItem={(id) => (
                <div className="flex items-center gap-3 text-black">
                  <div
                    className="size-6 rounded-md"
                    style={{ background: entites[id]?.value || '' }}
                  ></div>
                  {entites[id]?.name || ''}
                </div>
              )}
            />
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold mb-2">Команда 2</div>
        </div>
      </div>
    </div>
  )
}
