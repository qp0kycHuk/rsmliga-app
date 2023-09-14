import { Separator } from '@admin/components/Separator'
import { Avatar } from './DelegateView.Avatar'
import { Fields } from './DelegateView.Fields'
import { Location } from './DelegateView.Location'
import { documentsSchema } from '../../service/schema'
import { FileFieldView } from '@admin/components/FileField/FileField'
import { CircleCheckIcon } from '@assets/icons/fill'

interface IDelegateViewProps {
  item: IDelegate
}

export function DelegateView({ item }: IDelegateViewProps) {
  return (
    <>
      <div className="flex items-start gap-9">
        <Avatar item={item} />
        <div className="flex-grow">
          <div className="flex items-start">
            <div className="text-2xl font-bold mb-6">
              Карточка представителя судейского состава <br /> (ID №{' '}
              <span className="text-primary">{item.id}</span> )
            </div>
            <div className="ml-auto bg-gray-light rounded-full py-1 px-2 flex items-center gap-1 cursor-default">
              <CircleCheckIcon className="text-green" />

              <span className="text-sm opacity-80">
                {item.status ? 'Активирован' : 'Деактивирован'}
              </span>
            </div>
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
