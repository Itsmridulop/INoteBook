import React, { useContext, useEffect, useState } from 'react';
import noteContext from '../context/noteContext';
import Sidebar from './SideBar';
import { DarkModeContext } from '../context/DarkModeState';

function Header({ openFunction, setLogOut }) {
  const { note } = useContext(noteContext);
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/auth/getuser', {
          method: 'GET',
          headers: {
            'auth-token': localStorage.getItem('token')
          }
        });
        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const openAddNote = () => {
    openFunction(true);
  };

  return (
    <header className={`${darkMode ? 'bg-zinc-700' : 'bg-white'}`}>
      <div className='flex justify-end'>
        <button onClick={openSidebar}>
          <i className="fa-solid fa-user p-4 rounded-full m-5" style={{ backgroundColor: darkMode ? "#454545" : "#eeeeee", color: darkMode ? "#ffffffde" : "black"}}></i>
        </button>
      </div>
      <div className={`p-24 ${darkMode ? 'text-gray-300' : 'text-black'}`}>
        <h3 className='text-2xl font-bold'>{userData.userName}</h3>
        <p className='mt-3 font-semibold'>{note.length}</p>
      </div>
      <div className='flex justify-end'>
        <button onClick={openAddNote}>
          <i className={`fa-solid fa-plus p-8 ${darkMode ? 'text-gray-200' : 'text-black' }`} />
        </button>
      </div>
      {isOpen && <Sidebar darkMode={darkMode} setLogout={setLogOut} closeSidebar={() => setIsOpen(false)} handleDarkMode={toggleDarkMode} />}
    </header>
  );
}

export default Header;
