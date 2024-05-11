import React from 'react'
import ToggleButton from './Button'

function Settings({closeSetting}) {
    const close = () => {
        closeSetting(false)
    }
    return (
        <div className='fixed w-full h-full top-0 w-97 flex justify-center items-center bg-black bg-opacity-60'>
            <button className="flex fixed top-0 left-0 p-6" onClick={close}><i className="fa-solid fa-x"></i></button>
            <div className='bg-black w-3/5 h-3/5 rounded-3xl flex p-8'>
                <div className='flex h-8 w-full justify-between'>
                    <span>Dark Mode</span>
                    <ToggleButton/>
                </div>
            </div>
        </div>
    )
}

export default Settings
