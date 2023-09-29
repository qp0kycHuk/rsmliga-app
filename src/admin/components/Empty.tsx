interface IEmptyProps {
  title?: string
  className?: string
}

export function Empty({ title = 'Здесь ничего нет', className }: IEmptyProps) {
  return (
    <div className={className}>
      <div className="ratio ratio-1/1 w-96 max-w-full relative mx-auto mt-10">
        <img
          src={import.meta.env.DEV ? '/img/travolta.gif' : '/app/img/travolta.png'}
          alt=""
          className="absolute left-0 top-0 w-full h-full object-contain"
        />
      </div>

      <div className="mt-10 font-semibold text-center">{title}</div>
    </div>
  )
}
