import { CameraIcon } from '@assets/icons/fill'
import { SERVER_URL } from '@utils/index'

interface IAvatarProps {
  item: ISecretary
}

export function Avatar({ item }: IAvatarProps) {
  return (
    <div className="relative">
      <div className="w-60 h-60 rounded-full flex bg-primary bg-opacity-20  overflow-hidden">
        {item?.image_src ? (
          <img
            className="w-full h-full object-cover"
            src={(item.imageFile ? '' : SERVER_URL) + item?.image_src}
          />
        ) : item.surname ? (
          <div className="m-auto text-primary text-7xl font-semibold">
            {item.surname?.[0].toUpperCase()}
          </div>
        ) : (
          <CameraIcon className="m-auto text-primary text-7xl" />
        )}
      </div>
    </div>
  )
}
