import classes from './Content.module.scss'

interface IContentProps extends React.PropsWithChildren {}

export function Content({ children }: IContentProps) {
  return <section className={classes.content}>{children}</section>
}
