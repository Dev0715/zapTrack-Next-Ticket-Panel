"use client"

import { LuKanbanSquare } from "react-icons/lu";
import { CiSearch, CiSettings, CiMenuKebab, CiFilter } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";

import KanbanHeader from "@/app/(project)/_components/KanbanHeader/page";
import KanbanBody from "@/app/(project)/_components/KanbanBody/page";

interface KanbanProps {
    params: {
        projectId: string,
        projectName: string
    }
}

const Kanban = ({ params }: KanbanProps) => {
    console.log(params.projectId);
    console.log(params.projectName);

    return <>
        <div className="flex h-full" style={{ minHeight: `calc(100vh - 48px)` }}>
            <div className="bg-[#3b4252] z-[9]">
                <div className="sticky top-0" style={{ height: `calc(100vh - 48px)` }}>
                    <div className="bg-[#3b4252] flex flex-col h-full left-0 top-0 relative">
                        <div className="h-full overflow-x-hidden overflow-y-auto">
                            <div className="fle flex-col h-full w-[200px]">
                                <h1 className="bg-[#2e3440] m-0 p-4 pl-3 text-[2em]">
                                    <a className="items-center flex text-[#83eede] text-[.875rem] no-underline" title="test1" href="/project/johnwindergold71722223-test1-1/timeline">
                                        <img className="bg-[#d6a1d4] rounded-sm h-6 w-6 mr-3" alt="test1" src="v-1708969004480/images/project-logos/project-logo-05.png" />
                                        <span className=""> test1 </span>
                                    </a>
                                </h1>
                                <ul className="pb-2">
                                    <li className="mb-0">
                                        <a className="text-[#d8dee9] bg-[#2e3440] font-bold flex items-center text-[.875rem] h-10 p-0 duration-200 transition-[background-color]" title="Kanban" href="/project/johnwindergold71722223-test1-1/kanban">
                                            <LuKanbanSquare className="mx-3 w-6 h-6 text-[#d8dee9]" />
                                            <span className="text-[#d8dee9] font-bold text-[.875rem]"> Kanban </span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="border-b border-t border-[#2e3440] mt-auto pb-2">
                                    <li className="list-none mb-2">
                                        <button type="button" className="bg-transparent border-0 cursor-pointer pr-2 w-full flex items-center text-[#d8dee9] text-[.#d8dee9] h-10 p-0 duration-200 transition-[background-color]" title="Search">
                                            <CiSearch className="w-6 h-6 text-[#d8dee9] mx-3" />
                                            <span className="cursor-pointer text-[#d8dee9] text-[.875rem] leading-tight"> Search </span>
                                        </button>
                                    </li>
                                    <li className="list-none mb-2">
                                        <a className="flex items-center text-[#tight] text-[.875rem] h-10 p-0 duration-200 transition-[background-color]" title="Team" href="/project/johnwindergold71722223-test1-1/team">
                                            <SlPeople className="w-6 h-6 text-[#d8dee9] mx-3" />
                                            <span className="cursor-pointer text-[#d8dee9] text-[.875rem] leading-tight"> Team </span>
                                        </a>
                                    </li>
                                    <li className="list-none mb-2 ng-star-inserted" style={{}}>
                                        <a className="flex items-center text-[#d8dee9] text-[.875rem] h-10 p-0 duration-200 transition-[background-color]" title="Settings" href="/project/johnwindergold71722223-test1-1/admin/project-profile/details">
                                            <CiSettings className="w-6 h-6 text-[#d8dee9] mx-3" />
                                            <span className="cursor-pointer text-[#d8dee9] text-[.875rem] leading-tight"> Settings </span>
                                        </a>
                                    </li>
                                </ul>
                                <button type="button" className="text-[#d8dee9] flex justify-end w-full p-2 text-[.875rem]">
                                    <span className="text-[#d8dee9] text-[#d8dee9]"> collapse menu </span>
                                    <CiMenuKebab className="bg-[#2e3440] rounded-full text-[#008aa8] w-6 h-6 ml-2 p-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="flex flex-col max-h-full max-w-full pt-4 pl-4 relative flex-1">
                <div className="bg-white pb-4 pr-4">
                    <header>
                        <h1 className="font-medium text-[1.4rem] mb-4 leading-normal">
                            <span className="text-[#008aa8]">Kanban</span>
                        </h1>
                    </header>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button title="0 filters applied" className="bg-[#f9f9fb] text-[#008aa8] p-2 text-[.875rem] items-center border-0 rounded inline-flex text-center">
                                <CiFilter className="mr-1" />
                                <span>Filters</span>
                            </button>
                            <div className="ml-2 w-[185px] block relative">
                                <input type="search" placeholder="subject or reference" className="text-[16px] pr-[25px] bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 pt-[4.8px] pb-[4.8px] pl-[15.2px] w-full" />
                                <CiSearch className="w-[14px] h-[14px] absolute right-[1rem] top-[9px]" />
                            </div>
                        </div>
                        <div className="baseline">
                            <div className="flex items-center">
                                <div className="font-medium text-[.7rem] text-[#008aa8] mr-2 uppercase">Zoom:</div>
                                <label className="mr-2" title="Compact">
                                    <input type="radio" defaultValue={0} className="hidden p-0" />
                                    <div className="flex items-center bg-[#008aa8] rounded-2xl cursor-pointer w-auto h-4">
                                        <span className="text-[.7rem] text-white px-5">Compact</span>
                                    </div>
                                </label>
                                <label className="mr-2" title="Default">
                                    <input type="radio" defaultValue={1} className="hidden p-0" />
                                    <div className="flex items-center bg-[#d8dee9] rounded-2xl cursor-pointer w-4 h-4">
                                        <span className="text-[.7rem] text-white px-5 hidden" >Default</span>
                                    </div>
                                </label>
                                <label className="mr-2" title="Detailed">
                                    <input type="radio" defaultValue={2} className="hidden p-0" />
                                    <div className="flex items-center bg-[#d8dee9] rounded-2xl cursor-pointer w-4 h-4">
                                        <span className="text-[.7rem] text-white px-5 hidden">Detailed</span>
                                    </div>
                                </label>
                                <label className="mr-2" title="Expanded">
                                    <input type="radio" defaultValue={3} className="hidden p-0" />
                                    <div className="flex items-center bg-[#d8dee9] rounded-2xl cursor-pointer w-4 h-4">
                                        <span className="text-[.7rem] text-white px-5 hidden">Expanded</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid items-start h-full overflow-hidden mt-[1px] gap-x-[1rem] gap-y-[1rem]" style={{ gridTemplateColumns: '10fr' }}>
                    <div className="flex flex-col h-full overflow-hidden w-full">
                        <div className="bg-white basis-[2.75rem] min-h-[2.75rem] relative z-[5]">
                            <div className="flex absolute w-full overflow-visible flex-nowrap">
                                <KanbanHeader title="New" color="#d8dee9" status="" />
                                <KanbanHeader title="Ready" color="#e44057" status="" />
                                <KanbanHeader title="In progress" color="#e47d40" status="" />
                                <KanbanHeader title="Ready for test" color="#e4ce40" status="" />
                                <KanbanHeader title="Done" color="#a8e440" status="" />
                                <KanbanHeader title="Archived" color="#a9aabc" status="" />
                            </div>
                        </div>

                        <div className="flex h-full mt-[1px] overflow-hidden overflow-x-auto text-[1rem] w-full">
                            <div className="flex flex-nowrap">
                                <KanbanBody stories={[]} hint={true} />
                                <KanbanBody stories={[]} />
                                <KanbanBody stories={[]} />
                                <KanbanBody stories={[]} />
                                <KanbanBody stories={[]} />
                                <KanbanBody stories={[]} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="z-[99] bg-[#fffffff2] bottom-0 hidden left-0 transparent fixed right-0 top-0" />
            <div className="bg-[#fffffff2] hidden top-0 left-0 bottom-0 right-0 fixed transparent z-[98]">
                <a className="w-8 h-8 cursor-pointer text-[#5a5b72] absolute right-12 top-12 duration-200 transition-[fill] text-[#088aa8]" title="close">
                    <svg className="icon icon-close" style={{ fill: '' }}>
                        <use xlinkHref="#icon-close" href="#icon-close">
                        </use>
                    </svg>
                </a>
                <form className="ng-pristine ng-invalid ng-invalid-required">
                    <h2 className="title">New bulk insert</h2>
                    <fieldset >
                        <div className="label">Select status</div>
                        <div className="bulk-status-selector-wrapper">
                            <button type="button" className="bulk-status-selector"><span />
                                <svg className="icon icon-arrow-down" style={{ fill: '' }}>
                                    <use xlinkHref="#icon-arrow-down" href="#icon-arrow-down">
                                    </use>
                                </svg>
                            </button>
                            <div className="bulk-status-option-wrapper ng-hide" >
                                <button type="button" className="bulk-status-option">New</button>
                                <button type="button" className="bulk-status-option">Ready</button>
                                <button type="button" className="bulk-status-option">In progress</button>
                                <button type="button" className="bulk-status-option">Ready for test</button>
                                <button type="button" className="bulk-status-option">Done</button>
                                <button type="button" className="bulk-status-option">Archived</button>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="creation-position">
                        <div className="label">Location</div>
                        <div className="creation-position-fields">
                            <label className="custom-radio">
                                <input id="top-backlog" type="radio" defaultValue="bottom" defaultChecked className="ng-pristine ng-untouched ng-valid ng-empty" />
                                <span className="radio-control" />
                                <span className="radio-label">at the bottom</span>
                            </label>
                            <label className="custom-radio">
                                <input id="bottom-backlog" type="radio" defaultValue="top" className="ng-pristine ng-untouched ng-valid ng-empty" />
                                <span className="radio-control" />
                                <span className="radio-label">on top</span>
                            </label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <textarea cols={200} wrap="off" className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" placeholder="One item per line..." />
                    </fieldset>
                    <div className="lb-action-wrapper">
                        <button type="submit" title="Save" className="btn-small js-submit-button">Save</button>
                    </div>
                </form>
            </div> */}
        </div>
    </>
}

export default Kanban;