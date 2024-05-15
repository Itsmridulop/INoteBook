import React, {useState} from 'react';
// import sidebarContext from '../context/sidebarContext';
import Settings from './Settings';

const Sidebar = ({closeSiderBar, setLogout}) => {
  const [openSetting, setOpenSetting ] = useState(false)
  const handlelogOut = () => {
    setLogout(false)
  }

  const close = () => {
    closeSiderBar(false);
  };

  const handleOpenSetting = () => {
    setOpenSetting(true);
  };

  return (
    !openSetting ? (
      <div className={`fixed top-0 flex flex-col justify-between right-0 h-full w-64 bg-gray-900 text-white z-50 ${true ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div>
          <div className="p-4">
            <h2 className="text-xl font-bold">Sidebar</h2>
            <ul className="mt-4">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <button className="absolute top-4 right-4 text-white" onClick={close}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className='mb-12 flex justify-end'>
          <button className='mr-16 rounded-lg bg-slate-800 py-2 px-4' onClick={handlelogOut}>LogOut</button>
          <i className="fa-solid fa-gear pr-6" onClick={handleOpenSetting}></i>
        </div>
      </div>
    ) : <Settings className="cursor-pointer"closeSetting={setOpenSetting}/>
  );
};

export default Sidebar;
