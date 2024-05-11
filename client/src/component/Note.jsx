import React from 'react';

function Note(props) {
    const { details, tags, title } = props.data;
    return (
        <div className={`flex ${tags ? 'justify-between' : ' '} flex-col bg-neutral-900 p-8 mr-4 rounded-lg h-72 w-48 cursor-pointer`}>
            <h2>{title}</h2>
            <p className="my-5 overflow-hidden">{details}</p>
            <div className="flex">
                {tags && <p className='bg-gray-950 w-28 m-1 p-1'>{tags[0]}</p>}
            </div>
        </div>
    );
}

export default Note;
