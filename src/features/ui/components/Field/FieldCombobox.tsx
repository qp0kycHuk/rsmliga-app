import { ComponentProps, Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { Field } from './Field'
import { Button } from '../Button'
import { FieldWrapper } from './FieldWrapper'
import layouts from 'convert-layout'
import { classNameJoin } from '@utils/helpers/classNameJoin'

export function FieldCombobox({ options, inputProps, ...props }: IComboboxProps) {
  const [selected, setSelected] = useState<string | null>()
  const [query, setQuery] = useState('')

  function filterOptions(option: string) {
    const optionText = option.toLowerCase().replace(/\s+/g, '')
    const searchedText = query.toLowerCase().replace(/\s+/g, '')
    return (
      optionText.includes(searchedText) ||
      optionText.includes(layouts.ru.fromEn(searchedText)) ||
      optionText.includes(layouts.ru.toEn(searchedText))
    )
  }

  const filteredOptions = query === '' ? options : options.filter(filterOptions)

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
    inputProps?.onChange?.(event)
  }

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1 z-20">
        <FieldWrapper
          {...props}
          input={
            <Combobox.Input
              placeholder=""
              title={selected || ''}
              {...inputProps}
              onChange={changeHandler}
              className={classNameJoin(
                'input w-full border-none focus:shadow-none truncate',
                inputProps?.className
              )}
            />
          }
        ></FieldWrapper>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-2"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {filteredOptions.length === 0 && query !== '' ? (
              <div className="py-2 px-4">Ничего не найдено</div>
            ) : (
              filteredOptions.map((option) => (
                <Combobox.Option key={option} value={option}>
                  {({ active }) => (
                    <Button
                      variant={active ? 'light' : 'none'}
                      key={option}
                      className="text-left  h-auto rounded-none text-sm px-4 py-2 justify-start"
                    >
                      {option}
                    </Button>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}

interface IComboboxProps extends ComponentProps<typeof Field> {
  options: string[]
}
