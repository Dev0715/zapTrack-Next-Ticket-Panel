"use client"

import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { toast } from "sonner";

import { createBulk } from "@/app/actions/project/new/kanban/bulk";
import { InfModAttrStatusUserstory } from "@/libs/interfaces/model.interface";
import { useProject } from "@/libs/contexts/project.context";

interface ModalBulkCreateProps {
    show: boolean,
    hideBulkModal: () => void,
    storyStatus: InfModAttrStatusUserstory,
}

const ModalBulkCreate = ({ show, hideBulkModal, storyStatus }: ModalBulkCreateProps) => {
    const projectContext = useProject();

    const [userstoryStatues, setUserstoryStatues] = useState<Array<InfModAttrStatusUserstory>>([]);
    const [popupShown, setPopupShown] = useState<boolean>(false);
    const [curStatus, setCurStatus] = useState<InfModAttrStatusUserstory>(storyStatus);
    const [location, setLocation] = useState<boolean>(false);
    const [items, setItems] = useState<string>("");
    const [itemError, setItemError] = useState<string>("");

    useEffect(() => {
        setUserstoryStatues(projectContext.getUserStoryStatuses());
    }, [projectContext.getUserStoryStatuses()]);

    useEffect(() => {
        setCurStatus(storyStatus);
    }, [storyStatus]);

    const handleChangeStatus = (status: InfModAttrStatusUserstory) => {
        setCurStatus(status);
        setPopupShown(false);
    }

    const handleChangeItems = (e: any) => {
        setItems(e.target.value);
    }

    const handleSave = () => {
        if (curStatus.name === "?") {
            toast.error("Please select the correct status.");
            return;
        }

        if (items === "") {
            setItemError("This value is required.");
            return;
        } else setItemError("");

        createBulk({
            projectId: curStatus.project_id,
            statusId: curStatus._id,
            location,
            items
        }).then((res: any) => {
            const { status, userstories, msg } = res;
            if (status) {
                toast.success(msg);
                projectContext.setUserStories(userstories);
                hideBulkModal();
            }
        });
    }

    return <>
        <div className={`items-center justify-center transition-opacity duration-300 bg-white opacity-95 fixed top-0 left-0 right-0 bottom-0 z-[98] ${show ? `flex` : `hidden`} `}>
            <div className="inline">
                <button
                    className="w-8 h-8 top-12 right-12 absolute text-[#5a5b72] cursor-pointer transition-fill duration-200"
                    title="close"
                    onClick={hideBulkModal}>
                    <MdClose className="w-8 h-8" />
                </button>
            </div>
            <form className="basis-[600px] grow-0 max-w-[600px]">
                <h2 className="text-center text-[1.7rem] leading-tight mb-4 text-[#2e3440] font-normal">New bulk insert</h2>
                <fieldset className="mb-4 relative w-full">
                    <div className="text-[.7rem] text-[#2e3440] mb-1 uppercase">Select status</div>
                    <div className="relative">
                        <button type="button" className="bg-[#e44057] text-[.875rem] border-2 border-transparent rounded-[3px] text-white flex justify-between px-4 py-1 w-full"
                            onClick={() => setPopupShown(!popupShown)}>
                            <span>{curStatus.name}</span>
                            <RiArrowDownSLine className="w-4 h-4" />
                        </button>
                        <div className={`bg-white border border-[#d8dee9] rounded p-2 absolute w-full z-[2] ${popupShown ? `block` : `hidden`}`}
                            style={{ boxShadow: `4px 4px 8px rgba(216,222,233,.5)`, top: `calc(1.5rem + 4px)` }}>
                            {
                                userstoryStatues.map((status, idx) =>
                                    <button
                                        type="button"
                                        key={idx}
                                        className={`text-[.875rem] text-[${curStatus._id === status._id ? `#70728f` : `#008aa8`}] cursor-pointer p-1 text-left w-full`}
                                        onClick={() => handleChangeStatus(status)}
                                    >
                                        {status.name}
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <div className="text-[.7rem] text-[#2e3440] mb-1 uppercase">Location</div>
                    <div className="flex">
                        <label className="flex self-center mr-2 text-[.875rem] text-[#505c74]"
                            onClick={() => setLocation(false)}>
                            <input type="radio" defaultValue="bottom" defaultChecked className="w-0 opacity-0 h-0" />
                            <span
                                className={`border-2 border-[#d8dee9] rounded-full grid h-[18px] mt-[3px] mr-1 w-[18px] place-items-center 
                                ${!location && `before:scale-100 before:bg-[#008aa8] before:rounded-full before:block before:h-2 before:w-2 before:content-[''] before:transition-transform before:duration-200`}`}
                                style={{ transform: `translateY(-.06rem)` }}
                            />
                            <span className={`text-[${location ? `#505c74` : `#008aa8`}]`}>at the bottom</span>
                        </label>
                        <label className="flex self-center mr-2 text-[.875rem] text-[#505c74]"
                            onClick={() => setLocation(true)}>
                            <input type="radio" defaultValue="top" className="w-0 opacity-0 h-0" />
                            <span
                                className={`border-2 border-[#d8dee9] rounded-full grid h-[18px] mt-[3px] mr-1 w-[18px] place-items-center 
                                ${location && `before:scale-100 before:bg-[#008aa8] before:rounded-full before:block before:h-2 before:w-2 before:content-[''] before:transition-transform before:duration-200`}`}
                                style={{ transform: `translateY(-.06rem)` }} />
                            <span className={`text-[${!location ? `#505c74` : `#008aa8`}]`}>on top</span>
                        </label>
                    </div>
                </fieldset>

                <fieldset className="mb-4 relative w-full">
                    <textarea
                        cols={200}
                        className={`max-h-[12rem] min-h-[15rem] bg-white border-2 ${itemError === "" ? `border-[#d8dee9]` : `border-[rgba(228,64,87,.25)]`} rounded-[3px] text-[#4c566a] m-0 w-full pr-4 pl-[15.2px] py-[4.8px]`}
                        placeholder="One item per line..."
                        defaultValue={items}
                        value={items}
                        onChange={e => handleChangeItems(e)}
                    />
                    <span className="p-[0.2rem]">{itemError}</span>
                </fieldset>
                <div className="flex justify-end">
                    <button
                        type="button"
                        title="Save"
                        className="bg-[#83eede] text-[#2e3440] transition-all duration-300 px-4 py-[7.2px] text-[.875rem] items-center border-0 rounded inline-flex justify-center uppercase text-center"
                        onClick={() => handleSave()}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    </>
}

export default ModalBulkCreate;