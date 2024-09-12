import { MenuItems as Items } from '@headlessui/react'
import { classNameJoin } from '@utils/helpers/classNameJoin'
import { twMerge } from 'tailwind-merge'

const origin: Record<AnchorString, string> = {
  top: 'origin-bottom',
  right: 'origin-left',
  bottom: 'origin-top',
  left: 'origin-right',
  'top start': 'origin-bottom-left',
  'top end': 'origin-bottom-right',
  'right start': 'origin-top-left',
  'right end': 'origin-bottom-left',
  'bottom start': 'origin-top-left',
  'bottom end': 'origin-top-right',
  'left start': 'origin-top-right',
  'left end': 'origin-bottom-right',
}

export function MenuItems({ children, className, anchor = 'bottom start', ...props }: Props) {
  return (
    <Items
      anchor={anchor}
      modal={false}
      {...props}
      transition
      className={classNameJoin(
        '[--anchor-gap:8px] transition duration-100 data-[closed]:opacity-0 data-[closed]:scale-95',
        origin[anchor],
        twMerge('z-1 w-56 bg-l3 rounded-md shadow-lg', className)
      )}
    >
      {children}
    </Items>
  )
}

interface Props extends React.ComponentProps<typeof Items> {
  anchor: AnchorString
}

type Align = 'start' | 'end'
type Placement = 'top' | 'right' | 'bottom' | 'left'
export type AnchorString = `${Placement}` | `${Placement} ${Align}`
