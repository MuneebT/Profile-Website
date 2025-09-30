import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavigationBar from './NavigationBar.jsx'
import Home from './Home.jsx'
import Portfolio from './Portfolio.jsx'
import Resume from './Resume.jsx'
import Contact from './Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><NavigationBar /><Home /></>
  },
  {
    path: "/portfolio",
    element: <><NavigationBar /><Portfolio /></>
  },
  {
    path: "/resume",
    element: <><NavigationBar /><Resume /></>   
  },
  {
    path: "/contact",
    element: <><NavigationBar /><Contact /></>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
  
)
