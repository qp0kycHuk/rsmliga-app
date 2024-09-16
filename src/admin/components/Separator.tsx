import { twMerge } from 'tailwind-merge'

export function Separator({ className }: PropsWithClassName) {
  return <div className={twMerge('my-8 border-t border-default/20', className)} />
}
