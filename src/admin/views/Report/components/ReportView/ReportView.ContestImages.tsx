import { Images } from './ReportView.Images'

interface IProps {
  item: IReport
}

export function ContestImages({ item }: IProps) {
  return (
    <Images item={item} keyOfImages="competition_photo">
      <div className="text-lg font-semibold mb-4">Фото с соревнований</div>
    </Images>
  )
}
