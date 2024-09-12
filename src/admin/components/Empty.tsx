export function Empty({ title = 'Здесь ничего нет', className }: Props) {
  return (
    <div className={className}>
      <div className="ratio ratio-1/1 w-96 max-w-full relative mx-auto mt-10">
        <img
          src={import.meta.env.DEV ? '/img/travolta.gif' : '/app/img/travolta.png'}
          className="absolute left-0 top-0 w-full h-full object-contain"
          alt=""
        />
      </div>

      <div className="mt-10 font-semibold text-center">{title}</div>
    </div>
  )
}

type Props = PropsWithClassName & {
  title?: string
}
