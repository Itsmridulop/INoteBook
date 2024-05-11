import React from 'react'

function AddNote({closeSiderBar}) {
    console.log(closeSiderBar)
    const close = () => {
        closeSiderBar(false)
    }
    return (
        <div className='fixed flex justify-center items-center h-screen w-screen top-0 bg-black bg-opacity-50'>
            <button className="flex fixed top-0 left-0 p-6" onClick={close}><i className="fa-solid fa-x"></i></button>
            <div className="bg-zinc-800 w-3/5 h-3/5 rounded-2xl">
                <div className='py-8'>
                    <div className="mt-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label"><p>Title:</p></label>
                        <input type="text" className="border-2 w-4/5 border-transparent border-b-white bg-transparent" id="exampleFormControlInput1" placeholder="Title" />
                    </div>
                    <div className="mt-8">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><p>Discription:</p></label>
                        <textarea className="border-2 w-4/5 h-48 border-transparent border-white bg-transparent" id="exampleFormControlTextarea1" row="8" />
                    </div>
                    <button className='bg-green-900 w-4/5 p-2 rounded-full my-2'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddNote
