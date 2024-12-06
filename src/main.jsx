import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './components/sections/AboutMe.jsx'
import CodePortfolio from './components/sections/CodePortfolio.jsx'
import DesignPortfolio from './components/sections/DesignPortfolio.jsx'
import ExtraInfo from './components/sections/ExtraInfo.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AboutMe/>
      },
      {
        path: "/code",
        element: <CodePortfolio />
      },
      {
        path: "/design",
        element: <DesignPortfolio />
      } ,
      {
        path: "/info",
        element: <ExtraInfo />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
)
