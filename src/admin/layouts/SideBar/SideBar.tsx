import { CircleIcon, FileDocIcon, FileFolderIcon, MenuIcon, WhistleIcon } from '@assets/icons/fill'
import classes from './SideBar.module.scss'
import { Button } from '@features/ui'
import classnames from 'classnames'
import { routes as delegateRoutes } from '../../views/Delegate/const'
import { SideBarButton } from './SideBarButton'
import { SidebarContextProvider, useSidebarContext } from './SidebarContext'
import { useFetchMenu } from '@admin/service/menu'
import { icons } from './SidebarIcons'

function SideBarInner() {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebarContext()
  const { data } = useFetchMenu()
  const flatItems = data?.items?.reduce((acc: IMenuItem[], item) => {
    acc.push(item)

    item.sub?.map((sub) => {
      acc.push({ ...sub, isSub: true })
    })

    return acc
  }, [] as IMenuItem[])

  return (
    <>
      <div
        className={classnames(classes.sidebar, {
          [classes.open]: isOpen,
        })}
      >
        <Button
          className="justify-start w-full pl-3 mb-1 whitespace-nowrap"
          variant="none"
          onClick={toggleSidebar}
        >
          <MenuIcon className="flex-shrink-0 text-2xl" />
          {isOpen && <div className="ml-2 text-base text-black">Свернуть меню</div>}
        </Button>
        {flatItems?.map((item) => (
          <SideBarButton
            key={item.link + (item.isSub ? '/sub' : '')}
            title={item.name}
            to={item.link}
            icon={icons[item.isSub ? 'sub' : item.icon]}
            sub={item.isSub}
          />
        ))}
      </div>

      <div
        onClick={closeSidebar}
        className={classnames(classes['sidebar-shadow'], {
          [classes.open]: isOpen,
        })}
      ></div>
    </>
  )
}

export function SideBar() {
  return (
    <SidebarContextProvider>
      <SideBarInner />
    </SidebarContextProvider>
  )
}
