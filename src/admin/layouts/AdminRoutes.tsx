import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'
import { DelegateAnalitic, DelegateList, Report } from '../pages'
import { routes as delegateRoutes } from '../views/Delegate/const'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/" element={<AdminLayout />}>
        <Route path="report" element={<Report />}></Route>
        <Route path={delegateRoutes.list} element={<DelegateList />}></Route>
        <Route path={delegateRoutes.analitic} element={<DelegateAnalitic />}></Route>
      </Route>
    </Routes>
  )
}
