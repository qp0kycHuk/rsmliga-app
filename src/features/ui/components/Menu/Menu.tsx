import React from 'react'
import { Menu as MenuWrap } from '@headlessui/react'
import classnames from 'classnames'

export const MenuButton = MenuWrap.Button
export const MenuItem = MenuWrap.Item

export function Menu({ children, className }: IMenuProps) {
  return (
    <MenuWrap as="div" className={classnames('relative', className)}>
      {children}
    </MenuWrap>
  )
}

interface IMenuProps extends React.PropsWithChildren {
  className?: string
}
