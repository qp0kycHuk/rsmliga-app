import { MenuProps, Menu as MenuWrap } from '@headlessui/react'
import { classNameJoin } from '@utils/helpers/classNameJoin'

export { MenuButton, MenuItem } from '@headlessui/react'

export function Menu({ children, className, ...props }: Props) {
  return (
    <MenuWrap as="div" className={classNameJoin('relative group', className)} {...props}>
      {children}
    </MenuWrap>
  )
}

type Props = BaseHtmlProps & MenuProps
