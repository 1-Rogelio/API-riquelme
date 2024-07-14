import React from 'react'
import ReactDOM from 'react-dom/client'

//-------------IMPORTAR COMPONENTE-------------
import Home from './components/Home.jsx';

// ------------React Router--------------
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//-------------Importamos el Layout------
import LayoutPublic from '../LayoutPublic.jsx'
import Characteres from './components/Characteres.jsx';
import Info from './components/Info.jsx';

//----------------RUTAS----------------
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/characters',
        element: <Characteres/>
      },
      {
        path: '/info',
        element: <Info/>
      }
    ] 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
