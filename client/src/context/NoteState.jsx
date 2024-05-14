import React, { useEffect, useState } from 'react';
import NoteContext from './noteContext';

function NoteState(props) {
    const baseUrl = 'http://localhost:3000'
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
        // const res = await fetch(`${baseUrl}/api/notes/addnotes`, {
        //     method: 'POST',
        //     headers:{
        //         'content-type': 'application/json',
        //         'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0MjQ4OGY4OWE1NDZiM2E3MjJkMmIyIn0sImlhdCI6MTcxNTY2NTA5Nn0.E6Tq__8wtgsGBw8QWd4eq--9dBPFz9e-oIYd88Wuxe4'
        //     },
        //     body: JSON.stringify({title, details})
        // })
        // console.log(JSON.stringify({title,details}))
        const addedNote = {
            title: title,
            details: details
        }           
        setNote([...note, addedNote]);
    };

    const deleteNote = (index) => {
        const updatedNote = note.filter((_, idx) => idx !== index);
        setNote(updatedNote);
    };

    const editNote = async (index, updatedNote) => {
        // const {title, details} = updatedNote
        // const res = await fetch(`${baseUrl}/api/notes/updatenote/663904a3f800d0b8180ebfaf`, {
        //     method: 'POST',
        //     headers:{
        //         'content-type': 'application/json',
        //         'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzOTAzZTFmODAwZDBiODE4MGViZjlkIn0sImlhdCI6MTcxNTYxMzIzM30.rYcfpTYK37_YqOaH3LlaCgglBHL-IL-aFxf5lY2WC90'
        //     },
        //     body: JSON.stringify({title, details})
        // })
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
