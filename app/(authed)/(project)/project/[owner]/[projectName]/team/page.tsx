"use client"

import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { HiBadgeCheck } from "react-icons/hi";
import { MdOutlineArrowForwardIos, MdClose } from "react-icons/md";
import { FaRegLightbulb, FaTasks } from "react-icons/fa";

import { useProject } from "@/libs/contexts/project.context";
import { InfModProjectMember } from "@/libs/interfaces/model.interface";

const Team = () => {
    const projectContext = useProject();
    const [members, setmembers] = useState<Array<InfModProjectMember>>([]);

    useEffect(() => {
        setmembers(projectContext.getProjectMembers());
    }, [projectContext.getProjectMembers()]);

    return <>
        <div className="bg-[#f9f9fb] flex-[0_0_auto] min-w-0 p-0" style={{ minHeight: `calc(100vh - 48px)` }}>
            <section className="block">
                <div>
                    <header className="px-4 pt-4">
                        <h1 className="font-medium text-[1.4rem] text-[#008aa8] mb-4 leading-normal">Filters</h1>
                    </header>
                    <form className="px-4 pb-4 relative w-[300px] h-full">
                        <fieldset className="border-0 m-0 p-0 relative w-full">
                            <input type="text" placeholder="Search by full name..." className="bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 w-full pr-4 pl-[15.2px] py-[4.8px]" />
                            <div className="right-4 top-2 absolute">
                                <div className="flex items-center justify-center">
                                    <CiSearch className="fill-[#70728f] w-4 h-4" />
                                </div>
                            </div>
                        </fieldset>
                    </form>
                    <nav className="block">
                        <ul className="mb-5">
                            <li className="text-[1.1rem] border-b border-[#eceff4] uppercase bg-white p-0">
                                <a className="flex items-center text-[#008aa8] justify-between p-4">
                                    <span className="title">All</span>
                                    <MdOutlineArrowForwardIos className="text-[#2e3440] opacity-100 w-4 h-4 transition-opacity duration-300" />
                                </a>
                            </li>
                            {/* <li className="text-[1.1rem] border-b border-[#eceff4] uppercase bg-[#f9f9fb] p-0">
                                <a className="flex items-center text-[#70728f] justify-between p-4">
                                    <span className="title">All</span>
                                    <MdOutlineArrowForwardIos className="text-[#2e3440] opacity-0 w-4 h-4 transition-opacity duration-300" />
                                </a>
                            </li>
                            <li className="bg-white text-[1.1rem] uppercase p-0" >
                                <a className="text-[#008aa8] items-center flex justify-between p-4">
                                    <span className="title">Product Owner</span>
                                    <MdOutlineArrowForwardIos className="text-[#008aa8] w-4 h-4 transition-opacity duration-300" />
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
        <section className="flex-1 min-w-0 p-4">
            <header>
                <h1 className="font-medium text-[#008aa8] text-[1.4rem] mb-4 leading-normal">
                    <span>Team</span>
                </h1>
            </header>
            <section className="flex flex-col w-full">
                <header className="p-2 flex items-center flex-row flew-nowrap text-left w-full">
                    <div className="basis-[220px] min-w-[25%]" />
                    <div className="flex items-center flex-[6] justify-end">
                        <div className="flex-1 relative text-center">
                            <span>Iocaine Drinker</span>
                            <div className="text-[.875rem] bg-[#2e3440] border border-[#d8dee9] rounded bottom-2 text-[#f9f9fb] hidden left-0 m-0 px-[9.6px] pt-[4.8px] pb-[6.4px] absolute text-center z-[2]"
                                style={{ boxShadow: `4px 4px 8px rgba(46,52,64,.1)` }}>
                                <span>Iocaine doses ingested</span>
                            </div>
                        </div>
                        <div className="flex-1 relative text-center">
                            <span>Night Shift</span>
                            <div className="text-[.875rem] bg-[#2e3440] border border-[#d8dee9] rounded bottom-2 text-[#f9f9fb] hidden left-0 m-0 px-[9.6px] pt-[4.8px] pb-[6.4px] absolute text-center z-[2]"
                                style={{ boxShadow: `4px 4px 8px rgba(46,52,64,.1)` }}>
                                <span>Tasks closed</span>
                            </div>
                        </div>
                        <div className="flex-1 relative text-center">
                            <span>Total Power</span>
                            <div className="text-[.875rem] bg-[#2e3440] border border-[#d8dee9] rounded bottom-2 text-[#f9f9fb] hidden left-0 m-0 px-[9.6px] pt-[4.8px] pb-[6.4px] absolute text-center z-[2]"
                                style={{ boxShadow: `4px 4px 8px rgba(46,52,64,.1)` }}>
                                <span>Total Points</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="w-full">
                    {
                        members.map((member, idx) =>
                            <div className="border-b border-[#f9f9fb] border-t border-[#f9f9fb] px-4 py-6 my-4 flex flex-row flex-nowrap items-center text-left w-full">
                                <div className="basis-[220px] min-w-[25%]">
                                    <div className="flex items-center">
                                        <img
                                            alt={member.email}
                                            src="https://www.gravatar.com/avatar/919392c43c7449e35622450c60cb32b4?s=200&d=https%3A%2F%2Ftree.taiga.io%2Fv-1708969004480%2Fimages%2Fuser-avatars%2Fuser-avatar-04.png"
                                            title={member.email}
                                            className="bg-[#b7cb83] basis-[66px] grow-0 shrink-0 w-[66px] border-2 border-white rounded-[8%]" />
                                        <div className="ml-4">
                                            <div className="flex items-center w-full">
                                                <span className="overflow-hidden text-ellipsis w-full">{member.email}</span>
                                                <HiBadgeCheck className="ml-2 text-[#008aa8] top-[2.4px] w-4 h-4" />
                                            </div>
                                            {/* <div className="text-[#70728f] w-full">Product Owner</div> */}
                                            {/* <div>
                                                <a className="text-[#e44057] text-[.875rem] flex">
                                                    <MdClose className="w-[12.797px] h-[12.797px] mr-[3.2px] text-[#e44057]" />
                                                    <span>Leave this project</span>
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center flex-[6] justify-end">
                                    <div className="flex-[1] relative text-center flex items-center justify-center">
                                        <FaRegLightbulb className="w-[28px] h-[28px] text-[#4c566a] opacity-10" />
                                    </div>
                                    <div className="flex-[1] relative text-center flex items-center justify-center">
                                        <FaTasks className="w-[28px] h-[28px] text-[#4c566a] opacity-10" />
                                    </div>
                                    <div className="flex-[1] relative text-center">
                                        <span className="text-[#434c5e] text-[1.4rem]">0</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
            <h2 className="hidden my-4 text-[#2e3440]">
                <span>Team &gt;</span>
                <span className="text-[#008aa8]"> Product Owner</span>
            </h2>
            <section className="flex flex-col w-full">
            </section>
        </section>
    </>
}

export default Team;