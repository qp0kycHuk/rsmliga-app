import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes } from './admin'

function App() {
  return (
    <>
      <BrowserRouter>
        <AdminRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
