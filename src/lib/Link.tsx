type ILinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export function Link(props: ILinkProps) {
  return <a {...props} />
}
