import { Suspense } from 'react'
import { PagePreloader } from '@components/PagePreloader/PagePreloader'
import { Header } from './Header/Header'
import { SideBar } from './SideBar/SideBar'
import { Content } from './Content/Content'
import { PrivateOutlet } from '@layouts/PrivateOutlet'
import { SidebarContextProvider } from './SideBar/SidebarContext'

export function AdminLayout() {
  return (
    <div className="flex-grow flex flex-col">
      <SidebarContextProvider>
        <Header />
        <SideBar />
        <Content>
          <Suspense fallback={<PagePreloader />}>
            <PrivateOutlet />
          </Suspense>
        </Content>
      </SidebarContextProvider>
    </div>
  )
}
