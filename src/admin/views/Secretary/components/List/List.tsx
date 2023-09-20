import { useUserAccess } from '@admin/hooks/useUserAccess'
import {
  SecretariesContextProvider,
  useSecretariesContext,
} from '../SecretaryContext/Secretary.Context'
import { Filter } from '../SecretaryContext/Secretary.Filter'
import { Pagination } from '../SecretaryContext/Secretary.Pagination'
import { ListTable } from './List.Table'

function ListInner() {
  const { items, loading } = useSecretariesContext()
  console.log(items)

  return (
    <>
      <div className="mb-5 text-3xl font-bold">Общий список секретарей</div>
      <Filter />
      {loading ? 'loading...' : null}
      <ListTable items={items} className={loading ? 'hidden' : ''} />

      <div className="mt-8"></div>
      <Pagination />
    </>
  )
}

export function List() {
  return (
    <SecretariesContextProvider>
      <ListInner />
    </SecretariesContextProvider>
  )
}
