import React, { useState } from 'react';
import NoteContext from './noteContext';

function NoteState(props) {
    const baseUrl = 'http://localhost:8080'
    const [note, setNote] = useState(null);

    const addNote = async (title, details) => {
        const res = await fetch(`${baseUrl}/api/notes/addnotes`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title, details})
        })
        if(res.ok){
            const fetchRes = await fetch(`${baseUrl}/api/notes/fetchnotes`, {
                method: 'GET',
                headers: {
                    'auth-token': localStorage.getItem('token')
                }
            })
            if(fetchRes.ok){
                const fetchData = await fetchRes.json()
                setNote(fetchData);
            }
        }
    };

    const deleteNote = async (index) => {
        const res = await fetch(`${baseUrl}/api/notes/deletenote/${note[index]._id}`, {
            method: 'DELETE',
            headers:{
                'content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const updatedNote = note.filter((_, idx) => idx !== index);
        setNote(updatedNote);
    };

    const editNote = async (index, updatedNote) => {
        const {title, details} = updatedNote
        const res = await fetch(`${baseUrl}/api/notes/updatenote/${note[index]._id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title, details})
        })
        const updatedNnoteArr = [...note]
        updatedNnoteArr[index] = updatedNote
        setNote(updatedNnoteArr)
    };

    return (
        <NoteContext.Provider value={{ note, setNote, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
