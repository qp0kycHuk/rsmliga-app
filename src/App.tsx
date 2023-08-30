import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes } from './admin'
import { ToastContainer } from '@lib/Toast'

function App() {
  return (
    <>
      <BrowserRouter>
        <AdminRoutes />
      </BrowserRouter>

      <ToastContainer />
    </>
  )
}

export default App
