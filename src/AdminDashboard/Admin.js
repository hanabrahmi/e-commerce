import React from 'react'
import './Admin.css';
import Sidebar from './Sidebar'
import MainDash from './MainDash/MainDash'
import RightSide from './RightSide/RightSide'
function Admin() {
  return (
    <div className=''>
        <Sidebar/>
        <MainDash/>
        <RightSide/>
    </div>
  )
}

export default Admin