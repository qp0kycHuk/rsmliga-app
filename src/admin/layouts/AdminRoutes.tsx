import { Route, Routes } from 'react-router-dom'
import { AdminLayout } from './AdminLayout'
import { Report } from '../pages'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/" element={<AdminLayout />}>
        <Route path="report" element={<Report />}></Route>
      </Route>
    </Routes>
  )
}
