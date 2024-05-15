import React, { useContext, useState } from 'react'
import Sidebar from './SideBar';

function Header({openFunction, setLogOut}) {
  const [isOpen, setIsOpen] = useState(false)
  const openSiderBar = () => {
    setIsOpen(true)
  }
  const openAddNote = () => {
    openFunction(true)
  }
  return (
    <>
      <div className='flex justify-end'>
        <button onClick={openSiderBar}><i className="fa-solid fa-user p-4 rounded-full m-5" style={{ backgroundColor: "#454545" }}></i></button>
      </div>
      <div className='p-24'>
        <h3 className='text-2xl font-semibold'>Your Notes</h3>
      </div>
      <div className='flex justify-end'>
        <button onClick={openAddNote}><i className="fa-solid fa-plus p-8"/></button>
      </div>
      {isOpen ? <Sidebar setLogout={setLogOut} closeSiderBar={setIsOpen}/> : null}
    </>
  )
}

export default Header
