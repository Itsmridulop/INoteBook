import React, { useContext, useEffect } from 'react';
import noteContext from '../context/noteContext';
import { DarkModeContext } from '../context/DarkModeState';

const FullNote = ({ note, index, closeNote, indexFunction }) => {
    const { deleteNote, editNote } = useContext(noteContext)
    const {darkMode} = useContext(DarkModeContext)
    const close = () => {
        closeNote(null)
        indexFunction(undefined)
    }
    
    const handleDelete = (idx) => {
        deleteNote(idx)
        close()
    }
    
    
    
    const handleEdit = () => {
        let editPara = document.getElementById('editPara')
        let editTitle = document.getElementById('editTitle')
        let editbtn = document.getElementById('btn')
        editPara.setAttribute('contenteditable', 'true')
        editTitle.setAttribute('contenteditable', 'true')
        editbtn.innerText = 'Save'
        editbtn.addEventListener('click', () => 
            {
                editbtn.innerText = 'Edit'
                editNote(index, {title: editTitle.innerText, details: editPara.innerText})
            })
    }

    return (
        <div className={`${darkMode ? 'bg-zinc-800' : 'bg-zinc-400 text-neutral-800'} h-screen`}>
            <button className="flex p-4" onClick={close}><i className="fa-solid fa-x"></i></button>
            <div className="p-6">
                <h2 id="editTitle" className="text-2xl outline-none font-bold mb-4">{note.title}</h2>
                <p className="outline-none" id="editPara" >{note.details}</p>
            </div>
            <div className="flex justify-evenly mt-48">
                <button className='py-4 px-8 bg-red-600 rounded-3xl' onClick={() => handleDelete(index)}>Delete</button>
                <button id="btn" className={`py-4 px-8 ${darkMode ? 'bg-green-600' : 'bg-blue-800 text-sky-200'} mb-4 rounded-3xl`} onClick={handleEdit}>Edit</button>
            </div>
        </div>
    );
};

export default FullNote;

