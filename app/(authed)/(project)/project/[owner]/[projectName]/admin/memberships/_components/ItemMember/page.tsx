"use client"

import { useState, useEffect } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";

import { InfModRole, InfModProjectMember } from "@/libs/interfaces/model.interface";

import { useProject } from "@/libs/contexts/project.context";

interface ItemMemberProps {
    member: InfModProjectMember
}

const ItemMember = ({ member }: ItemMemberProps) => {
    const projectContext = useProject();

    const [roles, setRoles] = useState<Array<InfModRole>>([]);
    const [isAdmin, setIsAdmin] = useState<boolean>(member.is_admin);

    useEffect(() => {
        const projectRoles = projectContext.getProjectRoles();
        setRoles(projectRoles);
    }, []);

    const handleChgIsAdmin = () => {
        setIsAdmin(!isAdmin);
    }

    return <>
        <div className="border-b-0 flex items-center flex-row flex-nowrap py-[4.8px] w-full text-left" >
            <div className="basis-[210px] grow-[3] min-w-[210px]">
                <div className="items-center flex">
                    <img
                        src="https://www.gravatar.com/avatar/919392c43c7449e35622450c60cb32b4?s=200&d=https%3A%2F%2Ftree.taiga.io%2Fv-1708969004480%2Fimages%2Fuser-avatars%2Fuser-avatar-04.png"
                        alt={member.email}
                        style={{ backgroundColor: 'rgba( 183, 203, 131, 1 )' }}
                        className="rounded grow-0 mr-2 ml-[4.8px] w-[50px] border-2 border-white"
                    />
                    <div className="user-data">
                        {
                            member.status ?
                                <div className="flex items-center justify-center">
                                    <span>{member.email}</span>
                                    <HiBadgeCheck className="w-4 h-4 ml-1" />
                                </div>
                                : <></>
                        }
                        <div className="text-[.875rem] text-[#5a5b72] mt-[3.2px]">
                            <span className="email">{member.email}</span>
                            <span className="text-[#ffa0a0] inline-block pl-[4.8px]">Pending</span>
                        </div>
                    </div>
                </div></div>
            <div className="basis-0 grow min-w-[70px]">
                <div className="bg-[#d8dee9] border-2 text-[#d8dee9] rounded-[24px] cursor-pointer h-[18px] overflow-hidden relative transition-all duration-200 w-8"
                    onClick={() => handleChgIsAdmin()}>
                    <input type="checkbox" className="align-middle w-[85px] h-[40px] cursor-pointer left-0 opacity-0 absolute top-0 z-[2]" />
                    <div className={`h-full relative w-full ${isAdmin ? `bg-[#008aa8] transition-all duration-200 before:left-[50%]` : `before:left-[10%]`} before:bg-white before:rounded-full before:content-[''] before:h-[10px] before:left-[10%] before:absolute before:transition-all before:duration-200 before:w-[10px] before:top-[2px]`} />
                    <span className="">Yes</span>
                    <span className="">No</span>
                </div>
            </div>
            <div className="basis-[210px] grow-[3] min-w-[210px] pr-4">
                <select className="bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 pr-4 pl-[15.2px] py-[4.8px] w-full">
                    {
                        roles.map((role, idx) =>
                            <option value={role._id} key={idx} selected={member.permission === role._id}>
                                {role.name}
                            </option>
                        )
                    }
                </select>
            </div>
            <div className="basis-[50px] grow flex items-center justify-between">
                {
                    member.status ?
                        <div className="bg-[#e2e3e9] text-[.875rem] items-center flex justify-center min-w-[4rem] px-2 py-[6.4px]">Active</div>
                        :

                        <button
                            className="text-white transition-color duration-300 bg-[#008aa8] text-[.875rem] items-center flex justify-center min-w-[4rem] px-2 py-[6.4px] cursor-pointer hover:text-[#4c566a]"
                            title="Resend"
                        >
                            Resend
                        </button>
                }
                <a className="text-[#70728f] transition-fill duration-200 text-[#008aa8]" title="Delete member">
                    <FaRegTrashAlt className="w-4 h-4 text-[#008aa8]" />
                </a>
            </div>
        </div>
    </>
}

export default ItemMember;