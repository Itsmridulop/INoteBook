import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Display from './component/Display';
import NoteState from './context/NoteState';
import FullNote from './component/FullNote';
import AddNote from './component/AddNote';
import Signin from './component/Signin';
import Logging from './component/Loggin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [index, setIndex] = useState(undefined);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  return (
    <NoteState>
      {isLogging ? (
        <>
          {!selectedNote ? (
            <>
              <Header openFunction={setIsAddOpen} setLogOut={setIsLogging}/>
              <Display index={index} indexFunction={setIndex} noteFunction={setSelectedNote} />
              {isAddOpen ? <AddNote closeAddPage={setIsAddOpen} /> : null}
            </>
          ) : (
            <FullNote index={index} note={selectedNote} indexFunction={setIndex} closeNote={setSelectedNote} />
          )}
        </>
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Signin setSignin={setIsLogging} />} />
            <Route exact path="/loggin" element={<Logging setLogin={setIsLogging} />} />
          </Routes>
        </Router>
      )}
    </NoteState>
  );
}

export default App;
