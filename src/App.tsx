import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes } from './admin'
import { ToastContainer } from '@lib/Toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { createPortal } from 'react-dom'
import { ThemeContextProvider } from '@layouts/ThemeContext'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <BrowserRouter>
          <AdminRoutes />
        </BrowserRouter>

        {createPortal(<ToastContainer />, document.body)}
      </ThemeContextProvider>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App
