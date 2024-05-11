import React, {useState} from 'react'
import sidebarContext from './sidebarContext'

function SideBarState(props) {
    const [openSetting, setOpenSetting ] = useState(false)
  return (
    <sidebarContext.Provider value={{openSetting,setOpenSetting}}>
      {props.children}
    </sidebarContext.Provider>
  )
}

export default SideBarState
