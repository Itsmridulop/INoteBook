import React, { useContext, useState } from 'react'
import Sidebar from './SideBar';
import SideBarState from '../context/SiderBarState';
import AddNote from './AddNote';

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAddOpen, setIsAddOpen] = useState(false)
  const openSiderBar = () => {
    setIsOpen(true)
  }
  const openAddNote = () => {
    setIsAddOpen(true)
  }
  console.log(isAddOpen)
  return (
    <>
      <div className='flex justify-end'>
        <button onClick={openSiderBar}><i className="fa-solid fa-user p-4 rounded-full m-5" style={{ backgroundColor: "#454545" }}></i></button>
      </div>
      <div className='p-24'>
        <h3>Add Notes</h3>
      </div>
      <div className='flex justify-end'>
        <button onClick={openAddNote}><i className="fa-solid fa-plus p-8"/></button>
      </div>
      {isOpen ? <SideBarState><Sidebar closeSiderBar={setIsOpen}/></SideBarState> : null}
      {isAddOpen ? <AddNote closeSiderBar={setIsAddOpen}/> : null}
    </>
  )
}

export default Header
