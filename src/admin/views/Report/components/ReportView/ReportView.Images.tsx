import Fancybox from '@lib/Fancybox'
import { SERVER_URL } from '@utils/index'

interface IImagesProps extends React.PropsWithChildren {
  keyOfImages: IImagesKey
  item: IReport
}

export function Images({ children, keyOfImages, item }: IImagesProps) {
  return (
    <>
      {children}
      <Fancybox className="flex flex-wrap gap-3">
        {item?.[keyOfImages]?.map(({ id, fid, src, path }) => (
          <a
            href={(import.meta.env.PROD ? '' : SERVER_URL) + (src || path)}
            data-fancybox={keyOfImages}
            className="relative z-10 w-32 sm:w-48 block"
            key={fid || id}
          >
            <div className="relative w-full h-24 sm:h-32">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={(import.meta.env.PROD ? '' : SERVER_URL) + (src || path)}
                alt=""
              />
            </div>
          </a>
        ))}
      </Fancybox>
    </>
  )
}
