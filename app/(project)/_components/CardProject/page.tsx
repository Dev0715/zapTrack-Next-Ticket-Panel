"use client"

import { FaEye, FaHeart, FaUserFriends, FaSun } from "react-icons/fa";

const CardProject = () => {
    return <>
        <div className="bg-white border border-[#d8dee9] m-2 cursor-pointer mb-4 hover:border-[5cbaa933] hover:shadow-md" style={{ transition: 'all .2s' }}>
            <div className="p-4">
                <div className="flex">
                    <a href="#" title="AAA" className="inline-block basis-[50px] shrink-0 w-[50px] h-[50px] mr-2 text-[#008aa8]">
                        <img alt="AAA" src="https://tree.taiga.io/v-1708969004480/images/project-logos/project-logo-05.png" className='bg-[#99D6DC] w-full' />
                    </a>
                    <h3 className="text-[1.1rem] gap-[0.25rem] flex flex-wrap items-center text-[#2e3440] font-normal leading-normal">
                        <a href="#" title="AAA" className="text-[#4c566a]">AAA</a>
                        <FaSun className='flex items-center justify-center fill-[#008aa8] text-[1.1rem]' />
                    </h3>
                </div>
                <p className="text-[.875rem] text-[#4c566a mb-5]">AAAA</p>
                <div className="gap-2 flex">
                    <span title="0 fans" className="text-[.875rem] items-center text-[#4c566a] gap-2 flex">
                        <FaHeart className='text-[#4c566a]' />
                        <span>0</span>
                    </span>
                    <span title="one watcher" className="text-[.875rem] items-center text-[#70728f] gap-2 flex">
                        <FaEye className='text-[#4c566a]' />
                        <span>1</span>
                    </span>
                    <span title="one member" className="text-[.875rem] items-center text-[#70728f] gap-2 flex">
                        <FaUserFriends className='text-[#4c566a]' />
                        <span className="statistics-num">1</span>
                    </span>
                </div>
            </div>
        </div>
    </>
}

export default CardProject;