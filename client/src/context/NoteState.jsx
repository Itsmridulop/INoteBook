import React, { useState } from 'react';
import NoteContext from './noteContext';

function NoteState(props) {
    const initialData = [
        {
            title: "Note1",
            details: "lfsfsdfsdfsd fsdf sd f ds fsd f sdf sd f sd f sd fbsdbjs csd csd acsdcsdc  cds csdcsdcsd c sd csd c sdsc sd c sd c sdc sd dc sdcsdsc sd c ",
            tags: ["test", "note", 'fds', 'fdsfd', 'fsdf']
        },
        {
            title: "Note2",
            details: "this is note2"
        }
    ];
    const [note, setNote] = useState(initialData);
    // const [openNote,setOpenNote] = useState(null)
    return (
        <NoteContext.Provider value={{ note, setNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
