import { AdminSelect } from '@admin/components/AdminSelect'
import { useState } from 'react'

const seasons = ['Любой', '2021-2022', '2022-2023', '2023-2024']
const contests = [
  'Любое',
  'Спартакиада по тэг-регби среди учащихся 5-6',
  'Спартакиада по тэг-регби среди учащихся 7-8',
  'Спартакиада по тэг-регби среди учащихся 9-10',
]

const areas = ['Любой', 'Железнодорожный', 'Судоходный', 'Воздушный']

export function ReportFilter() {
  const [season, setSeason] = useState(seasons[0])
  const [contest, setContest] = useState(contests[0])
  const [area, setArea] = useState(areas[0])

  return (
    <>
      <div className="flex items-center gap-10 mb-6">
        <AdminSelect label="Сезон" value={season} items={seasons} onChange={setSeason} />
        <AdminSelect label="Соревнование" value={contest} items={contests} onChange={setContest} />
        <AdminSelect
          label="Муниципальный район или город"
          value={area}
          items={areas}
          onChange={setArea}
        />
      </div>
    </>
  )
}
