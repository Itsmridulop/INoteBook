  import React, { useContext, useEffect } from 'react';
  import noteContext from '../context/noteContext';
  import Note from './Note';
import { DarkModeContext } from '../context/DarkModeState';

  function Display({ index, indexFunction,  noteFunction }) {
    const context = useContext(noteContext);
    const { note } = context;
    const {darkMode} = useContext(DarkModeContext)
    const getIndex = (idx) => {
      indexFunction(idx)
    }
    
    useEffect(() => {
      noteFunction(note[index])
    },[index])
  
    return ( 
      <div className={`flex flex-wrap justify-center overflow-auto h-screen ${darkMode ? 'bg-neutral-800' : 'bg-neutral-300'} rounded-t-3xl p-20`}>
        {note.map((ele, idx) => (
          <button key={idx} className="flex" onClick={() => getIndex(idx)}><Note key={idx} data={ele} darkMode={darkMode}/></button>
        ))}
      </div>
    );
  }

  export default Display;
