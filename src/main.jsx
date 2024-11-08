import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './conmponents/layouts/Main';
import Home from './conmponents/Home/Home';
import Login from './conmponents/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: 'login',
      element: <Login></Login>,
    }
  ]
},
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
