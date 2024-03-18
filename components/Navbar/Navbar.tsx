"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { signOut } from "next-auth/react"
import { getSession } from 'next-auth/react';

const Navbar = () => {
    const [session, setSession] = useState<any>(null);

    useEffect(() => {
        getSession().then((session: any) => {
            setSession(session);
        })
    }, []);

    return <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 z-[100]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link href={`/`} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={`/logo.webp`} className="w-36" alt="Flowbite Logo" />
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-center items-center gap-1">
                    {
                        session !== null ?
                            <>
                                <button className="min-w-20 text-center font-normal text-[#70728F] pb-0 text-base cursor-pointer" onClick={() => signOut()}>
                                    Sign out
                                </button>
                            </>
                            :
                            <>
                                <Link href={`/login`} className="min-w-20 text-center font-normal text-[#70728F] pb-0 text-base cursor-pointer">Log in</Link>
                                <Link href={`/register`} className="flex relative flex-row bg-[#83EEDE] cursor-pointer rounded	px-5 py-2">
                                    <span className="font-medium text-base">
                                        Get Taiga for free
                                    </span>
                                </Link>
                            </>
                    }
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div>
                        <Link href={``} className="relative text-right text-[#70728F] px-1 py-0">ES</Link>
                    </div>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href={`/features`} className="relative flex text-xs font-medium color-[#4C566A] p-2 hover:text-base hover:bg-[#F1F1F4] ">
                                <div className="relative text-base font-medium leading-tight">Features</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/pricing-cloud`} className="relative flex text-xs font-medium color-[#4C566A] p-2 hover:text-base hover:bg-[#F1F1F4]">
                                <div className="relative text-base font-medium leading-tight">Pricing</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/about`} className="relative flex text-xs font-medium color-[#4C566A] p-2 hover:text-base hover:bg-[#F1F1F4]">
                                <div className="relative text-base font-medium leading-tight">About</div>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/community`} className="relative flex text-xs font-medium color-[#4C566A] p-2 hover:text-base hover:bg-[#F1F1F4]">
                                <div className="relative text-base font-medium leading-tight">Community</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;