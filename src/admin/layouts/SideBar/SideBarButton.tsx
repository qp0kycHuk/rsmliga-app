import { Button, Tooltip } from '@features/ui'
import { useSidebarContext } from './SidebarContext'
import { Link } from 'react-router-dom'
import { classNameJoin } from '@utils/helpers/classNameJoin'

export function SideBarButton({ title, icon: Icon, to, sub }: Props) {
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
        className={classNameJoin(
          'justify-start w-full mb-1 whitespace-nowrap shrink-0',
          isOpen ? 'pl-3' : 'pl-2.5 pr-2.5 ',
          sub ? 'pl-10' : ''
        )}
        variant="none"
      >
        <Icon className={classNameJoin('flex-shrink-0 ', sub ? 'text-xs' : 'text-2xl')} />
        {isOpen && <div className="ml-2 text-base text-default">{title}</div>}
      </Button>
    </Tooltip>
  )
}

type Props = {
  icon: IconComponent
  to: string
  title: string
  sub?: boolean
}
