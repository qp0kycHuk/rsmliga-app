import { CrossIcon, SearchIcon } from '@assets/icons/fill'
import { Button, Input } from '@features/ui'
import classNames from 'classnames'
import React, { useEffect } from 'react'

interface ISearchProps {
  value: string
  onChange(newValue: string): void
  className?: string
  placeholder?: string
}

export function Search({ value, onChange, className, placeholder = 'Поиск' }: ISearchProps) {
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
    <form className={classNames(className, 'relative')} onSubmit={searchSubmitHandler}>
      <Input
        required
        placeholder={placeholder}
        className="w-full"
        size="sm"
        defaultValue={value}
        ref={inputRef}
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
