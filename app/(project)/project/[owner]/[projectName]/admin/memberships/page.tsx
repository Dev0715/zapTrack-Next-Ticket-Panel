"use client"
import { HiBadgeCheck } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";

import ModalAddMember from "./_components/ModalAddMember/page";

const Memberships = () => {
    return <>
        <div className="w-[250px] bg-[#f9f9fb] p-0 flex-0 min-w-0" style={{ minHeight: `calc(100vh - 48px)` }}>
            <section className="">
                <nav>
                    <ul className="mb-5">
                        <li className="border-b border-[#a9aabc] uppercase bg-[#f9f9fb] p-0">
                            <a href="#" className="text-[#70728f] block pl-4 py-4">
                                <span className="title">Project</span>
                            </a>
                        </li>
                        <li className="border-b border-[#a9aabc] uppercase bg-[#f9f9fb] p-0">
                            <a href="#" className="text-[#70728f] block pl-4 py-4">
                                <span className="title">Attributes</span>
                            </a>
                        </li>
                        <li className="border-b border-[#a9aabc] uppercase bg-white p-0">
                            <a href="project/johnwindergold71722223-test1-1/admin/memberships" className="text-[#008aa8] block pl-4 py-4">
                                <span className="title">Members</span>
                            </a>
                        </li>
                        <li className="border-b border-[#a9aabc] uppercase bg-[#f9f9fb] p-0">
                            <a href="#" className="text-[#70728f] block pl-4 py-4">
                                <span className="title">Permissions</span>
                            </a>
                        </li>
                        <li className="border-b border-[#a9aabc] uppercase bg-[#f9f9fb] p-0">
                            <a href="#" className="text-[#70728f] block pl-4 py-4">
                                <span className="title">Integrations</span>
                            </a>
                        </li>
                        <li className="border-b border-[#a9aabc] uppercase bg-[#f9f9fb] p-0">
                            <a href="project/johnwindergold71722223-test1-1/admin/contrib/slack" className="text-[#70728f] block pl-4 py-4">
                                <span className="title">Plugins</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
        <section className="flex-1 min-w-0 p-4">
            <div className="flex items-center justify-between mb-4">
                <header className="w-full">
                    <header>
                        <h1 className="flex font-medium text-[1.4rem] text-[#008aa8] mb-4 leading-normal">
                            <span>Manage members</span>
                        </h1>
                    </header>
                </header>
                <div className="">
                    <button className="bg-[#83eede] text-[#2e3440] transition-all duration-300 text-[.875rem] inline-flex items-center border-0 rounded justify-center text-center uppercase px-4 py-[7.2px]">
                        + New member
                    </button>
                </div>
            </div>
            <section className="flex flex-col w-full">
                <div className="flex border-b border-[#d6d8e0] flex flex-row flew-nowrap py-[4.8px] text-left w-full">
                    <div className="basis-[210px] grow-[3] min-w-[210px]">Member</div>
                    <div className="basis-0 grow min-w-[70px]">Admin</div>
                    <div className="basis-[210px] grow-[3] min-w-[210px] pl-2">Role</div>
                    <div className="basis-[50px] grow pl-2">Status</div>
                </div>
                <div className="border-b-0 flex items-center flex-row flex-nowrap py-[4.8px] w-full text-left" >
                    <div className="basis-[210px] grow-[3] min-w-[210px]">
                        <div className="items-center flex">
                            <img
                                src="https://www.gravatar.com/avatar/919392c43c7449e35622450c60cb32b4?s=200&d=https%3A%2F%2Ftree.taiga.io%2Fv-1708969004480%2Fimages%2Fuser-avatars%2Fuser-avatar-04.png"
                                alt="aasdfasdfadfsdf"
                                style={{ backgroundColor: 'rgba( 183, 203, 131, 1 )' }}
                                className="rounded grow-0 mr-2 ml-[4.8px] w-[50px] border-2 border-white"
                            />
                            <div className="user-data">
                                <div className="flex items-center justify-center">
                                    <span>aasdfasdfadfsdf</span>
                                    <HiBadgeCheck className="w-4 h-4 ml-1" />
                                </div>
                                <div className="text-[.875rem] text-[#5a5b72] mt-[3.2px]">
                                    <span className="email">a@asdf.com</span>
                                </div>
                            </div>
                        </div></div>
                    <div className="basis-0 grow min-w-[70px]" />
                    <div className="basis-[210px] grow-[3] min-w-[210px] pr-4">
                        <select className="bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 pr-4 pl-[15.2px] py-[4.8px] w-full">
                            <option value={9286422}>
                                UX
                            </option>
                            <option value={9286423}>
                                Design
                            </option>
                            <option value={9286424}>
                                Front
                            </option>
                            <option value={9286425}>
                                Back
                            </option>
                            <option value={9286426}>
                                Product Owner
                            </option>
                            <option value={9286427}>
                                Stakeholder
                            </option>
                        </select>
                    </div>
                    <div className="basis-[50px] grow flex items-center justify-between">
                        <div className="bg-[#e2e3e9] text-[.875rem] items-center flex justify-center min-w-[4rem] px-2 py-[6.4px]">Active</div>
                        <a className="text-[#70728f] transition-fill duration-200 text-[#008aa8]" title="Delete member">
                            <FaRegTrashAlt className="w-4 h-4 text-[#008aa8]" />
                        </a>
                    </div>
                </div>
            </section>
            <div className="hidden" />
        </section>

        <ModalAddMember />
    </>
}

export default Memberships;