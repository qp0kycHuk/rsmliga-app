import { useEffect, useState } from 'react'
import { ListFilter } from './ListFilter'
import { ListTable } from './ListTable'
import { api } from '../../service/api'

export function List() {
  const [delegates, setDelegates] = useState<IDelegate[]>([])

  useEffect(() => {
    api()
      .fetchDelegates()
      .then((items) => {
        setDelegates(items)
      })
  }, [])

  return (
    <>
      <div className="mb-5 text-3xl font-bold">Список</div>
      <ListFilter />
      <ListTable items={delegates} />
    </>
  )
}
