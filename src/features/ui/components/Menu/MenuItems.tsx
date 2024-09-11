import { MenuItems as Items, Transition } from '@headlessui/react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IMenuItemsProps extends React.ComponentProps<typeof Items> {
  className?: string
}

export function MenuItems({ children, className, ...props }: IMenuItemsProps) {
  return (
    <Transition
      as={React.Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Items
        anchor="bottom start"
        {...props}
        className={twMerge(
          'z-6 w-56 origin-top-right bg-l3 rounded-md shadow-lg [--anchor-gap:8px]',
          className
        )}
      >
        {children}
      </Items>
    </Transition>
  )
}
