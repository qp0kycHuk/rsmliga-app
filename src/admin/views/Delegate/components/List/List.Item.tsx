import { Row, Cell } from '@admin/index'
import { SettingsIcon } from '@assets/icons/fill'
import { Button, Dialog } from '@features/ui'
import { useToggle } from '@hooks/useToggle'
import { Suspense, lazy } from 'react'
import { DelegateContests } from '../DelegateContests'
import { useFetchCities } from '@admin/service/cities'
import { useFetchCategories } from '../../service/categories'

const DelegateEdit = lazy(() =>
  import('../DelegateEdit/DelegateEdit').then((m) => ({ default: m.DelegateEdit }))
)

interface IListTableItemProps {
  item: IDelegate
}

export function ListItem({ item }: IListTableItemProps) {
  const [isEditDialogOpen, , openEditDialog, closeEditDialog] = useToggle(false)
  const [isContestsDialogOpen, , openContestsDialog, closeContestsDialog] = useToggle(false)

  const { data: citiesData } = useFetchCities()
  const { data: categoriesData } = useFetchCategories()

  return (
    <Row>
      <Cell className="text-sm text-center w-12">{item.number}</Cell>
      <Cell className="text-sm max-w-[90px] w-[90px] truncate">{item.id}</Cell>
      <Cell className="text-sm w-80">
        {item.surname} {item.name} {item.patronymic}
      </Cell>
      <Cell className="text-sm font-medium w-[128px] max-w-[128px]">
        <Button size="xs" onClick={openContestsDialog} className="w-full">
          Открыть
        </Button>
        <Dialog
          isOpen={isContestsDialogOpen}
          onClose={closeContestsDialog}
          className="max-w-4xl p-10"
        >
          <DelegateContests delegate={item} />
          <Button className="mt-6" onClick={closeContestsDialog}>
            Закрыть
          </Button>
        </Dialog>
      </Cell>
      <Cell className="text-sm ">{categoriesData?.entites[item.category]?.VALUE || '-'}</Cell>
      <Cell className="text-sm ">{citiesData?.entites[item.location]?.NAME || '-'}</Cell>
      <Cell className="text-sm ">{new Date(item.birthdate).toLocaleDateString()}</Cell>
      <Cell className="text-sm ">{item.matchesCount || '-'}</Cell>
      <Cell className="text-sm  w-max">
        <Button size={null} icon className="btn-[28px]" color="gray-light" onClick={openEditDialog}>
          <SettingsIcon className="text-primary text-lg" />
        </Button>

        <Dialog isOpen={isEditDialogOpen} onClose={closeEditDialog} className="container p-10">
          <Suspense fallback="Loading...">
            <DelegateEdit delegate={item} />
          </Suspense>
        </Dialog>
      </Cell>
    </Row>
  )
}
