import { useEffect, useState } from "react";
import { CiSearch, CiFilter } from "react-icons/ci";

import KanbanHeader from "@/app/(authed)/_components/KanbanHeader/page";
import KanbanBody from "@/app/(authed)/_components/KanbanBody/page";
import ZoomLabel from "./_components/ZoomLabel/page";

import { InfModProject, InfModAttrStatusUserstory, InfModUserstory } from "@/libs/interfaces/model.interface";
import { getStoriesByProjectId } from "@/app/actions/project/user_story/story";

import { useProject } from "@/libs/contexts/project.context";

interface SectionKanbanProps {
    handleAddUserstory: (status: InfModAttrStatusUserstory) => void,
    handleAddBulk: (status: InfModAttrStatusUserstory) => void,
    handleSetAssign: (userStory: InfModUserstory) => void,
}

const SectionKanban = ({ handleAddUserstory, handleAddBulk, handleSetAssign }: SectionKanbanProps) => {
    const projectContext = useProject();

    const [zoom, setZoom] = useState<number>(0);
    const [userStories, setUserStories] = useState<Array<InfModUserstory>>([]);
    const [storyStatuses, setStoryStatuses] = useState<Array<InfModAttrStatusUserstory>>([]);

    useEffect(() => {
        setUserStories(projectContext.getUserStories());
    }, [projectContext.getUserStories()]);

    useEffect(() => {
        setStoryStatuses(projectContext.getUserStoryStatuses());
    }, [projectContext.getUserStoryStatuses()]);

    // useEffect(() => {
    //     if (project === null)
    //         return;

    //     getStoriesByProjectId(project._id).then((res: any) => {
    //         const { status, stories } = res;
    //         if (status)
    //             setUserStories(stories);
    //     });
    // }, [project]);

    return <>
        <section className="flex flex-col max-h-full max-w-full pt-4 pl-4 relative flex-1">
            <div className="bg-white pb-4 pr-4">
                <header>
                    <h1 className="font-medium text-[1.4rem] mb-4 leading-normal">
                        <span className="text-[#008aa8]">Kanban</span>
                    </h1>
                </header>
                <div className="flex items-center justify-between">
                    {/* <div className="flex items-center">
                        <button title="0 filters applied" className="bg-[#f9f9fb] text-[#008aa8] p-2 text-[.875rem] items-center border-0 rounded inline-flex text-center">
                            <CiFilter className="mr-1" />
                            <span>Filters</span>
                        </button>
                        <div className="ml-2 w-[185px] block relative">
                            <input type="search" placeholder="subject or reference" className="text-[16px] pr-[25px] bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 pt-[4.8px] pb-[4.8px] pl-[15.2px] w-full" />
                            <CiSearch className="w-[14px] h-[14px] absolute right-[1rem] top-[9px]" />
                        </div>
                    </div> */}
                    {/* <div className="baseline">
                        <div className="flex items-center">
                            <div className="font-medium text-[.7rem] text-[#008aa8] mr-2 uppercase">Zoom:</div>
                            <ZoomLabel title="Compact" value={0} selected={zoom === 0} handleSelected={() => setZoom(0)} />
                            <ZoomLabel title="Default" value={1} selected={zoom === 1} handleSelected={() => setZoom(1)} />
                            <ZoomLabel title="Detailed" value={2} selected={zoom === 2} handleSelected={() => setZoom(2)} />
                            <ZoomLabel title="Expanded" value={3} selected={zoom === 3} handleSelected={() => setZoom(3)} />
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="grid items-start h-full overflow-hidden mt-[1px] gap-x-[1rem] gap-y-[1rem]" style={{ gridTemplateColumns: '10fr' }}>
                <div className="flex flex-col h-full overflow-hidden w-full">
                    <div className="bg-white basis-[2.75rem] min-h-[2.75rem] relative z-[5]">
                        <div className="flex absolute w-full overflow-visible flex-nowrap">
                            {
                                storyStatuses.map((status, idx) =>
                                    <KanbanHeader
                                        key={idx}
                                        status={status}
                                        handleAddUserstory={(status) => handleAddUserstory(status)}
                                        handleAddBulk={(status) => handleAddBulk(status)}
                                    />
                                )
                            }
                        </div>
                    </div>

                    <div className="flex h-full mt-[1px] overflow-hidden overflow-x-auto text-[1rem] w-full">
                        <div className="flex flex-nowrap">
                            {
                                storyStatuses.map((status, idx) =>
                                    <KanbanBody
                                        key={idx}
                                        status={status}
                                        hint={idx === 0 && userStories.length === 0}
                                        userStories={userStories}
                                        handleSetAssign={(userStory) => handleSetAssign(userStory)}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default SectionKanban;