import { Empty } from './Empty'
import { PagePreloader } from '@components/PagePreloader/PagePreloader'

export function ListLayout({ items, isFetching, className, children }: Props) {
  const isEmpty = !items || items.length == 0
  const isLoading = isEmpty && isFetching

  if (isLoading) return <PagePreloader />
  if (isEmpty) return <Empty className={className} />

  return <div className={isFetching ? 'pointer-events-none opacity-40' : ''}>{children}</div>
}

type Props = BaseHtmlProps & {
  items?: unknown[]
  isFetching?: boolean
}
