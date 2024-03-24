"use client"

import { useState, useEffect } from "react";

import ModalAddMember from "./_components/ModalAddMember/page";
import Sidebar from "../_components/Sidebar/page";
import ItemMember from "./_components/ItemMember/page";

import { useProject } from "@/libs/contexts/project.context";
import { InfModProjectMember } from "@/libs/interfaces/model.interface";

const Memberships = () => {
    const projectContext = useProject();

    const [addModalShown, setAddModalShown] = useState<boolean>(false);
    const [members, setMembers] = useState<Array<InfModProjectMember>>([]);

    useEffect(() => {
        let projectMembers = projectContext.getProjectMembers();
        setMembers(projectMembers);
    }, [projectContext.getProjectMembers()])

    const showAddModal = () => {
        setAddModalShown(true);
    }

    const hideAddModal = () => {
        setAddModalShown(false);
    }

    return <>
        <Sidebar />
        <section className="flex-1 min-w-0 p-4">
            <div className="flex items-center justify-between mb-4">
                <header className="w-full">
                    <header>
                        <h1 className="flex font-medium text-[1.4rem] text-[#008aa8] mb-4 leading-normal">
                            <span>Manage members</span>
                        </h1>
                    </header>
                </header>
                <div>
                    <button
                        className="bg-[#83eede] text-[#2e3440] transition-all duration-300 text-[.875rem] inline-flex items-center border-0 rounded justify-center text-center uppercase px-4 py-[7.2px]"
                        onClick={() => showAddModal()}
                    >
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
                {
                    members.map((member, idx) => <ItemMember key={idx} member={member} />)
                }
            </section>
            <div className="hidden" />
        </section>

        <ModalAddMember shown={addModalShown} hideAddModal={hideAddModal} />
    </>
}

export default Memberships;