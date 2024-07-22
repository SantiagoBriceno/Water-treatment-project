import { createBrowserRouter } from 'react-router-dom'
import HeaderSidebar from '../components/partials/Header-sidebar'
import HomeView from '../views/Home.view'
import FacturacionView from '../views/Facturacion.view'
import ProductosView from '../views/Productos.view'
import ClientesView from '../views/Clientes.view'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderSidebar />,
    children: [
      {
        path: '/',
        element: <HomeView />
      },
      {
        path: '/facturacion',
        element: <FacturacionView />
      },
      {
        path: '/productos',
        element: <ProductosView />
      },
      {
        path: '/clientes',
        element: <ClientesView />
      }
    ]
  }
])
