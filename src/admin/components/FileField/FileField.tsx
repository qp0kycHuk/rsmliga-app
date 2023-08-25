import { FileAddIcon } from '@assets/icons/fill'
import { Button, Input } from '@features/ui'

interface IFileFieldProps {
  item: IDoc
  onChange?: (files: Array<File | string>) => void
}

export function FileField({ item, onChange }: IFileFieldProps) {
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const files = [...item.files, ...Array.from(event.target.files || [])]
    onChange?.(files)
  }

  if (item.required) {
    return (
      <div className="flex items-center mb-4">
        <FileAddIcon className="mr-2 text-xl text-primary" />
        <div className="underline underline-offset-4">{item.title}</div>
        {item.files?.length > 0 ? (
          <Button variant="text" className="ml-4 border-b">
            Удалить
          </Button>
        ) : (
          <Button as="label" variant="text" className="ml-4 border-b cursor-pointer">
            <input onChange={changeHandler} type="file" accept="application/*" hidden />
            Загрузить
          </Button>
        )}
      </div>
    )
  } else {
    return (
      <>
        {item.files.map((_, index) => (
          <div className="flex items-center mb-4" key={index}>
            <FileAddIcon className="mr-2 text-xl text-primary" />
            <div className="underline underline-offset-4">
              {item.title} (Файл{' '}
              <Input
                className="inline w-8 px-1 text-sm text-center"
                size="xs"
                defaultValue={index + 1}
              />
              )
            </div>
            <Button
              variant="text"
              className="ml-4 border-b"
              onClick={() => onChange?.(item.files.filter((_, i) => i !== index))}
            >
              Удалить
            </Button>
          </div>
        ))}
      </>
    )
  }
}
