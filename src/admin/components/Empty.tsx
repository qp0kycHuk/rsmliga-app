interface IEmptyProps {
  title?: string
  className?: string
}

export function Empty({ title = 'Здесь ничего нет', className }: IEmptyProps) {
  return (
    <div className={className}>
      <img src="/img/travolta.png" alt="" className="mx-auto mt-10" />
      <div className="mt-10 font-semibold text-center">{title}</div>
    </div>
  )
}
