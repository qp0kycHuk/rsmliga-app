import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'
import { DelegateAnalitic, DelegateList, Report, SecretaryList } from '../pages'
import { routes as delegateRoutes } from '../views/Delegate/const'
import { routes as secretaryRoutes } from '../views/Secretary/const'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/dashboard/" element={<AdminLayout />}>
        <Route path="report" element={<Report />}></Route>
        <Route path={delegateRoutes.list} element={<DelegateList />}></Route>
        <Route path={delegateRoutes.analitic} element={<DelegateAnalitic />}></Route>
        <Route path={secretaryRoutes.list} element={<SecretaryList />}></Route>
      </Route>
    </Routes>
  )
}
