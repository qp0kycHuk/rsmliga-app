import { useUserAccess } from '@admin/hooks/useUserAccess'
import { adminEditGroups } from '@admin/views/Report/const'
import { useReportStatus } from '@admin/views/Report/hooks/useReportStatus'
import { REPORTS_KEY, upsertReport } from '@admin/views/Report/service/api'
import { CircleCheckIcon, CircleCrossIcon } from '@assets/icons/fill'
import { Tooltip, Button } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { toast } from '@lib/Toast'
import { useQueryClient } from 'react-query'

export function Buttons({ item }: IProps) {
  const queryClient = useQueryClient()
  const { isAccess: isAdminAccess } = useUserAccess(adminEditGroups)
  const { data: statusesData, isStatusChecked, isStatusDeny, isStatusNone } = useReportStatus(item)
  const [loading, , loadingStart, loadingEnd] = useToggle(false)

  const checkedId = statusesData?.items.find(({ XML_ID }) => XML_ID == 'checked')?.ID
  const denyId = statusesData?.items.find(({ XML_ID }) => XML_ID == 'deny')?.ID

  function accept() {
    update(checkedId)
  }

  function deny() {
    update(denyId)
  }

  async function update(statusId?: EntityId) {
    loadingStart()
    await upsertReport({
      ...item,
      newStatus: statusId as string,
    })
    loadingEnd()
    toast.info('Статус обновлен')
    queryClient.invalidateQueries(REPORTS_KEY)
  }

  if (!isAdminAccess) return null
  if (isStatusNone) return null

  return (
    <div className="flex gap-1 md:gap-3">
      <Tooltip content="Принять">
        <Button
          icon
          color="green"
          variant="light"
          onClick={!isStatusChecked ? accept : null}
          disabled={loading || isStatusChecked}
          className="max-md:btn-sm"
        >
          <CircleCheckIcon className="text-2xl md:text-3xl" />
        </Button>
      </Tooltip>
      <Tooltip content="Отклонить">
        <Button
          icon
          color="red"
          variant="light"
          onClick={!isStatusDeny ? deny : null}
          disabled={loading || isStatusDeny}
          className="max-md:btn-sm"
        >
          <CircleCrossIcon className="text-2xl md:text-3xl" />
        </Button>
      </Tooltip>
    </div>
  )
}

interface IProps {
  item: IReport
}
