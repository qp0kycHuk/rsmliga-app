import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@features/ui'
import { TriangleDownIcon } from '@assets/icons/fill'
import { hasTouch } from 'detect-touch'
import classnames from 'classnames'

interface IAdminSelectProps {
  label?: string
  placeholder?: string
  value?: EntityId
  items: EntityId[]
  onChange?: (value?: EntityId) => void
  renderItem?: (value: EntityId) => string
  className?: string
  itemsClassName?: string
}

export function AdminSelect({
  items,
  label,
  placeholder,
  value,
  onChange,
  renderItem,
  className,
  itemsClassName,
}: IAdminSelectProps) {
  const selectWidth = value
    ? (renderItem ? renderItem(value) : value)?.toString().length * 10
    : (placeholder || 'Любое').length * 10

  if (hasTouch) {
    return (
      <label className={classnames(className, 'flex items-center gap-2')}>
        <div>{label}</div>
        <div className="flex items-center gap-2">
          <select
            onChange={(e) => onChange?.(e.target.value)}
            value={value}
            className="w-full max-w-[200px] border-b border-primary bg-transparent  outline-none appearance-none text-primary truncate "
            style={{ width: selectWidth }}
          >
            <option value={''}>{placeholder}</option>
            {items.map((item) => (
              <option key={item} value={item} disabled={value === item}>
                {renderItem ? renderItem(item) : item}
              </option>
            ))}
          </select>
          <TriangleDownIcon className="text-xs text-primary" />
        </div>
      </label>
    )
  } else {
    return (
      <div className={classnames(className, 'flex items-center gap-2')}>
        <div>{label}</div>
        <Menu>
          <MenuButton as={Button} variant="text" className="gap-2 " disabled={items.length === 0}>
            {({ open }) => (
              <>
                <div className="border-b max-w-[200px] truncate">
                  {value ? (renderItem ? renderItem(value) : value) : placeholder}
                </div>
                <TriangleDownIcon className={classnames('text-xs', open ? '-rotate-180' : '')} />
              </>
            )}
          </MenuButton>

          <MenuItems
            className={classnames(
              itemsClassName,
              'p-1 left-0 sm:-translate-x-1/2 sm:left-1/2 w-52 '
            )}
          >
            <MenuItem>
              {({ active }) => (
                <Button
                  onClick={() => onChange?.()}
                  className="justify-start w-full h-auto px-2 py-1 text-left text-black"
                  size="sm"
                  variant={active ? 'light' : 'none'}
                >
                  {placeholder}
                </Button>
              )}
            </MenuItem>
            {items.map((item) => (
              <MenuItem key={item}>
                {({ active }) => (
                  <Button
                    onClick={() => onChange?.(item)}
                    className="justify-start w-full h-auto px-2 py-1 text-left text-black"
                    size="sm"
                    disabled={value === item}
                    variant={active || item === value ? 'light' : 'none'}
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
}
