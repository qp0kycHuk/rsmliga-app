import { Menu, Transition } from '@headlessui/react'
import classnames from 'classnames'
import React from 'react'

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
        className={classnames(
          'z-1 absolute left-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg top-full',
          className
        )}
      >
        {children}
      </Menu.Items>
    </Transition>
  )
}
