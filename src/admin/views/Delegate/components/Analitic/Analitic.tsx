import { AnaliticTable } from './AnaliticTable'
import {
  DelegatesContextProvider,
  useDelegatesContext,
} from '../DelegatesContext/Delegates.Context'
import { Filter } from '../DelegatesContext/Delegates.Filter'
import { Pagination } from '../DelegatesContext/Delegates.Pagination'
import { Button } from '@features/ui'
import { PrintIcon } from '@assets/icons/fill'

function AnaliticInner() {
  const { loading, delegates } = useDelegatesContext()

  return (
    <>
      <div className="flex mb-5">
        <div className="text-3xl font-bold">Аналитика по сезонам</div>
        <Button
          variant="text"
          className="ml-auto gap-2 print:hidden"
          onClick={() => window.print()}
          disabled={loading}
        >
          <PrintIcon />
          <span className="font-semibold">Печать</span>
        </Button>
      </div>

      <div className="print:hidden">
        <Filter />
      </div>

      <AnaliticTable items={delegates} className={loading ? 'pointer-events-none' : ''} />
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
