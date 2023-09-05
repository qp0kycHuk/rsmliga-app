import { CircleIcon, FileDocIcon, FileFolderIcon, MenuIcon, WhistleIcon } from '@assets/icons/fill'
import classes from './SideBar.module.scss'
import { Button } from '@features/ui'
import classnames from 'classnames'
import { routes as delegateRoutes } from '../../views/Delegate/const'
import { SideBarButton } from './SideBarButton'
import { SidebarContextProvider, useSidebarContext } from './SidebarContext'

function SideBarInner() {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebarContext()

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

        <SideBarButton title="Заявки" to="/admin/" icon={FileDocIcon} />
        <SideBarButton title="Отчеты" to="/admin/report/" icon={FileFolderIcon} />
        <SideBarButton title="Судьи и делегаты" to={delegateRoutes.list} icon={WhistleIcon} />
        <SideBarButton sub title="Список" to={delegateRoutes.list} icon={CircleIcon} />
        <SideBarButton
          sub
          title="Аналитика по сезонам"
          to={delegateRoutes.analitic}
          icon={CircleIcon}
        />
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
