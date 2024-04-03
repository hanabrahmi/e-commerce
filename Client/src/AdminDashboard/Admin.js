import React from 'react'
import './Admin.css';
import "./App.css"
import Sidebar from './Sidebar'
import MainDash from './MainDash/MainDash'
import RightSide from './RightSide/RightSide'
function Admin() {
  return (
    <div className="App">
    <div className='AppGlass'>
        <Sidebar/>
        <MainDash/>
        <RightSide/>
    </div>
    </div>
  )
}

export default Admin