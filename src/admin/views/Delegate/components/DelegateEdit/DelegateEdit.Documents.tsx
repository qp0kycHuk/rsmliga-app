import { FileField } from '@admin/components/FileField/FileField'
import { useDelegateEditContext } from './DelegateEdit.Context'
import { documentsSchema } from '../../service/schema'

export function Documents() {
  const { delegate, update } = useDelegateEditContext()

  return (
    <>
      <div className="mb-5 text-lg font-semibold">Документы</div>
      {Object.entries(documentsSchema)
        ?.filter(([key, schema]) => schema.required || delegate.documents?.[key]?.length)
        .map(([key, schema]) => (
          <FileField
            onChange={(files) => {
              update({
                documents: {
                  ...delegate.documents,
                  [key]: files,
                },
              })
            }}
            key={key}
            schema={schema}
            docs={delegate.documents?.[key] || []}
          ></FileField>
        ))}
    </>
  )
}
