import { classNameJoin } from '@utils/helpers/classNameJoin'

export function Skeleton({ className }: PropsWithClassName) {
  return <div className={classNameJoin('animate-pulse bg-default/10', className)}></div>
}
