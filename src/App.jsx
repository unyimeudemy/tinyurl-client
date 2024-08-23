import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
  BrowserRouter 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Logo from './pages/Logo'
import AddSpam from './pages/AddSpam'
import TargetPage from './pages/TargetPage'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="create" element={<Logo />} />
      <Route path="add-spam-url" element={<AddSpam />} />
      <Route path="*" element={<TargetPage />} />
    </Route>
  )
)

function App() {
  return (
    <BrowserRouter basename="/">
        <RouterProvider router={router} />
    </BrowserRouter>
    
  )
}

export default App
