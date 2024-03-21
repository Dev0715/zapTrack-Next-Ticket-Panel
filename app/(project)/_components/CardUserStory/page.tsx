import Link from "next/link";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegClock, FaPaperclip } from "react-icons/fa";

import { InfModUserstory } from "@/libs/interfaces/model.interface";

interface CardUserStoryProps {
    userStory: InfModUserstory
}

const CardUserStory = ({ userStory }: CardUserStoryProps) => {
    return <>

        <div className="min-h-[120px] bg-white rounded cursor-move m-4 outline-0 overflow-hidden duration-200 transition-[box-shadow]"
            style={{ boxShadow: `4px 4px 8px rgba(216,222,233,.5)`, contain: `content` }}>
            <div className="bg-white rounded-[0.25rem] pb-3 pt-4">
                <div className="flex flex-wrap px-3">
                    {/* <span title="asda" className="bg-[#282828] min-w-auto text-[.7rem] rounded-sm text-white max-w-[17ch] mb-2 mr-2 min-h-2 overflow-hidden px-1 text-ellipsis">asda</span>
                    <span title="asdfsadf" className="bg-[#282828] min-w-auto text-[.7rem] rounded-sm text-white max-w-[17ch] mb-2 mr-2 min-h-2 overflow-hidden px-1 text-ellipsis">asdfsadf</span>
                    <span title="asdf" className="bg-[#282828] min-w-auto text-[.7rem] rounded-sm text-white max-w-[17ch] mb-2 mr-2 min-h-2 overflow-hidden px-1 text-ellipsis">asdf</span>
                    <span title="sadf" className="bg-[#282828] min-w-auto text-[.7rem] rounded-sm text-white max-w-[17ch] mb-2 mr-2 min-h-2 overflow-hidden px-1 text-ellipsis">sadf</span> */}
                </div>
                <div className="absolute right-1 top-1 z-[2]">
                    <button className="rounded-sm py-1">
                        <CiMenuKebab className="w-4 h-4" />
                    </button>
                </div>
                <div>
                </div>
                <h2 className="mb-2 px-3 text-[1.4rem] leading-tight text-[#2e3440] font-normal">
                    <Link href="project/johnwindergold71722223-test1-1/us/1?kanban-include_attachments=1&kanban-include_tasks=1&kanban-status=9274528"
                        className="text-[.875rem]" style={{ contain: `content` }}>
                        <span className="pr-1 text-[#008aa8]">#{userStory.location}</span>
                        <span className="text-[#2e3440] pr-1 break-all">{userStory.subject}</span>
                    </Link>
                </h2>
                <div className="contents">
                    <div className="mb-2 px-3 flex relative">
                        <div className="items-center flex cursor-pointer -mr-1 relative">
                            <img title="Not assigned" src="https://tree.taiga.io/v-1708969004480/images/unnamed.png" className="border-2 border-white rounded-[15px] flex w-[30px] h-[30px]" />
                            <span className="text-[.875rem] text-[#70728f] ml-2">Not assigned</span>
                        </div>
                    </div>
                    <div className="justify-between mb-2 px-3 items-center text-[#70728f] flex text-[14px] flex-wrap w-full">
                        {/* <div className="flex items-center">
                            <span>
                                <span title="Estimation" className="text-[.7rem] bg-[#eceff4] rounded-sm m-0 p-1 flex">22 pts</span>
                            </span>
                            <div title="05 Mar 2024 (Past due)" className="ml-2">
                                <FaRegClock className="w-4 h-4 text-[#e44057]" />
                            </div>
                        </div> */}
                        {/* <div className="ml-auto text-[.7rem] items-center text-[#a9aabc] flex mt-0 grow justify-end">
                            <div title="Attachments" className="text-[#70728f] flex ml-2">
                                <FaPaperclip className="w-3 h-3 mr-[3.2px] text-[#70728f]" />
                                <span>0</span>
                            </div>
                        </div> */}

                        <div className="flex items-center">
                            <span>
                                <span className="text-[.7rem] bg-[#eceff4] rounded-[2px] m-0 p-1 flex">N/E</span>
                            </span>
                        </div>
                        <div className="ml-auto text-[.7rem] items-center text-[#a9aabc] flex mt-0 grow justify-end">
                        </div>
                    </div>
                </div>
                <div />
            </div>
            <div className="bg-[#dcdde5] border border-dashed hidden p-4">
                <div className="flex mb-4">
                    <div className="basis-[48px] shrink-0 w-12 h-12 bg-[#cbcdd7]" />
                    <div className="pl-2 w-full">
                        <div className="h-4 mb-4 w-[80px] bg-[#cbcdd7]" />
                        <div className="h-4 mb-4 w-[80px] bg-[#cbcdd7]" />
                    </div>
                </div>
                <div className="flex mb-4">
                    <div className="basis-[48px] shrink-0 w-12 h-12 bg-[#cbcdd7]" />
                    <div className="pl-2 w-full">
                        <div className="h-4 mb-4 w-[80px] bg-[#cbcdd7]" />
                        <div className="h-4 mb-4 w-[80px] bg-[#cbcdd7]" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CardUserStory;