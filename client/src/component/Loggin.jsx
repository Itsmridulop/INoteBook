import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import noteContext from '../context/noteContext'

function Loggin({setLogin}) {
    const {setNote} = useContext(noteContext)
    const handleLogIn = async (e) => {
        e.preventDefault()
        const res = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: document.getElementById('Email').value,
                password: document.getElementById('Password').value,
                confirmPassword: document.getElementById('PasswordConfirmation').value

            })
        })
        if(res.ok) {
            const data = await res.json()
            localStorage.setItem('token',data.authToken)
            const fetchRes = await fetch('http://localhost:8080/api/notes/fetchnotes',{
                method: 'GET',
                headers: {
                    'auth-token': localStorage.getItem('token')
                }
            })
            if(fetchRes.ok){
                const fetchData = await fetchRes.json()
                setNote(fetchData)
            }
            setLogin(true)
        }
    }

    return (
        <main
            className="flex items-center mt-48 justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
            <div className="max-w-xl lg:max-w-3xl">
                <div className="relative -mt-16 block ">
                    <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                        LoggIn
                    </h1>
                </div>
                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Email
                        </label>

                        <input
                            type="email"
                            id="Email"
                            name="email"
                            className="mt-1 w-full h-10 outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="Password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            id="Password"
                            name="password"
                            className="mt-1 w-full h-10 outline-none rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="PasswordConfirmation"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                        >
                            Password Confirmation
                        </label>

                        <input
                            type="password"
                            id="PasswordConfirmation"
                            name="password_confirmation"
                            className="mt-1 w-full rounded-md h-10 outline-none border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                        />
                    </div>
                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                        <button
                            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                            onClick={handleLogIn}
                        >
                            LoggIn
                        </button>
                        <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                            Create a new account
                            <Link to="/" className="text-gray-700 ml-2 underline dark:text-gray-200">Sign In</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Loggin
