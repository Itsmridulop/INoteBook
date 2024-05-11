import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Display from './component/Display';
import Sidebar from './component/SideBar';
import NoteState from './context/NoteState';
import FullNote from './component/FullNote';

function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [index, setIndex] = useState(undefined);

  return (
    <>
      {!selectedNote ? (
        <>
          <Header />
          <NoteState>
            <Display index={index} indexFunction={setIndex} setNote={setSelectedNote} />
          </NoteState>
        </>
      ) : (
        <FullNote note={selectedNote} indexFunction={setIndex} closeNote={setSelectedNote} />
      )}
    </>
  );
}

export default App;
