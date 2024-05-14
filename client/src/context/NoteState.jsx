import React, { useEffect, useState } from 'react';
import NoteContext from './noteContext';

function NoteState(props) {
    const baseUrl = 'http://localhost:8080'
    const initialData = [
        {
            title: "Note1",
            details: "lfsfsdfsdfsd fsdf sd f ds fsd f sdf sd f sd f sd fbsdbjs csd csd acsdcsdc  cds csdcsdcsd c sd csd c sdsc sd c sd c sdc sd dc sdcsdsc sd c ",
        },
        {
            title: "Note2",
            details: "this is note2"
        }
    ];
    const [note, setNote] = useState(initialData);

    const addNote = async (title, details) => {
        const res = await fetch(`${baseUrl}/api/notes/addnotes`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0MzlhZDNiODE5NzU0ZjU3ZDgyZmZmIn0sImlhdCI6MTcxNTcwNjU3OX0.vr75_06iPMWBiisVodwAy1ECGoUND99HI-7xgTjTs7g'
            },
            body: JSON.stringify({title, details})
        })
        const addedNote = {
            title: title,
            details: details
        }           
        setNote([...note, addedNote]);
    };

    const deleteNote = async (index) => {
        const res = await fetch(`${baseUrl}/api/notes/deletenote/66439c69b819754f57d83010`, {
            method: 'DELETE',
            headers:{
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0MzlhZDNiODE5NzU0ZjU3ZDgyZmZmIn0sImlhdCI6MTcxNTcwNjU3OX0.vr75_06iPMWBiisVodwAy1ECGoUND99HI-7xgTjTs7g'
            },
        })
        const updatedNote = note.filter((_, idx) => idx !== index);
        setNote(updatedNote);
    };

    const editNote = async (index, updatedNote) => {
        const {title, details} = updatedNote
        const res = await fetch(`${baseUrl}/api/notes/updatenote/66439cbeb819754f57d8301c`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzOTAzZTFmODAwZDBiODE4MGViZjlkIn0sImlhdCI6MTcxNTYxMzIzM30.rYcfpTYK37_YqOaH3LlaCgglBHL-IL-aFxf5lY2WC90'
            },
            body: JSON.stringify({title, details})
        })
        // return res.json()
        const updatedNnoteArr = [...note]
        updatedNnoteArr[index] = updatedNote
        setNote(updatedNnoteArr)
    };

    return (
        <NoteContext.Provider value={{ note, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
