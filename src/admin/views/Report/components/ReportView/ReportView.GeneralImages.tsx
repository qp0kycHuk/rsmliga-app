import { Images } from './ReportView.Images'

interface IProps {
  item: IReport
}

export function GeneralImages({ item }: IProps) {
  return (
    <Images item={item} keyOfImages="group_photos">
      <div className="text-lg font-semibold mb-4">Общее фото</div>
    </Images>
  )
}
