import React from 'react'
import Navbar from '../components/Navbar'
import TabNavBar from '../components/TabNavBar'
import { Outlet, useLocation } from 'react-router-dom'

function Layout( ) {
  const location = useLocation()
  const pathName = location.pathname

  return (
    <div>
        <Navbar/>
        <main className='min-h-[70vh] '> {<Outlet/>} 
        </main>
        {pathName!=="/" && <TabNavBar/>}

        
    </div>
  )
}

export default Layout