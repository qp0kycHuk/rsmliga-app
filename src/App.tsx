import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes } from './admin'
import { ToastContainer } from '@lib/Toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { createPortal } from 'react-dom'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AdminRoutes />
      </BrowserRouter>

      {createPortal(<ToastContainer />, document.body)}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
