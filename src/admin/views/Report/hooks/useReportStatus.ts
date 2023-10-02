import { useFetchReportStatuses } from '../service/statuses'

export function useReportStatus(item: IReport) {
  const { data } = useFetchReportStatuses()
  const noneId = data?.items.find((status) => status.XML_ID == 'none')?.ID
  const checkingId = data?.items.find(({ XML_ID }) => XML_ID == 'checking')?.ID
  const checkedId = data?.items.find(({ XML_ID }) => XML_ID == 'checked')?.ID

  const isStatusNone = !item.status_id || item.status_id == noneId
  const isStatusEditable = item.status_id != checkingId && item.status_id != checkedId

  return {
    data,
    isStatusNone,
    isStatusEditable,
  }
}
