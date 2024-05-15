  import React, { useContext, useEffect } from 'react';
  import noteContext from '../context/noteContext';
  import Note from './Note';

  function Display({ index, indexFunction,  noteFunction }) {
    const context = useContext(noteContext);
    const { note } = context;
    const getIndex = (idx) => {
      indexFunction(idx)
    }
    
    useEffect(() => {
      noteFunction(note[index])
    },[index])
  
    return ( 
      <div className={`flex flex-wrap justify-center overflow-auto h-screen bg-neutral-800 rounded-t-3xl p-20`}>
        {note.map((ele, idx) => (
          <button key={idx} className="flex" onClick={() => getIndex(idx)}><Note key={idx} data={ele}/></button>
        ))}
      </div>
    );
  }

  export default Display;
