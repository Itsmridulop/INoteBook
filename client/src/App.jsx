import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Display from './component/Display';
import NoteState from './context/NoteState';
import FullNote from './component/FullNote';
import AddNote from './component/AddNote';

function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [index, setIndex] = useState(undefined);
  const [isAddOpen, setIsAddOpen] = useState(false)
  return (
    <NoteState>
      {!selectedNote ? (
        <>
          <Header openFunction={setIsAddOpen}/>
          <Display index={index} indexFunction={setIndex} noteFunction={setSelectedNote} />
          {isAddOpen ? <AddNote  closeAddPage={setIsAddOpen}/> : null}
        </>
      ) : (
        <FullNote index={index} note={selectedNote} indexFunction={setIndex} closeNote={setSelectedNote} />
      )}
    </NoteState>
  );
}

export default App;
