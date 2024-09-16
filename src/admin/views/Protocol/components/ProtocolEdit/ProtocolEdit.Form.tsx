import { Fields } from './ProtocolEdit.Fields/Fields'
import { useProtocolEditContext } from './ProtocolEdit.Context'
import { Team } from './ProtocolEdit.Fields/Fields.Team'
import { Judge } from './ProtocolEdit.Fields/Judge'
import { Info } from './ProtocolEdit.Fields/Info'
import { TeamTable } from './ProtocolEdit.TeamTable/TeamTable'
import { Remark } from './ProtocolEdit.Remarks/Remark'
import { Trauma } from './ProtocolEdit.Remarks/Trauma'
import { Comment } from './ProtocolEdit.Fields/Comment'
import { Button } from '@features/ui'
import { PrintIcon, TriangleDownIcon } from '@assets/icons/fill'
import { Achivement } from './ProtocolEdit.Remarks/Achivement'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Separator } from '@admin/components/Separator'

export function ProtocolEditForm() {
  const { submit, loading, onCancel } = useProtocolEditContext()

  return (
    <form onSubmit={submit}>
      <div className="text-center text-2xl font-semibold mb-6">Протокол</div>
      <Fields />
      <div className="grid lg:grid-cols-2 print:grid-cols-1 gap-8 mt-8 ">
        <div className="relative z-[2]">
          <Team name="team_1_info" label="Команда 1" />
        </div>
        <div className="relative z-[1]">
          <Team name="team_2_info" label="Команда 2" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <Judge />
        <Judge name="delegate_id" label="Делегат" />
        <Judge name="helper_1_id" label="Помощник судьи 1" />
        <Judge name="helper_2_id" label="Помощник судьи 2" />
      </div>

      <div className="mt-8"></div>
      <Info />

      <div className="grid lg:grid-cols-2 print:grid-cols-1 gap-6 mt-7 break-inside-avoid-page">
        <div>
          <div className="font-semibold mb-4">Команда 1</div>
          <TeamTable name="team_1_info" />
        </div>
        <div>
          <div className="font-semibold mb-4">Команда 2</div>
          <TeamTable name="team_2_info" />
        </div>
      </div>

      <Separator className="mb-0" />
      <Disclosure as="div">
        <DisclosureButton className="font-semibold flex items-center w-full hover:underline py-4 group">
          Предупреждения
          <TriangleDownIcon className="ml-auto group-data-[open]:rotate-180 text-xs opacity-40" />
        </DisclosureButton>
        <DisclosurePanel>
          <Remark name="warnings" />
        </DisclosurePanel>
      </Disclosure>
      <Separator className="my-0 mt-2" />
      <Disclosure as="div">
        <DisclosureButton className="font-semibold flex items-center w-full hover:underline py-4 group">
          Удаления
          <TriangleDownIcon className="ml-auto group-data-[open]:rotate-180 text-xs opacity-40" />
        </DisclosureButton>
        <DisclosurePanel>
          <Remark name="deletes" />
        </DisclosurePanel>
      </Disclosure>
      <Separator className="my-0 mt-2" />
      <Disclosure as="div">
        <DisclosureButton className="font-semibold flex items-center w-full hover:underline py-4 group">
          Травматические случаи
          <TriangleDownIcon className="ml-auto group-data-[open]:rotate-180 text-xs opacity-40" />
        </DisclosureButton>
        <DisclosurePanel>
          <Trauma traumaKey="trauma" />
        </DisclosurePanel>
      </Disclosure>
      <Separator className="my-0 mt-2" />
      <Disclosure as="div">
        <DisclosureButton className="font-semibold flex items-center w-full hover:underline py-4 group">
          Реализации
          <TriangleDownIcon className="ml-auto group-data-[open]:rotate-180 text-xs opacity-40" />
        </DisclosureButton>
        <DisclosurePanel>
          <Achivement name="realizations" />
        </DisclosurePanel>
      </Disclosure>
      <Separator className="my-0 mt-2" />
      <Disclosure as="div">
        <DisclosureButton className="font-semibold flex items-center w-full hover:underline py-4 group">
          Дроп-голы
          <TriangleDownIcon className="ml-auto group-data-[open]:rotate-180 text-xs opacity-40" />
        </DisclosureButton>
        <DisclosurePanel>
          <Achivement name="drop_goals" />
        </DisclosurePanel>
      </Disclosure>
      <Separator className="my-0 mt-2" />
      <Disclosure as="div">
        <DisclosureButton className="font-semibold flex items-center w-full hover:underline py-4 group">
          Штрафные удары
          <TriangleDownIcon className="ml-auto group-data-[open]:rotate-180 text-xs opacity-40" />
        </DisclosureButton>
        <DisclosurePanel>
          <Achivement name="penalties" />
        </DisclosurePanel>
      </Disclosure>

      <div className="mt-8">
        <Comment />
      </div>

      <div className="text-xl font-semibold mt-10 mb-7">Протокол заполнен верно</div>
      <div className="flex gap-4 mt-7 print:hidden max-sm:flex-col">
        <Button type="submit" className="px-10" disabled={loading}>
          Отправить
        </Button>
        <Button variant="light" className="px-10" disabled={loading} onClick={onCancel}>
          Закрыть
        </Button>
        <Button
          variant="contur"
          className="gap-2 px-10 sm:ml-auto"
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
