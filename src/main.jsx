import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './componet/Layout/Main';
import Home from './componet/Home/Home';
import About from './componet/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children : [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch("jobdetails.json")

      },
      {
        path:'about/:ID',
        element: <About></About>,
        loader: ({params}) => fetch("/jobdetails.json")
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
