import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Sidebar, NavBar } from './components';
import { Project,PmDashboard, Accounts, Clients, Complaints, Dashboard, Finance, Hierarchy, HRM, Messages, NewLeads, ProjectManager, Projects, Settings, Team } from './Pages'

export default function App() {
  const user = true
  const role = 'admin'

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


            <div className='p-7 flex-1 h-screen overflow-y-scroll'>
              <NavBar />

              {

                role === 'admin' ?
                  (
                    <Routes>
                      <Route path='/' element={(<Dashboard />)} />
                      <Route path='/dashboard' element={(<Dashboard />)} />
                      <Route path='/project-manager' element={(<ProjectManager />)} />
                      <Route path='/hrm' element={(<HRM />)} />
                      <Route path='/projects' element={(<Projects />)} />
                      <Route path='/project/:projectId' element={(<Project />)} />
                      <Route path='/finance' element={(<Finance />)} />
                      <Route path='/accounts' element={(<Accounts />)} />
                      <Route path='/complaints' element={(<Complaints />)} />
                      <Route path='/team' element={(<Team />)} />
                      <Route path='/clients' element={(<Clients />)} />
                      <Route path='/new-leads' element={(<NewLeads />)} />
                      <Route path='/messages' element={(<Messages />)} />
                      <Route path='/hierarchy' element={(<Hierarchy />)} />
                      <Route path='/settings' element={(<Settings />)} />
                    </Routes>
                  )
                  :
                  (
                    <Routes>
                      <Route path='/' element={(<PmDashboard />)} />
                      <Route path='/dashboard' element={(<PmDashboard />)} />
                      <Route path='/projects' element={(<Projects />)} />
                      <Route path='/team' element={(<Team />)} />
                      <Route path='/settings' element={(<Settings />)} />
                    </Routes>
                  )
              }





            </div>


          </div>
      }

    </div>
  )
}