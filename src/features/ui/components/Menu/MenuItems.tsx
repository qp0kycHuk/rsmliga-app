import { MenuItems as Items } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

interface IMenuItemsProps extends React.ComponentProps<typeof Items> {
  className?: string
  anchor: AnchorString
}

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

export function MenuItems({
  children,
  className,
  anchor = 'bottom start',
  ...props
}: IMenuItemsProps) {
  return (
    <Items
      anchor={anchor}
      modal={false}
      {...props}
      transition
      className={twMerge(
        'z-1 w-56  bg-l3 rounded-md shadow-lg [--anchor-gap:8px]',
        'transition duration-100 data-[closed]:opacity-0 data-[closed]:scale-95',
        origin[anchor],
        className
      )}
    >
      {children}
    </Items>
  )
}

type Align = 'start' | 'end'
type Placement = 'top' | 'right' | 'bottom' | 'left'
export type AnchorString = `${Placement}` | `${Placement} ${Align}`
