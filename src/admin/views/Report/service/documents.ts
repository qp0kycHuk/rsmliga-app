import { createFetchEntitiesService } from '@admin/service/api'

export const KEY = 'report-documents'

export const [fetchReportDocuments, useFetchReportDocuments] =
  createFetchEntitiesService<IReportDocument>('/get_fields.php', KEY, {
    action: 'get_doc_list',
  })
