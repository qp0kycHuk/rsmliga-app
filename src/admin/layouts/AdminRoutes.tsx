import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'
import { DelegateAnalitic, DelegateList, InstitutionList, Report, SecretaryList } from '../pages'
import { routes as delegateRoutes } from '../views/Delegate/const'
import { routes as secretaryRoutes } from '../views/Secretary/const'
import { routes as institutionRoutes } from '@admin/views/Institution/const'
// import { ProtocolDialog } from '@admin/views/Match/components/Protocol/Protocol.Dialog'

export function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/dashboard/" element={<AdminLayout />}>
          <Route path="reports" element={<Report />}></Route>
          <Route path={delegateRoutes.list} element={<DelegateList />}></Route>
          <Route path={delegateRoutes.analitic} element={<DelegateAnalitic />}></Route>
          <Route path={secretaryRoutes.list} element={<SecretaryList />}></Route>
          <Route path={institutionRoutes.list} element={<InstitutionList />}></Route>
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/dashboard/protocol/:id" element={<ProtocolDialog />} />
      </Routes> */}
    </>
  )
}
