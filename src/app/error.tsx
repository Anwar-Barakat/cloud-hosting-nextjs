"use client";

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface ErrorPageProps {
    error: Error,
    reset: () => void
}

const ErrorPage = (
    {
        error,
        reset
    }: ErrorPageProps
) => {
    return (
        <div className="flex h-screen flex-col bg-white">
            <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                alt=""
                className="h-64 w-full object-cover"
                width={1570}
                height={100}
                objectFit='cover'
            />

            <div className="flex flex-1 items-center justify-center">
                <div className="mx-auto max-w-xl px-4 py-8 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We can not find that page.
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Error Message : {error.message}
                    </p>

                    

                    <Link
                        href="/"
                        className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage