import { Button } from '@features/ui'
import { MenuIcon } from '@assets/icons/fill'
import { useFetchMenu } from '@admin/service/menu'
import { useSidebarContext } from './SidebarContext'
import { SideBarButton } from './SideBarButton'
import { icons } from './SidebarIcons'
import classes from './SideBar.module.scss'
import { Theme } from './SideBar.Theme'
import { CirclePreloader } from '@components/CirclePreloader/CirclePreloader'
import { classNameJoin } from '@utils/helpers/classNameJoin'
import { ThemeColor } from '@components/ThemeColor'

function SideBarInner() {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebarContext()
  const { data, isLoading } = useFetchMenu()
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
        className={classNameJoin(classes.sidebar, 'bg-l3 print:hidden', isOpen ? classes.open : '')}
      >
        <Button
          className={classNameJoin(
            'justify-start w-full mb-1 whitespace-nowrap max-md:hidden',
            isOpen ? 'pl-3' : 'pl-2.5 pr-2.5 '
          )}
          variant="none"
          onClick={toggleSidebar}
        >
          <MenuIcon className="flex-shrink-0 text-2xl" />
          {isOpen && <div className="ml-2 text-base text-default">Свернуть меню</div>}
        </Button>
        <Button as="a" href="/" size="sm" className="w-full md:hidden shrink-0">
          На сайт
        </Button>

        {isLoading && (
          <div className="p-3 px-2 mb-1">
            <CirclePreloader className="text-2xl text-primary mx-auto" />
          </div>
        )}

        {flatItems?.map((item) => (
          <SideBarButton
            key={item.link + (item.isSub ? '/sub' : '')}
            title={item.name}
            to={item.link}
            icon={icons[item.isSub ? 'sub' : item.icon]}
            sub={item.isSub}
          />
        ))}

        <div className="flex gap-4 mt-auto items-center">
          <Theme />
          <div className="ml-auto mr-2">{isOpen && <ThemeColor />}</div>
        </div>
      </div>

      <div
        onClick={closeSidebar}
        className={classNameJoin(
          'print:hidden',
          classes['sidebar-shadow'],
          isOpen ? classes.open : ''
        )}
      ></div>
    </>
  )
}

export function SideBar() {
  return <SideBarInner />
}
