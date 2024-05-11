import React from 'react';

const FullNote = ({ note, closeNote, indexFunction }) => {
    const close = () => {
        closeNote(null)
        indexFunction(undefined)
    }

    return (
        <div className="bg-zinc-800 h-screen">
            <button className="flex p-4" onClick={close}><i className="fa-solid fa-x"></i></button>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
                <p>{note.details}</p>
                <div className="flex flex-row justify-between mt-10">
                    {note.tags && note.tags.map((tag, index) => (
                        <span className="bg-zinc-900 px-8 py-2 rounded-lg" key={index}>{tag}</span>
                    ))}
                    </div>
            </div>
        </div>
    );
};

export default FullNote;
