import classnames from 'classnames'
import { Avatar, Button } from '@features/ui'
import { LogOutIcon } from '@assets/icons/fill'
import { useFetchCurrentUser } from '@admin/service/user'
import classes from './Header.module.scss'

export function Header() {
  const { data } = useFetchCurrentUser()

  return (
    <header
      className={classnames(
        classes.header,
        'flex items-center py-2 bg-light-100 dark:bg-dark-100 dark:border-white dark:border-opacity-20'
      )}
    >
      <div className={classnames(classes.user, 'flex items-center gap-2')}>
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

      <Button as="a" href="/" className="px-10 ml-auto" size="xs">
        На сайт
      </Button>
    </header>
  )
}
