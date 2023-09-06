import { Suspense } from 'react'
import { PagePreloader } from '@components/PagePreloader/PagePreloader'
import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import { SideBar } from './SideBar/SideBar'
import { Content } from './Content/Content'

export function AdminLayout() {
  return (
    <div className="flex-grow flex flex-col">
      <Header />
      <SideBar />
      <Content>
        <Suspense fallback={<PagePreloader />}>
          <Outlet />
        </Suspense>
      </Content>
    </div>
  )
}
