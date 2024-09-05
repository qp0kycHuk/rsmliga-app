import { Fields } from './ProtocolEdit.Fields/Fields'
import { useProtocolEditContext } from './ProtocolEdit.Context'
import { Team } from './ProtocolEdit.Fields/Fields.Team'
import { Judge } from './ProtocolEdit.Fields/Judge'
import { Info } from './ProtocolEdit.Fields/Info'
import { TeamTable } from './ProtocolEdit.TeamTable'
import { Warning } from './ProtocolEdit.Remarks/Warning'
import { Trauma } from './ProtocolEdit.Remarks/Trauma'
import { Comment } from './ProtocolEdit.Fields/Comment'
import { Button } from '@features/ui'
import { PrintIcon } from '@assets/icons/fill'

export function ProtocolEditForm() {
  const { submit, loading, onCancel } = useProtocolEditContext()

  return (
    <form onSubmit={submit}>
      <div className="text-center text-2xl font-semibold mb-6">Протокол</div>
      <Fields />
      <div className="grid grid-cols-2 print:grid-cols-1 gap-8 mt-8">
        <Team name="team_1_info" label="Команда 1" />
        <Team name="team_2_info" label="Команда 2" />
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <Judge />
        <Judge name="delegate_id" label="Делегат" />
        <Judge name="helper_1_id" label="Помощник судьи 1" />
        <Judge name="helper_2_id" label="Помощник судьи 2" />
      </div>

      <div className="mt-8"></div>
      <Info />

      <div className="grid grid-cols-2 print:grid-cols-1 gap-6 mt-7 break-inside-avoid-page">
        <div>
          <div className="font-semibold mb-4">Команда 1</div>
          <TeamTable name="team_1_info" />
        </div>
        <div>
          <div className="font-semibold mb-4">Команда 2</div>
          <TeamTable name="team_2_info" />
        </div>
      </div>

      <div className="mt-8">
        <div className="font-semibold mb-4">Предупреждения</div>
        <Warning warningsKey="warnings" />
      </div>

      <div className="mt-8">
        <div className="font-semibold mb-4">Удаления</div>
        <Warning warningsKey="deletes" />
      </div>

      <div className="mt-8">
        <div className="font-semibold mb-4">Травматические случаи</div>
        <Trauma traumaKey="trauma" />
      </div>
      <div className="mt-8">
        <Comment />
      </div>

      <div className="text-xl font-semibold mt-10 mb-7">Протокол заполнен верно</div>
      <div className="flex gap-4 mt-7 print:hidden">
        <Button type="submit" className="px-10" disabled={loading}>
          Отправить
        </Button>
        <Button variant="light" className="px-10" disabled={loading} onClick={onCancel}>
          Закрыть
        </Button>
        <Button
          variant="contur"
          className="gap-2 px-10 ml-auto"
          onClick={() => window.print()}
          disabled={loading}
        >
          <PrintIcon />
          Печать
        </Button>
      </div>
    </form>
  )
}
