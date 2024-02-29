import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import History from './Components/History';
import { ApiDescription } from './Components';
import Support from './Components/Support';
import GetReport from './Components/GetReport';
import Payment from './Components/Payment';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='dashboard/payment' element={<Payment/>} />
      <Route path='dashboard/get-report' element={<GetReport />} />
      <Route path='dashboard/history' element={<History />} />
      <Route path='dashboard/my-api' element={<ApiDescription />} />
      <Route path='dashboard/contact-us' element={<Support />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
