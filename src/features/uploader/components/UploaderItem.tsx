import { Button } from '@features/ui'
import { CrossIcon, FileDocIcon, ImageIcon } from '@assets/icons/fill'

interface IUpliaderItemProps {
  item: IFile
  extention?: IExtention
  update: (item: IFile, data: Partial<IFile>) => void
  remove: (item: IFile) => void
  rounded?: boolean
  sign?: boolean
}

export function UploaderItem({ item, extention, rounded, remove }: IUpliaderItemProps) {
  const isMedia = extention?.type === 'image' || extention?.type === 'video'

  return (
    <div className={`relative z-10 ${rounded ? 'w-32' : 'w-48'}`}>
      <div className="relative w-full h-32">
        {item.src && isMedia ? (
          <img
            className={`object-cover w-full h-full ${rounded ? 'rounded-full' : 'rounded-xl'}`}
            src={item.src}
            alt=""
          />
        ) : (
          <div
            className={`flex w-full h-full p-2 ${
              rounded ? 'rounded-full' : 'rounded-xl'
            } bg-primary bg-opacity-10`}
          >
            <div className="max-w-full m-auto">
              {isMedia ? (
                <ImageIcon className="text-3xl text-gray" />
              ) : (
                <div className="flex flex-col items-center">
                  <FileDocIcon className="mb-2 text-3xl text-gray" />
                  <div className="w-full text-xs text-center truncate">{item.name}</div>
                </div>
              )}
            </div>
          </div>
        )}
        <Button
          onClick={() => remove(item)}
          className="absolute rounded-full right-1 top-1"
          color="red"
          size="xs"
          variant="whitebg"
          icon
        >
          <CrossIcon />
        </Button>
      </div>
    </div>
  )
}
