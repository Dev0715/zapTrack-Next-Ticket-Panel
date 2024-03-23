"use client"

import { MdClose, MdOutlineAdd } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";

const ModalAddMember = () => {
    return <>
        <div className="flex items-center justify-center opacity-95 transition-opacity duration-300 bg-white fixed top-0 left-0 right-0 bottom-0 z-[98]">
            <button className="w-8 h-8 cursor-pointer block text-[#5a5b72] absolute top-12 right-12 transition-fill duration-200" title="close">
                <MdClose className="w-8 h-8" />
            </button>
            <div className="block max-w-[900px] w-[90%]">
                <h2 className="text-center text-[1.7rem] leading-tight mb-4 text-[#2e3440] font-normal">New Member</h2>
                <div className="block">
                    <form className="flex items-center px-60 relative">
                        <input
                            type="text"
                            placeholder="Filter users or write an email to invite"
                            className="flex-1 mr-1 bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] pr-4 pl-[15.2px] py-[4.8px] w-full" />
                        <span className="text-[.7rem] text-[#70728f] absolute right-[19rem] top-[.5rem]" >Add email</span>
                        <button className="bg-[#434456] rounded-[.25rem] px-3 py-2 transition-background duration-200">
                            <AiOutlineUserAdd className="w-[1.3rem] h-[1.3rem] text-white" />
                        </button>
                    </form>
                    <ul className="grid mt-8" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                    </ul>
                </div>
                <div className="hidden">
                    <form className="border-t border-[#e2e3e9] mx-20" >
                        <ul className="m-0 mb-4">
                            <li className="flex items-center border-b border-[#e2e3e9] justify-between p-4">
                                <div className="flex items-center flex-1">
                                    <span>sacreddevking@gmail.com</span>
                                    <a className="text-[#e44057] ml-4 transition-color duration-200">Remove</a>
                                </div>
                                <select className="basis-[40%] shrink-0 bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 pr-4 pl-[15.2px] py-[4.8px] w-full">
                                    <option>Choose a role</option>
                                    <option label="UX" value={9286422}>UX</option>
                                    <option label="Design" value={9286423}>Design</option>
                                    <option label="Front" value={9286424}>Front</option>
                                    <option label="Back" value={9286425}>Back</option>
                                    <option label="Product Owner" value={9286426}>Product Owner</option>
                                    <option label="Stakeholder" value={9286427}>Stakeholder</option>
                                </select>
                            </li>
                        </ul>
                        <div className="flex items-center justify-center py-4" >
                            <MdOutlineAdd className="w-8 h-8 text-[#434456] transition-fill duration-200" />
                        </div>

                        <textarea
                            placeholder="(Optional) Add a personalized text to the invitation. Tell something lovely to your new members ;-)"
                            maxLength={250}
                            className="min-h-[10rem] bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] pr-4 pl-[15.2px] py-[4.8px] w-full"
                            defaultValue={""} />
                        <button
                            type="button"
                            className="text-[1.1rem] block mb-4 mt-6 p-4 w-full bg-[#83eede] text-[#2e3440] transition-all duration-300"
                        >
                            Invite
                        </button>
                        <p className="text-[.875rem] leading-normal mb-5">
                            If users are already registered on Taiga, they will be added automatically. Otherwise they will receive an invitation.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default ModalAddMember;