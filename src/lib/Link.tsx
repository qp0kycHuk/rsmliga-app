import React from 'react'
// export { Link } from 'react-router-dom'

type ILinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>
type LinkRef = React.ForwardedRef<HTMLAnchorElement>

export function LinkComponent(props: ILinkProps, ref: LinkRef) {
  return <a ref={ref} {...props} />
}

export const Link = React.forwardRef(LinkComponent)
