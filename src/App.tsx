import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes } from './admin'
import { ToastContainer } from '@lib/Toast'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AdminRoutes />
      </BrowserRouter>

      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
