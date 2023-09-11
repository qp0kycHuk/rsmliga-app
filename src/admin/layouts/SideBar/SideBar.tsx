import classnames from 'classnames'
import { Button } from '@features/ui'
import { MenuIcon } from '@assets/icons/fill'
import { useFetchMenu } from '@admin/service/menu'
import { SidebarContextProvider, useSidebarContext } from './SidebarContext'
import { SideBarButton } from './SideBarButton'
import { icons } from './SidebarIcons'
import classes from './SideBar.module.scss'

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
