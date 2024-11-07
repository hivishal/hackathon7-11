import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Courses from './pages/Courses.tsx'
import Internship from './pages/Internship.tsx'
import Products from './pages/Products.tsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/courses',
    element: <Courses/>
  },
  {
    path: '/internships',
    element: <Internship/>
  },
  {
    path: '/products',
    element: <Products/>
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
