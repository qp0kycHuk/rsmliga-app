import React from 'react'
import { Button, Input } from '@features/ui'
import { useDelegateListContext } from './List.Context'
import { CrossIcon, SearchIcon } from '@assets/icons/fill'

export function Search() {
  const { changeSearchQuery, searchQuery } = useDelegateListContext()
  const inputRef = React.createRef<HTMLInputElement>()

  function searchSubmitHandler(event: React.FormEvent) {
    event.preventDefault()
    changeSearchQuery(inputRef.current?.value || '')
  }

  function searchClearHandler() {
    changeSearchQuery('')

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <form className="relative w-64 ml-auto" onSubmit={searchSubmitHandler}>
      <Input
        required
        placeholder="Поиск по фамилии"
        className="w-full"
        size="sm"
        defaultValue={searchQuery}
        ref={inputRef}
      />
      <div className="flex items-center gap-1 absolute right-1 top-1">
        {searchQuery.length > 0 && (
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
