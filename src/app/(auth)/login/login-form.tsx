"use client";

import React from 'react'

const LoginForm = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (e:
        React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

    }

    return (
        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6">
                <label htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700">
                    Email Address
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border p-2"
                />
            </div>

            <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Password </label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border p-2"
                />
            </div>


            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                    Login
                </button>

            
            <p className="mt-4 text-sm text-gray-500 sm:mt-0 w-100">
                Already have an account?
                <a href="#" className="text-gray-700 underline">Log in</a>.
            </p>
            </div>
        </form>
    )
}

export default LoginForm