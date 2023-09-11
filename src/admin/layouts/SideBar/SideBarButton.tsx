import classNames from 'classnames'
import { Button } from '@features/ui'
import { Link } from '@lib/Link'
import { useSidebarContext } from './SidebarContext'

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
    <Button
      onClick={closeSidebar}
      as={Link}
      href={to}
      to={to}
      className={classNames('justify-start w-full  mb-1 whitespace-nowrap', sub ? 'pl-10' : 'pl-3')}
      variant="none"
    >
      <Icon className={classNames('flex-shrink-0 ', sub ? 'text-xs' : 'text-2xl')} />
      {isOpen && <div className="ml-2 text-base text-black">{title}</div>}
    </Button>
  )
}