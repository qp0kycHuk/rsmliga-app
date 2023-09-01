import { LogOutIcon } from '@assets/icons/fill'
import { Avatar, Button } from '@features/ui'
import classes from './Header.module.scss'
import classnames from 'classnames'

export function Header() {
  return (
    <header className={classnames(classes.header, 'flex items-center py-2')}>
      <div className={classnames(classes.user, 'flex items-center gap-2')}>
        <Avatar src="/img/test.gif" />

        <div className="text-body-2 text--demibold">Евгения Лиссова</div>

        <Button className="ml-auto rounded-lg" icon size="sm" variant="light">
          <LogOutIcon className="text-lg" />
        </Button>
      </div>

      <Button className="px-10 ml-auto" size="xs">
        На сайт
      </Button>
    </header>
  )
}
