import { TriangleDownIcon } from '@assets/icons/fill'
import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@features/ui'
import classnames from 'classnames'

interface IAdminSelectProps {
  label?: string
  value: string
  items: string[]
  onChange?: (value: string) => void
  renderItem?: (value: string) => string
  className?: string
  itemsClassName?: string
}

export function AdminSelect({
  items,
  label,
  value,
  onChange,
  renderItem,
  className,
  itemsClassName,
}: IAdminSelectProps) {
  return (
    <div className={classnames(className, 'flex items-center gap-2')}>
      <div>{label}</div>
      <Menu>
        <MenuButton as={Button} variant="text" className="gap-2 ">
          {({ open }) => (
            <>
              <div className="border-b"> {renderItem ? renderItem(value) : value}</div>
              <TriangleDownIcon className={classnames('text-xs', open ? '-rotate-180' : '')} />
            </>
          )}
        </MenuButton>

        <MenuItems className={classnames(itemsClassName, 'p-1 -translate-x-1/2 left-1/2 w-52')}>
          {items.map((item) => (
            <MenuItem key={item}>
              {({ active }) => (
                <Button
                  onClick={() => onChange?.(item)}
                  className="justify-start w-full h-auto px-2 py-1 text-left"
                  size="sm"
                  variant={active ? 'light' : 'none'}
                >
                  {renderItem ? renderItem(item) : item}
                </Button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  )
}
