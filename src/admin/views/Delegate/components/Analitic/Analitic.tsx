import { AnaliticTable } from './AnaliticTable'
import {
  DelegatesContextProvider,
  useDelegatesContext,
} from '../DelegatesContext/Delegates.Context'
import { Filter } from '../DelegatesContext/Delegates.Filter'
import { Pagination } from '../DelegatesContext/Delegates.Pagination'
import { Button } from '@features/ui'
import { PrintIcon } from '@assets/icons/fill'
import { ListLayout } from '@admin/components/ListLayout'

function AnaliticInner() {
  const { loading, delegates } = useDelegatesContext()

  return (
    <>
      <div className="flex mb-5">
        <div className="text-3xl font-bold">Аналитика по сезонам</div>
        <Button
          variant="text"
          className="gap-2 ml-auto print:hidden"
          onClick={() => window.print()}
          disabled={loading}
        >
          <PrintIcon />
          <span className="font-semibold">Печать</span>
        </Button>
      </div>

      <div>
        <Filter />
      </div>

      <ListLayout items={delegates} isFetching={loading}>
        <AnaliticTable items={delegates} />
      </ListLayout>

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
