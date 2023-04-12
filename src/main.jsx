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
import Statistics from './componet/Statistics/Statistics';
import Errorpage from './componet/Errorpage/Errorpage';
import Blog from './componet/Blog/Blog';
import Applicatoinjob from './componet/Applicatoinjob/Applicatoinjob';
import Applicatoin from './componet/Applicatoin/Applicatoin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children : [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch("/jobdetails.json")

      },
      {
        path:'about/:ID',
        element: <About></About>,
        loader: ({params}) => fetch("/jobdetails.json")
      },
      {
        path:'Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'Blog',
        element: <Blog></Blog>
      },
      {
        path: 'appliedJobs',
        element:<Applicatoin></Applicatoin>,
        loader:()=> fetch("/jobdetails.json")
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
