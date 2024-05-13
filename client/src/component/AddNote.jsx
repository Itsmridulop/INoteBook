import React, { useContext, useState } from 'react'
import noteContext from '../context/noteContext'

function AddNote({closeAddPage}) {
    const close = () => {
        closeAddPage(false)
    }
    const [updatedNnote, setUpdatedNote] = useState({title: '', details: ''})
    const context = useContext(noteContext)
    const {addNote} = context
    const handleAdd = () => {
        addNote(updatedNnote.title, updatedNnote.details)
        close()
    }
    const onChange = (e) => {
        setUpdatedNote({...updatedNnote, [e.target.name]: e.target.value})
    }
    return (
        <div className='fixed flex justify-center items-center h-screen w-screen top-0 bg-black bg-opacity-50'>
            <button className="flex fixed top-0 left-0 p-6" onClick={close}><i className="fa-solid fa-x"></i></button>
            <div className="bg-zinc-800 w-3/5 h-3/5 rounded-2xl">
                <div className='py-8'>
                    <div className="mt-3">
                        <label htmlFor="title" className="form-label"><p>Title:</p></label>
                        <input type="text" className="border-2 w-4/5 border-transparent border-b-white bg-transparent" id="title" name="title" placeholder="Title" onChange={onChange}/>
                    </div>
                    <div className="mt-8">
                        <label htmlFor="detail" className="form-label"><p>Discription:</p></label>
                        <textarea className="border-2 w-4/5 h-48 border-transparent border-white bg-transparent" id="details" name="details" row="8" onChange={onChange}/>
                    </div>
                    <button className='bg-green-700 w-4/5 p-2 rounded-full my-2' onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddNote