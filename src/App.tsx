import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes } from './admin'
import { ToastContainer } from '@lib/Toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AdminRoutes />
      </BrowserRouter>

      <ToastContainer />
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
