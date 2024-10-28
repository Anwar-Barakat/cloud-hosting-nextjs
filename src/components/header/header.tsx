"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="bg-white">
            <header className="bg-[#FCF8F1] bg-opacity-30">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex">
                                <Image className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                                    width={100} height={100} alt="" />
                            </a>
                        </div>

                        {/* Hamburger Button */}
                        <button onClick={toggleDropdown} type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            <svg className={`${isDropdownOpen ? 'hidden' : 'block'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                            </svg>
                            <svg className={`${isDropdownOpen ? 'block' : 'hidden'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Dropdown Menu for Small Screens */}
                        <div className={`${isDropdownOpen ? 'block' : 'hidden'} lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10`}>
                            <nav className="flex flex-col items-center space-y-4 py-4">
                                <Link href="/" className="text-base text-black transition-all duration-200 hover:text-opacity-80">Features</Link>
                                <Link href="/articles" className="text-base text-black transition-all duration-200 hover:text-opacity-80">Solutions</Link>
                                <Link href="/about" className="text-base text-black transition-all duration-200 hover:text-opacity-80">Resources</Link>
                                <Link href="/admin" className="text-base text-black transition-all duration-200 hover:text-opacity-80">Pricing</Link>
                                <Link href="/login" className="px-4 py-2 text-base font-semibold text-white bg-black rounded-full transition-all duration-200 hover:bg-yellow-300 hover:text-black">Login</Link>
                                <Link href="/register" className="px-4 py-2 text-base font-semibold text-white bg-black rounded-full transition-all duration-200 hover:bg-yellow-300 hover:text-black">Register</Link>
                            </nav>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <Link href="/" className="text-base text-black transition-all duration-200 hover:text-opacity-80">Features</Link>
                            <Link href="/articles" className="text-base text-black transition-all duration-200 hover:text-opacity-80">Solutions</Link>
                            <Link href="/about" className="text-base text-black transition-all duration-200 hover:text-opacity-80">Resources</Link>
                            <Link href="/admin" className="text-base text-black transition-all duration-200 hover:text-opacity-80">Pricing</Link>
                        </div>

                        {/* Login & Register for Desktop */}
                        <div className="hidden lg:flex items-center gap-1">
                            <Link href="/login" className="px-5 py-2.5 text-base font-semibold text-white bg-black rounded-full transition-all duration-200 hover:bg-yellow-300 hover:text-black">Login</Link>
                            <Link href="/register" className="px-5 py-2.5 text-base font-semibold text-white bg-black rounded-full transition-all duration-200 hover:bg-yellow-300 hover:text-black">Register</Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
