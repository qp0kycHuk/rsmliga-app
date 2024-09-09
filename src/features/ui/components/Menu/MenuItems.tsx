import { Menu, Transition } from '@headlessui/react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IMenuItemsProps extends React.PropsWithChildren {
  className?: string
}

export function MenuItems({ children, className }: IMenuItemsProps) {
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
      <Menu.Items
        className={twMerge(
          'z-1 absolute left-0 w-56 mt-2 origin-top-right bg-l3 rounded-md shadow-lg top-full',
          className
        )}
      >
        {children}
      </Menu.Items>
    </Transition>
  )
}
