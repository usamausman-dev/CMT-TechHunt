import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from './components/Sidebar';
export default function App() {
  const user = true

  return (
    <div>

      {
        !user ?
          <Routes>
            <Route path='/' element="Ecommerce Login" />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          :

          <div className='flex' >
            <Sidebar />

            <div className='p-7 flex-1 h-screen'>
              Loggined

              {/* <Routes>
                <Route path='/' element="Ecommerce hello" />
                <Route path='/dashboard' element={(<Dashboard />)} />
                <Route path='/inbox' element={(<Inbox />)} />
                <Route path='/accounts' element={(<Accounts />)} />
                <Route path='/schedule' element={(<Schedule />)} />
                <Route path='/search' element={(<Search />)} />
                <Route path='/analytics' element={(<Analytics />)} />
                <Route path='/files' element={(<Files />)} />
                <Route path='/setting' element={(<Settings />)} />
              </Routes> */}
              {/* <h1 className='p-7 text-2xl font-semibold flex-1 h-screen'>Hello U</h1> */}
            </div>
          </div>
      }

    </div>
  )
}