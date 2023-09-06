import { useEffect, useState } from 'react'
import { AnaliticFilter } from './AnaliticFilter'
import { AnaliticTable } from './AnaliticTable'

export function Analitic() {
  const [delegates, setDelegates] = useState<IDelegate[]>([])

  return (
    <>
      <div className="mb-5 text-3xl font-bold">Аналитика по сезонам</div>
      <AnaliticFilter />
      <AnaliticTable items={delegates} />
    </>
  )
}
