import { CircleIcon, FileDocIcon, FileFolderIcon, MenuIcon, WhistleIcon } from '@assets/icons/fill'
import classes from './SideBar.module.scss'
import { Button } from '@features/ui'
import { Link } from '@lib/Link'
import { useToggle } from '@hooks/useToggle'
import classnames from 'classnames'
import { routes as delegateRoutes } from '../../views/Delegate/const'

interface ISideBarProps {}

export function SideBar({}: ISideBarProps) {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <div
      className={classnames(classes.sidebar, {
        [classes.open]: isOpen,
      })}
    >
      <Button
        className="justify-start w-full pl-3 mb-1 whitespace-nowrap"
        variant="none"
        onClick={toggleIsOpen}
      >
        <MenuIcon className="flex-shrink-0 text-2xl" />
        {isOpen && <div className="ml-2 text-base text-black">Свернуть меню</div>}
      </Button>
      <Button
        as={Link}
        href="/admin/"
        to="/admin/"
        className="justify-start w-full pl-3 mb-1 whitespace-nowrap"
        variant="none"
      >
        <FileDocIcon className="flex-shrink-0 text-2xl" />
        {isOpen && <div className="ml-2 text-base text-black">Заявки</div>}
      </Button>
      <Button
        as={Link}
        href="/admin/report/"
        to="/admin/report/"
        className="justify-start w-full pl-3 mb-1 whitespace-nowrap"
        variant="none"
      >
        <FileFolderIcon className="flex-shrink-0 text-2xl" />
        {isOpen && <div className="ml-2 text-base text-black">Отчеты</div>}
      </Button>
      <Button
        as={Link}
        href={delegateRoutes.list}
        to={delegateRoutes.list}
        className="justify-start w-full pl-3 mb-1 whitespace-nowrap"
        variant="none"
      >
        <WhistleIcon className="flex-shrink-0 text-2xl" />
        {isOpen && <div className="ml-2 text-base text-black">Судьи и делегаты</div>}
      </Button>
      {isOpen && (
        <Button
          as={Link}
          href={delegateRoutes.list}
          to={delegateRoutes.list}
          className="justify-start w-full pl-10 mb-1 whitespace-nowrap"
          variant="none"
        >
          <CircleIcon className="flex-shrink-0 text-xs" />
          <div className="ml-2 text-base text-black">Список</div>
        </Button>
      )}
      {isOpen && (
        <Button
          as={Link}
          href={delegateRoutes.analitic}
          to={delegateRoutes.analitic}
          className="justify-start w-full pl-10 mb-1 whitespace-nowrap"
          variant="none"
        >
          <CircleIcon className="flex-shrink-0 text-xs" />
          <div className="ml-2 text-base text-black">Аналитика по сезонам</div>
        </Button>
      )}
    </div>
  )
}
