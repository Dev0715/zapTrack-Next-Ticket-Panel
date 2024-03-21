"use client"

import { useEffect, useState } from "react";

import SidebarProject from "@/app/(project)/_components/SidebarProject/page";
import SectionKanban from "@/app/(project)/_components/SectionKanban/page";
import ModalUserstoryCreate from "@/app/(project)/_components/ModalUserstoryCreate/page";
import ModalBulkCreate from "@/app/(project)/_components/ModalBulkCreate/page";

interface KanbanProps {
    params: {
        owner: string,
        projectName: string
    }
}

const Kanban = ({ params }: KanbanProps) => {
    const [isShowStoryModal, setShowStoryModal] = useState(false);
    const [isShowBulkModal, setShowBulkModal] = useState(false);
    const [storyStatus, setStoryStatus] = useState<number>(0);

    useEffect(() => {
    }, []);

    const showStoryModal = (status: number) => {
        setStoryStatus(status);
        setShowStoryModal(true);
    }

    const hideStoryModal = () => {
        setShowStoryModal(false);
    }

    const showBulkModal = () => {
        setShowBulkModal(true);
    }

    const hideBulkModal = () => {
        setShowBulkModal(false);
    }

    return <>
        <div className="flex h-full" style={{ minHeight: `calc(100vh - 48px)` }}>
            <SidebarProject projectName={params.projectName} />

            <SectionKanban
                handleAddUserstory={showStoryModal}
                handleAddBulk={showBulkModal}
            />

            <ModalUserstoryCreate show={isShowStoryModal} status={storyStatus} hideStoryModal={hideStoryModal} />

            <ModalBulkCreate show={isShowBulkModal} hideBulkModal={hideBulkModal} />
        </div>
    </>
}

export default Kanban;