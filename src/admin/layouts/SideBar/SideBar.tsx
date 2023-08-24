import { FileDocIcon, FileFolderIcon, MenuIcon } from '@assets/icons/fill'
import classes from './SideBar.module.scss'
import { Button } from '@features/ui'
import { Link } from '@lib/Link'
import { useToggle } from '@hooks/useToggle'
import classnames from 'classnames'

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
        {isOpen && <div className="ml-2 text-base text-gray">Свернуть меню</div>}
      </Button>
      <Button
        as={Link}
        href="/admin/"
        className="justify-start w-full pl-3 mb-1 whitespace-nowrap"
        variant="none"
      >
        <FileDocIcon className="flex-shrink-0 text-2xl" />
        {isOpen && <div className="ml-2 text-base text-gray">Заявки</div>}
      </Button>
      <Button
        as={Link}
        href="/admin/report/"
        className="justify-start w-full pl-3 mb-1 whitespace-nowrap"
        variant="none"
      >
        <FileFolderIcon className="flex-shrink-0 text-2xl" />
        {isOpen && <div className="ml-2 text-base text-gray">Отчеты</div>}
      </Button>
    </div>
  )
}
