import { ChangeEvent } from 'react'
import { CameraIcon } from '@assets/icons/fill'
// import { Button } from '@features/ui'
import classNames from 'classnames'

interface IUploaderLabelProps {
  uploader: IUplodaer
}

export function UploaderLabel({ uploader }: IUploaderLabelProps) {
  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    uploader.addItems(Array.from(event.target.files || []))
  }

  if (uploader.max && uploader.fileItems.length >= uploader.max) {
    return null
  }

  return (
    <label
      className={classNames(
        uploader.rounded ? 'rounded-full w-24 sm:w-32' : 'rounded-xl w-32 sm:w-48',
        'relative z-10 flex h-24 sm:h-32 transition cursor-pointer bg-primary bg-opacity-10 hover:bg-opacity-20  flex-col items-center justify-center'
      )}
    >
      <input
        type="file"
        multiple={uploader.multiple}
        accept={uploader.extention.accept}
        onChange={changeHandler}
        className="absolute inset-0 opacity-0 pointer-events-none"
      />
      {uploader.label ? (
        uploader.label
      ) : (
        <>
          <CameraIcon className="text-3xl sm:text-5xl text-primary" />
          <div className="sm:text-lg text-primary dark:text-white">Добавить</div>
        </>
      )}
    </label>
  )
}
