import { AnaliticTable } from './AnaliticTable'
import {
  DelegatesContextProvider,
  useDelegatesContext,
} from '../DelegatesContext/Delegates.Context'
import { Filter } from '../DelegatesContext/Delegates.Filter'
import { Pagination } from '../DelegatesContext/Delegates.Pagination'

function AnaliticInner() {
  const { loading, delegates } = useDelegatesContext()

  return (
    <>
      <div className="mb-5 text-3xl font-bold">Аналитика по сезонам</div>

      <Filter />

      <AnaliticTable
        items={delegates}
        className={loading ? 'opacity-40 pointer-events-none' : ''}
      />
      <Pagination />
    </>
  )
}

export function Analitic() {
  return (
    <DelegatesContextProvider>
      <AnaliticInner />
    </DelegatesContextProvider>
  )
}
