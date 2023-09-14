import { Separator } from '@admin/components/Separator'
import { Avatar } from './DelegateView.Avatar'
import { Fields } from './DelegateView.Fields'
import { Location } from './DelegateView.Location'
import { documentsSchema } from '../../service/schema'
import { FileFieldView } from '@admin/components/FileField/FileField'

interface IDelegateViewProps {
  item: IDelegate
}

export function DelegateView({ item }: IDelegateViewProps) {
  return (
    <>
      <div className="flex items-start gap-9">
        <Avatar item={item} />
        <div className="flex-grow">
          <div className="text-2xl font-bold mb-6">
            Карточка представителя судейского состава <br /> (ID №{' '}
            <span className="text-primary">{item.id}</span> )
          </div>
          <Fields item={item} />
        </div>
      </div>

      <Separator />
      <Location item={item} />
      <Separator />

      <div className="mb-5 text-lg font-semibold">Файлы и документы</div>
      {Object.entries(documentsSchema)
        ?.filter(
          ([key, schema]) => schema.required || item.documents?.[key as DelegateDocName]?.length
        )
        .map(([key, schema]) => (
          <FileFieldView
            key={key}
            schema={schema}
            docs={item.documents?.[key as DelegateDocName] || []}
          ></FileFieldView>
        ))}
    </>
  )
}
