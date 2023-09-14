import { Suspense } from 'react'
import { PagePreloader } from '@components/PagePreloader/PagePreloader'
import { Header } from './Header/Header'
import { SideBar } from './SideBar/SideBar'
import { Content } from './Content/Content'
import { PrivateOutlet } from '@layouts/PrivateOutlet'

export function AdminLayout() {
  return (
    <div className="flex-grow flex flex-col">
      <Header />
      <SideBar />
      <Content>
        <Suspense fallback={<PagePreloader />}>
          <PrivateOutlet />
        </Suspense>
      </Content>
    </div>
  )
}
