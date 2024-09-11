import { DotsPreloader } from '@components/DotsPreloader/DotsPreloader'
import { Empty } from './Empty'

export function ListLayout({ items, isFetching, className, children }: Props) {
  const isEmpty = !items || items.length == 0
  const isLoading = isEmpty && isFetching

  if (isLoading) return <DotsPreloader className={className} />
  if (isEmpty) return <Empty className={className} />

  return <div className={isFetching ? 'pointer-events-none opacity-40' : ''}>{children}</div>
}

type Props = React.PropsWithChildren & {
  className?: string
  items?: unknown[]
  isFetching?: boolean
}
