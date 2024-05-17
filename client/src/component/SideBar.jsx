import React, {useState} from 'react';
import Settings from './Settings';

const Sidebar = ({closeSidebar, setLogout, handleDarkMode, darkMode}) => {
  const [openSetting, setOpenSetting ] = useState(false)
  const handlelogOut = () => {
    setLogout(false)
  }

  const close = () => {
    closeSidebar(false);
  };

  const handleOpenSetting = () => {
    setOpenSetting(true);
  };

  return (
    !openSetting ? (
      <div className={`fixed top-0 flex flex-col justify-between right-0 h-full w-64 ${darkMode ? 'bg-gray-900 text-white' : 'text-zinc-900 bg-gray-400'} z-50 ${true ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div>
          <div className="p-4">
            <h2 className="text-xl font-bold">Sidebar</h2>
            <ul className="mt-4">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <button className={`absolute top-4 right-4 ${darkMode ? 'text-white': 'text-black'}`} onClick={close}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className='mb-12 flex justify-end'>
          <button className={`mr-16 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-slate-500'} py-2 px-4`} onClick={handlelogOut}>LogOut</button>
          <i className="fa-solid fa-gear pr-6" onClick={handleOpenSetting}></i>
        </div>
      </div>
    ) : <Settings className="cursor-pointer"closeSetting={setOpenSetting} darkMode={darkMode} handleDarkMode={handleDarkMode}/>
  );
};

export default Sidebar;
