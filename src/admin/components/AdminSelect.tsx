import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@features/ui'
import { TriangleDownIcon } from '@assets/icons/fill'
import { hasTouch } from 'detect-touch'
import classnames from 'classnames'
import { twMerge } from 'tailwind-merge'
import { AnchorProps } from 'node_modules/@headlessui/react/dist/internal/floating'

interface IAdminSelectProps<T = EntityId> {
  label?: string
  placeholder?: string
  value?: T
  items: T[]
  onChange?: (value?: T) => void
  renderItem?: (value: T) => string | JSX.Element
  className?: string
  itemsClassName?: string
  menuClassName?: string
  underline?: boolean
  touchSupport?: boolean
  anchor?: AnchorProps | undefined
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
  menuClassName,
  underline = true,
  touchSupport = true,
  anchor,
}: IAdminSelectProps) {
  const selectWidth = value
    ? (renderItem ? renderItem(value) : value)?.toString().length * 10
    : (placeholder || 'Любое').length * 10

  if (hasTouch && touchSupport) {
    return (
      <label className={classnames(className, 'flex items-center gap-2')}>
        {label && <div>{label}</div>}
        <div className="flex items-center gap-2 w-full">
          <select
            onChange={(e) => onChange?.(e.target.value)}
            value={value}
            className={twMerge(
              'w-full  max-w-[200px]  bg-transparent  outline-none appearance-none text-primary truncate ',
              underline ? 'border-b border-primary' : ''
            )}
            style={{ width: selectWidth }}
          >
            <option value={''}>{placeholder}</option>
            {items.map((item) => (
              <option key={item} value={item} disabled={value === item}>
                {renderItem ? renderItem(item) : item}
              </option>
            ))}
          </select>
          <TriangleDownIcon className="text-xs text-primary print:hidden " />
        </div>
      </label>
    )
  } else {
    return (
      <div className={classnames(className, 'flex items-center gap-2')}>
        {label && <div>{label}</div>}
        <Menu className={menuClassName}>
          <MenuButton
            as={Button}
            variant="text"
            className="gap-2 w-full"
            disabled={items.length === 0}
          >
            {({ open }) => (
              <>
                <div className={twMerge(' max-w-[200px] truncate', underline ? 'border-b' : '')}>
                  {value ? (renderItem ? renderItem(value) : value) : placeholder}
                </div>
                <TriangleDownIcon
                  className={classnames('text-xs print:hidden ml-auto', open ? '-rotate-180' : '')}
                />
              </>
            )}
          </MenuButton>

          <MenuItems anchor={anchor || 'bottom'} className={twMerge('p-1  w-52', itemsClassName)}>
            {placeholder && (
              <MenuItem>
                {({ focus }) => (
                  <Button
                    onClick={() => onChange?.()}
                    className="justify-start w-full h-auto px-2 py-1 text-left text-default"
                    size="sm"
                    variant={focus ? 'light' : 'none'}
                  >
                    {placeholder}
                  </Button>
                )}
              </MenuItem>
            )}
            {items.map((item) => (
              <MenuItem key={item}>
                {({ focus }) => (
                  <Button
                    onClick={() => onChange?.(item)}
                    className="justify-start w-full h-auto px-2 py-1 text-left text-default"
                    size="sm"
                    disabled={value === item}
                    variant={focus || item === value ? 'light' : 'none'}
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
