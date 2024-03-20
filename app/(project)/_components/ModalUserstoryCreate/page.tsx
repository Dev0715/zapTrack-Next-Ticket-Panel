import Link from "next/link";
import { MdClose, MdOutlineAdd } from "react-icons/md";
import { RiArrowDownSLine, RiTeamFill } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { IoBagSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

interface ModalUserstoryCreateProps {
    show?: boolean,
    hideStoryModal: any
}

const ModalUserstoryCreate = ({ show, hideStoryModal }: ModalUserstoryCreateProps) => {
    return <>
        <div className={`items-center justify-center transition-opacity duration-300 z-[99] bg-white opacity-95 fixed top-0 bottom-0 left-0 right-0 ${show ? `flex` : `hidden`} `}>
            <div className="inline">
                <button
                    className="w-8 h-8 cursor-pointer text-[#5aab72] absolute top-12 right-12 transition-colors duration-200"
                    title="close"
                    onClick={() => hideStoryModal()}
                >
                    <MdClose className="w-8 h-8" />
                </button>
            </div>
            <form className="basis-[700px] max-w-[700px] w-[700px] grow-0">
                <h2 className="text-center text-[1.7rem] leading-tight mb-4 text-[#2e3440] text-normal">
                    <span >New user story</span>
                </h2>
                <div className="hidden text-[#f9f9fb] border-b border-[#008aa8] mb-4 w-full">
                    <div className="">
                        <input type="radio" name="related-with-selector" id="add-existing" defaultValue="add-existing" className="hidden" />
                        <label htmlFor="text-medium text-[.875rem] text-[#70728f] cursor-pointer block px-6 py-2 relative top-[1px]" >
                            <span className="name">LIGHTBOX.CREATE_EDIT.EXISTING_US</span>
                        </label>
                    </div>
                    <div className="">
                        <input type="radio" name="related-with-selector" id="new" defaultValue="new" className="hidden" />
                        <label htmlFor="bg-white border border-[#008aa8] border border-[#008aa8] border-b-white rounded-tl rounded-tr text-[#008aa8] top-[1px] relative px-6 py-2 cursor-pointer" >
                            <span className="name">New user story</span>
                        </label>
                    </div>
                </div>

                <div>
                    <div className="flex mb-4 w-[700px]">
                        <div className="flex-1 p-4">
                            <fieldset className="relative mb-4 border-0 m-0 p-0 w-full">
                                <input type="text" name="subject" placeholder="Subject" className="bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 pr-4 pl-[15.2px] py-[4.8px] w-full" />
                            </fieldset>
                            <fieldset className="relative mb-4 border-0 m-0 p-0 w-full">
                                <div className="w-full flex flex-wrap content-center">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <button title="Add tag" className="bg-[#f9f9fb] text-[#008aa8] p-2 text-[.875rem] items-center border-0 rounded inline-flex justify-center text-center">
                                            <span>Add tag</span>
                                            <MdOutlineAdd className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="relative mb-4 border-0 m-0 p-0 w-full">
                                <textarea rows={7} name="description" className="min-h-[13rem] bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 pr-4 pl-[15.2px] py-[4.8px] w-full" placeholder="Please add descriptive text to help others better understand this user story" />
                            </fieldset>
                            <fieldset className="relative mb-4 border-0 m-0 p-0 w-full">
                                <section />
                                <section className="mb-0 ">
                                    <div className="flex items-center justify-between bg-[#eceff4] min-h-9">
                                        <h3 className="text-[1rem] text-[#4c566a] leading-9 px-4 text-normal">
                                            <span>0</span>
                                            <span>Attachments</span>
                                        </h3>
                                        <div title="Add new attachment. ">
                                            <button type="button" className="bg-[#83eede] text-[#2e3440] p-2 text-[.875rem] items-center rounded border-0 inline-flex justify-center text-center uppercase">
                                                <MdOutlineAdd className="w-4 h-4" />
                                            </button>
                                            <input id="add-attach" type="file" className="hidden" />
                                        </div>
                                    </div>
                                    <div className="border-3 border-dashed border-[#eceff4] mt-2 p-4 text-center transition-all duration-200">
                                        <div>Drop attachments here!</div>
                                    </div>
                                    <div className="max-h-[7.5rem] overflow-y-auto">
                                    </div>
                                </section>
                            </fieldset>
                        </div>
                        <div className="shrink-0 ml-4 px-4 pb-4 max-w-[300px]" style={{ flexBasis: `calc(200px + 2rem)`, minWidth: `calc(200px + 2rem)`, width: `calc(200px + 2rem)` }}>
                            <fieldset className="flex relative mb-4">
                                <div className="bg-[#70728F] rounded-[3px] text-white cursor-pointer flex justify-between px-3 py-2 w-full">
                                    <span>New</span>
                                    <RiArrowDownSLine className="text-white w-[0.9rem] h-[0.9rem]" />
                                </div>
                                <ul className="text-[.875rem] bg-white border border-[#d8dee9] rounded text-[#008aa8] hidden m-0 p-2 absolute top-8 z-[2] w-[203px]"
                                    style={{ boxShadow: `4px 4px 8px rgba(46,52,64,.1)` }}>
                                    <li className="mb-1">
                                        <Link title="New" href="#" className="flex items-center text-[#008aa8] min-h-[1.5rem] overflow-hidden text-ellipsis transition-all duration-[250] p-1">
                                            <span className="item-text">New</span>
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link title="Ready" href="#" className="flex items-center text-[#008aa8] min-h-[1.5rem] overflow-hidden text-ellipsis transition-all duration-[250] p-1">
                                            <span className="item-text">Ready</span>
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link title="In progress" href="#" className="flex items-center text-[#008aa8] min-h-[1.5rem] overflow-hidden text-ellipsis transition-all duration-[250] p-1">
                                            <span className="item-text">In progress</span>
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link title="Ready for test" href="#" className="flex items-center text-[#008aa8] min-h-[1.5rem] overflow-hidden text-ellipsis transition-all duration-[250] p-1">
                                            <span className="item-text">Ready for test</span>
                                        </Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link title="Done" href="#" className="flex items-center text-[#008aa8] min-h-[1.5rem] overflow-hidden text-ellipsis transition-all duration-[250] p-1">
                                            <span className="item-text">Done</span>
                                        </Link>
                                    </li>
                                    <li >
                                        <Link title="Archived" href="#" className="flex items-center text-[#008aa8] min-h-[1.5rem] overflow-hidden text-ellipsis transition-all duration-[250] p-1">
                                            <span className="item-text">Archived</span>
                                        </Link>
                                    </li>
                                </ul>
                            </fieldset>
                            <div>
                                <div >
                                    <section className="mb-4">
                                        <div className="text-[.7rem] text-[#2e3440] mb-1 uppercase">Location</div>
                                        <div className="flex justify-between pr-[3.2px]">
                                            <label className="flex self-center text-[.875rem] text-[#505c74] pl-1">
                                                <input type="radio" defaultValue="bottom" className="h-0 opacity-0 w-0" />
                                                <span className="border-2 border-[#d8dee9] rounded-full grid h-[18px] mr-1 place-items-center w-[18px]"
                                                    style={{ transform: `translateY(-.06rem)` }} />
                                                <span className="text-[#008aa8]">at the bottom</span>
                                            </label>
                                            <label className="flex self-center text-[.875rem] text-[#505c74] pl-1">
                                                <input type="radio" defaultValue="top" className="h-0 opacity-0 w-0" />
                                                <span className="border-2 border-[#d8dee9] rounded-full grid h-[18px] mr-1 place-items-center w-[18px]"
                                                    style={{ transform: `translateY(-.06rem)` }} />
                                                <span className="text-[#008aa8]">on top</span>
                                            </label>
                                        </div>
                                    </section>
                                    <section className="mb-4">
                                        <div className="relative">
                                            <div className="mt-1">
                                                <div className="flex items-center py-1 w-full">
                                                    <div className="basis-[3rem] mr-1 max-h-[3rem] max-w-[3rem]">
                                                        <img alt="undefined" src="https://tree.taiga.io/v-1708969004480/images/unnamed.png" title="undefined" className="w-[3rem] h-[3rem]" />
                                                    </div>
                                                    <div className="grow-1 ml-2">
                                                        <Link title="Edit assignment" href="#" className="text-[#008aa8] relative">
                                                            <span>Assign</span>
                                                        </Link>&nbsp;<span className="text-[#5a5b72]">or</span>&nbsp;
                                                        <Link href="#" title="Assign to me" className="text-[#008aa8]">
                                                            <span>Assign to me</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-[.875rem] bg-white border border-[#d8dee9] rounded text-[#008aa8] hidden left-0 m-0 p-2 absolute top-[60px] w-[203px] z-[2]"
                                                style={{ boxShadow: `4px 4px 8px rgba(46,52,64,.1)` }}>
                                                <input type="text" placeholder="Search for users" className="mb-2 bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 pr-4 pl-[15.2px] py-[4.8px] w-full" />
                                                <Link title="aasdfasdfadfsdf" href="#" className="flex items-center h-auto mb-1 min-h-[2rem] p-1">
                                                    <img className="rounded-full mr-2 h-[1.75rem] w-[1.75rem]" />
                                                    <span title="aasdfasdfadfsdf" className="text-[#4c566a] grow-1 min-w-0 overflow-hidden relative text-ellipsis flex-initial">aasdfasdfadfsdf</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </section>
                                    <div>
                                        <div className="text-[.7rem] text-[#2e3440] mb-1 uppercase">
                                            <span>Points</span>
                                        </div>
                                        <ul className="flex flex-col">
                                            <li title="UX" className="text-[.875rem] bg-[#f9f9fb] flex justify-between mb-[1.6px] min-h-[2rem] p-2 relative cursor-pointer">
                                                <span tg-loading="false" className="">UX</span>
                                                <span className="text-[#4c566a] overflow-hidden text-ellipsis">?</span>
                                            </li>
                                            <li title="Design" className="text-[.875rem] bg-[#f9f9fb] flex justify-between mb-[1.6px] min-h-[2rem] p-2 relative cursor-pointer">
                                                <span tg-loading="false" className="">Design</span>
                                                <span className="text-[#4c566a] overflow-hidden text-ellipsis">?</span>
                                            </li>
                                            <li title="Front" className="text-[.875rem] bg-[#f9f9fb] flex justify-between mb-[1.6px] min-h-[2rem] p-2 relative cursor-pointer">
                                                <span tg-loading="false" className="">Front</span>
                                                <span className="text-[#4c566a] overflow-hidden text-ellipsis">?</span>
                                            </li>
                                            <li title="Back" className="text-[.875rem] bg-[#f9f9fb] flex justify-between mb-[1.6px] min-h-[2rem] p-2 relative cursor-pointer">
                                                <span tg-loading="false" className="">Back</span>
                                                <span className="text-[#4c566a] overflow-hidden text-ellipsis">?</span>
                                            </li>
                                            <li className="bg-[#e5e9f0] border-b-0 text-[.875rem] text-[#70728f] flex justify-between mb-[1.6px] min-h-[2rem] p-2 relative">
                                                <span className="role">total points</span>
                                                <span className="text-[#4c566a] overflow-hidden pl-4 text-ellipsis">?</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="justify-left mt-4 flex items-center">
                                        <div className="flex relative">
                                            <button className="bg-[#eceff4] text-[#008aa8] mr-2 p-3 cursor-pointer text-[.875rem] items-center border-0 rounded inline-flex justify-center text-center uppercase" title="Set due date">
                                                <FaRegClock className="w-4 h-4" />
                                            </button>
                                            <input type="hidden" className="hidden" />
                                            <div className="hidden bg-white border border-[#5a5b72] left-0 absolute top-8 w-auto z-[2] ">
                                                <div className="overflow-visible">
                                                    <div className="absolute hidden min-w-[240px] w-auto z-[99] p-2 text-[#333] bg-white border border-[#ccc] border-b-[#bbb]"
                                                        style={{ boxShadow: `0 5px 15px -5px rgba(0,0,0,.5)` }} />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" title="A team requirement is a requirement that must exist in the project but should have no cost for the client"
                                            className="bg-[#eceff4] text-[#008aa8] p-3 mr-2 text-[.875rem] items-center border-0 rounded inline-flex justify-center text-center uppercase">
                                            <RiTeamFill className="w-4 h-4" />
                                        </button>
                                        <button type="button" title="A client requirement is a new requirement that was not previously expected and is required to be part of the project"
                                            className="bg-[#eceff4] text-[#008aa8] mr-2 p-3">
                                            <IoBagSharp className="w-4 h-4" />
                                        </button>
                                        <button type="button" title="Block this item, for example if it has a dependency that can not be satisfied"
                                            className="bg-[#eceff4] text-[#008aa8] mr-2 p-3">
                                            <FaLock className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <fieldset className="mt-2 mb-4 relative hidden">
                                <input type="text" name="blocked_note" className="bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 pr-4 pl-[15.2px] py-[4.8px] w-full" placeholder="Why is this blocked?" />
                            </fieldset>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="w-full px-6 py-3 text-[.875rem] items-center bg-[#83eed3] border-0 rounded text-[#2e3440] inline-flex justify-center text-center uppercase">
                            <span>Create</span>
                        </button>
                    </div>
                </div>
            </form>
        </div >
    </>
}

export default ModalUserstoryCreate;