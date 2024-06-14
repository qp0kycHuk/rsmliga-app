import classNames from 'classnames'
import { Button, Tooltip } from '@features/ui'
import { useSidebarContext } from './SidebarContext'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

interface IProps {
  icon: IconComponent
  to: string
  title: string
  sub?: boolean
}

export function SideBarButton({ title, icon: Icon, to, sub }: IProps) {
  const { isOpen, closeSidebar } = useSidebarContext()

  if (sub && !isOpen) {
    return null
  }

  return (
    <Tooltip content={!isOpen ? title : null} placement="right" disabled={isOpen}>
      <Button
        onClick={closeSidebar}
        as={to.includes('/dashboard/') ? Link : 'a'}
        href={to}
        to={to}
        className={twMerge(
          'justify-start w-full mb-1 whitespace-nowrap shrink-0',
          isOpen ? 'pl-3' : 'pl-2.5 pr-2.5 ',
          sub ? 'pl-10' : ''
        )}
        variant="none"
      >
        <Icon className={classNames('flex-shrink-0 ', sub ? 'text-xs' : 'text-2xl')} />
        {isOpen && <div className="ml-2 text-base text-black dark:text-white">{title}</div>}
      </Button>
    </Tooltip>
  )
}
