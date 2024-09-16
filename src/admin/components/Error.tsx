type Props = React.PropsWithChildren

export function Error({ children }: Props) {
  return <div className="bg-red/20 p-5 rounded-md text-red dark:text-white">{children}</div>
}
