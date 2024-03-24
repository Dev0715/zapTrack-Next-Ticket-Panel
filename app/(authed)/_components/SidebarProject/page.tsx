import Link from "next/link";
import { LuKanbanSquare } from "react-icons/lu";
import { CiSearch, CiSettings, CiMenuKebab } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";

interface SidebarProjectProps {
    owner: string
    projectName: string
}

const SidebarProject = ({ projectName, owner }: SidebarProjectProps) => {
    return <>
        <div className="bg-[#3b4252] z-[9]">
            <div className="sticky top-0" style={{ height: `calc(100vh - 48px)` }}>
                <div className="bg-[#3b4252] flex flex-col h-full left-0 top-0 relative">
                    <div className="h-full overflow-x-hidden overflow-y-auto">
                        <div className="flex flex-col h-full w-[200px]">
                            <h1 className="bg-[#2e3440] m-0 p-4 pl-3 text-[2em]">
                                <Link
                                    className="items-center flex text-[#83eede] text-[.875rem] no-underline"
                                    title={projectName}
                                    href={`/project/${owner}/${projectName}/timeline`}>
                                    <img className="bg-[#d6a1d4] rounded-sm h-6 w-6 mr-3" alt="test1" src="https://tree.taiga.io/v-1708969004480/images/project-logos/project-logo-01.png" />
                                    <span className=""> {projectName} </span>
                                </Link>
                            </h1>
                            <ul className="pb-2">
                                <li className="mb-0">
                                    <Link
                                        className="bg-transparent border-0 cursor-pointer pr-2 w-full flex items-center text-[#d8dee9] h-10 p-0 duration-200 transition-color hover:bg-[#2e3440] hover:text-white hover:font-bold"
                                        title="Kanban"
                                        href={`/project/${owner}/${projectName}/kanban`}>
                                        <LuKanbanSquare className="mx-3 w-6 h-6 text-[#d8dee9]" />
                                        <span className="text-[#d8dee9] text-[.875rem]"> Kanban </span>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="border-b border-t border-[#2e3440] mt-auto pb-2">
                                {/* <li className="list-none mb-2">
                                    <button
                                        type="button"
                                        className="bg-transparent border-0 cursor-pointer pr-2 w-full flex items-center text-[#d8dee9] h-10 p-0 duration-200 transition-color hover:bg-[#2e3440] hover:text-white hover:font-bold"
                                        title="Search">
                                        <CiSearch className="w-6 h-6 text-[#d8dee9] mx-3" />
                                        <span className="cursor-pointer text-[#d8dee9] text-[.875rem] leading-tight"> Search </span>
                                    </button>
                                </li> */}
                                <li className="list-none mb-2">
                                    <Link
                                        className="bg-transparent border-0 cursor-pointer pr-2 w-full flex items-center text-[#d8dee9] h-10 p-0 duration-200 transition-color hover:bg-[#2e3440] hover:text-white hover:font-bold"
                                        title="Team"
                                        href={`/project/${owner}/${projectName}/team`}>
                                        <SlPeople className="w-6 h-6 text-[#d8dee9] mx-3" />
                                        <span className="cursor-pointer text-[#d8dee9] text-[.875rem] leading-tight"> Team </span>
                                    </Link>
                                </li>
                                <li className="list-none mb-2 ng-star-inserted" style={{}}>
                                    <Link
                                        className="bg-transparent border-0 cursor-pointer pr-2 w-full flex items-center text-[#d8dee9] h-10 p-0 duration-200 transition-color hover:bg-[#2e3440] hover:text-white hover:font-bold"
                                        title="Settings"
                                        href={`/project/${owner}/${projectName}/admin/memberships`}>
                                        <CiSettings className="w-6 h-6 text-[#d8dee9] mx-3" />
                                        <span className="cursor-pointer text-[#d8dee9] text-[.875rem] leading-tight"> Settings </span>
                                    </Link>
                                </li>
                            </ul>
                            {/* <button type="button" className="text-[#d8dee9] flex justify-end w-full p-2 text-[.875rem]">
                                <span className="text-[#d8dee9] text-[#d8dee9]"> collapse menu </span>
                                <CiMenuKebab className="bg-[#2e3440] rounded-full text-[#008aa8] w-6 h-6 ml-2 p-1" />
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SidebarProject;