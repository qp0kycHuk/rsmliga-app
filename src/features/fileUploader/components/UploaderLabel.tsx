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

  return (
    <label
      className={classNames(
        'relative z-10 flex h-32 transition cursor-pointer bg-primary bg-opacity-10 hover:bg-opacity-20  flex-col items-center justify-center',
        uploader.rounded ? 'rounded-full w-32' : 'rounded-xl w-48'
      )}
    >
      <input
        type="file"
        multiple={uploader.multiple}
        accept={uploader.extention.accept}
        onChange={changeHandler}
        className="absolute inset-0 opacity-0 pointer-events-none"
      />

      <CameraIcon className="text-5xl text-primary" />
      <div className="text-lg text-primary">Добавить</div>
    </label>
  )
}
