import { useState } from "react";
import { CiSearch, CiFilter } from "react-icons/ci";

import KanbanHeader from "@/app/(project)/_components/KanbanHeader/page";
import KanbanBody from "@/app/(project)/_components/KanbanBody/page";
import ZoomLabel from "./_components/ZoomLabel/page";

interface SectionKanbanProps {
    handleAddUserstory: any,
    handleAddBulk: any
}

const SectionKanban = ({ handleAddUserstory, handleAddBulk }: SectionKanbanProps) => {
    const [zoom, setZoom] = useState<number>(0);

    return <>
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
                            <ZoomLabel title="Compact" value={0} selected={zoom === 0} handleSelected={() => setZoom(0)} />
                            <ZoomLabel title="Default" value={1} selected={zoom === 1} handleSelected={() => setZoom(1)} />
                            <ZoomLabel title="Detailed" value={2} selected={zoom === 2} handleSelected={() => setZoom(2)} />
                            <ZoomLabel title="Expanded" value={3} selected={zoom === 3} handleSelected={() => setZoom(3)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid items-start h-full overflow-hidden mt-[1px] gap-x-[1rem] gap-y-[1rem]" style={{ gridTemplateColumns: '10fr' }}>
                <div className="flex flex-col h-full overflow-hidden w-full">
                    <div className="bg-white basis-[2.75rem] min-h-[2.75rem] relative z-[5]">
                        <div className="flex absolute w-full overflow-visible flex-nowrap">
                            <KanbanHeader
                                title="New"
                                color="#d8dee9"
                                status=""
                                handleAddUserstory={() => handleAddUserstory()}
                                handleAddBulk={() => handleAddBulk()}
                            />
                            <KanbanHeader
                                title="Ready"
                                color="#e44057"
                                status=""
                                handleAddUserstory={() => handleAddUserstory()}
                                handleAddBulk={() => handleAddBulk()}
                            />
                            <KanbanHeader
                                title="In progress"
                                color="#e47d40"
                                status=""
                                handleAddUserstory={() => handleAddUserstory()}
                                handleAddBulk={() => handleAddBulk()}
                            />
                            <KanbanHeader
                                title="Ready for test"
                                color="#e4ce40"
                                status=""
                                handleAddUserstory={() => handleAddUserstory()}
                                handleAddBulk={() => handleAddBulk()}
                            />
                            <KanbanHeader
                                title="Done"
                                color="#a8e440"
                                status=""
                                handleAddUserstory={() => handleAddUserstory()}
                                handleAddBulk={() => handleAddBulk()}
                            />
                            <KanbanHeader
                                title="Archived"
                                color="#a9aabc"
                                status=""
                                handleAddUserstory={() => handleAddUserstory()}
                                handleAddBulk={() => handleAddBulk()}
                            />
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
    </>
}

export default SectionKanban;