import {
  BallIcon,
  ChartIcon,
  CircleIcon,
  FileDocIcon,
  MenuAltIcon,
  PlayingRugbyIcon,
  UserGroupIcon,
  WhistleIcon,
} from '@assets/icons/fill'

export const icons: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  doc: FileDocIcon,
  ['user-group']: UserGroupIcon,
  contest: PlayingRugbyIcon,
  ball: BallIcon,
  rating: ChartIcon,
  ['menu-1']: MenuAltIcon,
  wistle: WhistleIcon,
  sub: CircleIcon,
}
