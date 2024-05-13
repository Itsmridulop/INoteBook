import React, { useEffect, useState } from 'react';
import NoteContext from './noteContext';

function NoteState(props) {
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

    const addNote = (title, details) => {
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

    const editNote = (index, updatedNote) => {

    };

    return (
        <NoteContext.Provider value={{ note, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
