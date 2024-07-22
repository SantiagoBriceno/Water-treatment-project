import { createBrowserRouter } from 'react-router-dom'
import HeaderSidebar from '../components/partials/Header-sidebar'
import HomeView from '../views/Home.view'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderSidebar />,
    children: [
      {
        path: '/',
        element: <HomeView />
      }
    ]
  }
])
