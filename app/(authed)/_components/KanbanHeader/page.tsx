"use client"

import { IoMdAdd } from "react-icons/io"
import { FaShirtsinbulk, FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { InfModAttrStatusUserstory } from "@/libs/interfaces/model.interface";

interface KanbanHeaderProps {
    status: InfModAttrStatusUserstory,
    handleAddUserstory: (status: InfModAttrStatusUserstory) => void,
    handleAddBulk: (status: InfModAttrStatusUserstory) => void,
}

const KanbanHeader = ({ status, handleAddUserstory, handleAddBulk }: KanbanHeaderProps) => {
    return <>
        <h2 className={`text-[1rem] items-center bg-[#d8dee9] border-tl-[4px] border-tr-[4px] text-[#5a5b72] flex basis-[292px] grow-0 shrink-0 h-[36px] justify-between mr-[4px] min-h-[36px] max-w-[292px] px-3 relative uppercase duration-100 vtransition-all leading-tight`}>
            <div className={`grow shrink-0 h-[1rem] max-w-[0.625rem] w-[0.625rem] bg-[${status.color}]`} />
            <div className="flex items-end ml-2 w-full">
                <div className="inline-block max-w-[160px] overflow-hidden text-ellipsis text-[.875rem] text-[#2e3440] leading-[1em]">{status.name}</div>
            </div>
            <div className="flex">
                {/* <button
                    title="Add new user story"
                    className="mr-[2px] bg-transparent text-[#70728f] p-1 text-[.875rem] items-center border-0 rounded-[4px] inline-flex justify-center text-center uppercase"
                    onClick={() => handleAddUserstory(status)}
                >
                    <IoMdAdd />
                </button> */}
                <button
                    title="Add new bulk"
                    className="mr-[2px] bg-transparent text-[#70728f] p-1 text-[.875rem] items-center border-0 rounded-[4px] inline-flex justify-center text-center uppercas"
                    onClick={() => handleAddBulk(status)}
                >
                    <FaShirtsinbulk />
                </button>
                <button
                    title="Fold column"
                    className="mr-[2px] bg-transparent text-[#70728f] p-1 text-[.875rem] items-center border-0 rounded-[4px] inline-flex justify-center text-center uppercas"
                >
                    <FaAngleLeft />
                </button>
                <button
                    title="Unfold column"
                    className="mr-[2px] bg-transparent text-[#70728f] p-1 text-[.875rem] items-center border-0 rounded-[4px] inline-flex justify-center text-center uppercase mr-0 hidden"
                >
                    <FaAngleRight />
                </button>
            </div>
        </h2>
    </>
}

export default KanbanHeader;