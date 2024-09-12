import React, { useEffect } from 'react'
import { classNameJoin } from '@utils/helpers/classNameJoin'
import { Button, Input } from '@features/ui'
import { CrossIcon, SearchIcon } from '@assets/icons/fill'

export function Search({ value, onChange, className, placeholder = 'Поиск' }: Props) {
  const inputRef = React.createRef<HTMLInputElement>()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value
    }
  }, [value])

  function searchSubmitHandler(event: React.FormEvent) {
    event.preventDefault()
    onChange(inputRef.current?.value || '')
  }

  function searchClearHandler() {
    onChange('')

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <form
      className={classNameJoin('relative print:hidden', className)}
      onSubmit={searchSubmitHandler}
    >
      <Input
        required
        placeholder={placeholder}
        className="w-full appearance-none"
        size="sm"
        defaultValue={value}
        ref={inputRef}
        type="search"
      />
      <div className="flex items-center gap-1 absolute right-1 top-1">
        {value.length > 0 && (
          <Button color="red" icon variant="none" size="xs" onClick={searchClearHandler}>
            <CrossIcon />
          </Button>
        )}
        <Button type="submit" className="" icon variant="none" size="xs">
          <SearchIcon />
        </Button>
      </div>
    </form>
  )
}

type Props = PropsWithClassName & {
  value: string
  onChange(newValue: string): void
  placeholder?: string
}
