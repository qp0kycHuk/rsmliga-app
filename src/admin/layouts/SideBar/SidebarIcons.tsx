import {
  BallIcon,
  ChartIcon,
  CircleIcon,
  CollectionIcon,
  FileDocIcon,
  FileFolderIcon,
  HomeIcon,
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
  folder: FileFolderIcon,
  collection: CollectionIcon,
  handbook: HomeIcon,
}
