import React, { useContext, useState } from 'react'
import noteContext from '../context/noteContext'
import { DarkModeContext } from '../context/DarkModeState'

function AddNote({closeAddPage}) {
    const {darkMode} = useContext(DarkModeContext)
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
            <div className={`${darkMode ? 'bg-zinc-800' : 'bg-zinc-400 text-stone-800'} w-3/5 h-3/5 rounded-2xl`}>
                <div className='py-8'>
                    <div className="mt-3">
                        <label htmlFor="title" className="form-label"><p>Title:</p></label>
                        <input type="text" className={`border-2 outline-none w-4/5 border-transparent ${darkMode ? 'border-b-white' : 'border-b-black'} bg-transparent`} id="title" name="title" onChange={onChange}/>
                    </div>
                    <div className="mt-8">
                        <label htmlFor="detail" className="form-label"><p>Discription:</p></label>
                        <textarea className={`border-2 w-4/5 h-48 outline-none border-transparent ${darkMode ? 'border-white' : 'border-black'} bg-transparent`} id="details" name="details" row="8" onChange={onChange}/>
                    </div>
                    <button className={`${darkMode ? 'bg-green-700' : 'bg-blue-800 text-sky-200'} w-4/5 p-2 rounded-full my-2`} onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddNote