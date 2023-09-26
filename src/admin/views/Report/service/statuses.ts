import { createFetchEntitiesService } from '@admin/service/api'

export const KEY = 'report-statuses'

export const [fetchReportStatuses, useFetchReportStatuses] =
  createFetchEntitiesService<IReportStatus>('/get_fields.php', KEY, {
    action: 'reports_status',
  })
