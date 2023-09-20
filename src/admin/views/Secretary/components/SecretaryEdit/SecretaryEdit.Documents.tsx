import { documentsSchema } from '../../service/schema'
import { useSecretaryEditContext } from './SecretaryEdit.Context'
import { FileFieldSingle } from '@admin/components/FileField/FileFieldSingle'

export function Documents() {
  const { item, update } = useSecretaryEditContext()

  return (
    <>
      <div className="mb-5 text-lg font-semibold">Документы</div>
      {Object.entries(documentsSchema)
        ?.filter(([, schema]) => schema.required)
        .map(([key, schema]) => (
          <FileFieldSingle
            onChange={(file) => {
              update({
                documents: {
                  ...(item.documents as Record<SecretaryDocName, IFile>),
                  [key]: file,
                },
              })
            }}
            key={key}
            schema={schema}
            doc={item.documents?.[key as SecretaryDocName] || null}
          ></FileFieldSingle>
        ))}
    </>
  )
}
