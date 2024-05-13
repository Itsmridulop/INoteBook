import React, { useContext } from 'react';
import noteContext from '../context/noteContext';

const FullNote = ({ note, index, closeNote, indexFunction }) => {
    const { deleteNote } = useContext(noteContext)
    const close = () => {
        closeNote(null)
        indexFunction(undefined)
    }

    const handleDelete = (idx) => {
        deleteNote(idx)
        close()
    }

    return (
        <div className="bg-zinc-800 h-screen">
            <button className="flex p-4" onClick={close}><i className="fa-solid fa-x"></i></button>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
                <p>{note.details}</p>
            </div>
            <div className="flex justify-evenly mt-48">
                <button className='py-4 px-8 bg-red-600 rounded-3xl' onClick={() => handleDelete(index)}>Delete</button>
                <button className='py-4 px-8 bg-green-600 rounded-3xl'>Edit</button>
            </div>
        </div>
    );
};

export default FullNote;

