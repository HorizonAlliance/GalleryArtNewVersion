"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import FlipText from "@/components/ui/text-flip";
import DarkModeToggle from "../(partials)/buttondarkmode";
import { IconHome } from '@tabler/icons-react';


const SidebarForNavbarAsli = () => {
    // State to toggle sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const links = [
        { href: "/", label: "Home" },
        { href: "/Gallery", label: "Gallery" },
        { href: "/Profile", label: "Profile" },
        { href: "/About", label: "About" },
    ];

    return (
        <div className="flex max-w-fit  fixed top-5 inset-x-0 mx-auto dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center space-x-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
                <div className="w-full flex flex-col justify-center lg:flex-row">
                    <div className="flex justify-between items-center  flex-row">
                        {/* Mobile Button to Toggle Sidebar */}
                        <button
                            onClick={toggleSidebar}
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 dark:bg-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-expanded={isSidebarOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center">
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3"
                                    d="M23.75 16.625C23.75 15.3133 22.6867 14.25 21.375 14.25H7.125C5.81332 14.25 4.75 15.3133 4.75 16.625V30.875C4.75 32.1867 5.81332 33.25 7.125 33.25H21.375C22.6867 33.25 23.75 32.1867 23.75 30.875V16.625Z"
                                    fill="#F59E0B"></path>
                                <path
                                    d="M12.6665 15.0417C12.6665 20.7256 17.2742 25.3333 22.9582 25.3333C28.6421 25.3333 33.2498 20.7256 33.2498 15.0417C33.2498 9.35774 28.6421 4.75 22.9582 4.75C17.2742 4.75 12.6665 9.35774 12.6665 15.0417Z"
                                    fill="#F59E0B"></path>
                            </svg>
                        </div>
                        {/* Sidebar for Mobile */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: isSidebarOpen ? 0 : '-100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-lg lg:hidden"
                        >
                            <div className="p-4">
                                {/* Close button inside Sidebar */}
                                <button
                                    onClick={toggleSidebar}
                                    className="text-gray-500 dark:bg-white hover:text-gray-700 focus:outline-none"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9l5-5m0 0L5 5m5-5v10"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                {/* Sidebar Links with FlipText */}
                                <nav>
                                    <ul className="mt-6 space-y-4">
                                        {links.map((link) => (
                                            <li key={link.label}>
                                                <a
                                                    href={link.href}
                                                    className="block text-gray-500 dark:bg-white text-base font-medium hover:text-indigo-700"
                                                >
                                                    <FlipText word={link.label} />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
                                        <button
                                            className=" bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">Login
                                        </button>
                                        <button
                                            className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-700">Sign
                                            up </button>
                                    </div>
                                </nav>
                                <div className="fixed bottom-10 flex w-full z-40">
                                    <DarkModeToggle />
                                </div>
                            </div>
                        </motion.div>

                        {/* Overlay when sidebar is open */}
                        {isSidebarOpen && (
                            <div
                                className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden"
                                onClick={toggleSidebar}
                            ></div>
                        )}

                        {/* Desktop Navbar */}
                        <div className="hidden lg:flex w-full lg:pl-11 max-lg:py-4" id="navbar">
                            <ul className="flex lg:items-center justify-end flex-col max-lg:gap-4 mt-4 lg:mt-0 lg:flex-row max-lg:mb-4">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-gray-500 dark:bg-white text-base lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left"
                                        >
                                            <FlipText word={link.label} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex lg:items-center justify-end flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end">
                                <button className="bg-indigo-50 text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-indigo-100">
                                    Login
                                </button>
                                <button className="bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5 hover:bg-indigo-700">
                                    Sign up
                                </button>
                                <DarkModeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarForNavbarAsli;
