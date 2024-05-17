import React from 'react';

function Note(props) {
    const { details, title } = props.data;
    return (
        <div className={`flex m-2 flex-col ${props.darkMode ? 'bg-neutral-900 text-white' : 'bg-neutral-400 text-black'} p-8 mr-4 rounded-lg h-72 w-48 cursor-pointer`}>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <p className="my-5 overflow-hidden">{details}</p>
        </div>
    );
}

export default Note;
