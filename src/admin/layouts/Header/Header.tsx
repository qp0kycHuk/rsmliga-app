import classnames from 'classnames'
import { Avatar, Button } from '@features/ui'
import { CrossIcon, LogOutIcon, MenuIcon } from '@assets/icons/fill'
import { useFetchCurrentUser } from '@admin/service/user'
import classes from './Header.module.scss'
import { useSidebarContext } from '../SideBar/SidebarContext'
import { ThemeColor } from '@components/ThemeColor'

export function Header() {
  const { data } = useFetchCurrentUser()
  const { isOpen, toggleSidebar } = useSidebarContext()

  return (
    <header
      className={classnames(
        classes.header,
        'flex items-center py-2 bg-l3 border-default/20 print:hidden'
      )}
    >
      <div className={classnames(classes.user, 'flex items-center gap-2')}>
        <Button
          onClick={toggleSidebar}
          className="whitespace-nowrap md:hidden"
          variant="none"
          size="sm"
          icon
        >
          {isOpen ? (
            <CrossIcon className="flex-shrink-0 text-2xl" />
          ) : (
            <MenuIcon className="flex-shrink-0 text-2xl" />
          )}
        </Button>
        <Avatar src={data?.item.imgPath} />
        <div className="text-body-2 text--demibold">{data?.item.name}</div>
        <Button
          as="a"
          href={data?.item.logoutUrl}
          className="ml-auto rounded-lg"
          icon
          size="sm"
          variant="light"
        >
          <LogOutIcon className="text-lg" />
        </Button>
      </div>

      <Button as="a" href="/" className="px-10 ml-auto max-md:hidden" size="xs">
        На сайт
      </Button>
    </header>
  )
}
