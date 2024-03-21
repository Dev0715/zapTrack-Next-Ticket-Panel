"use client"

import { useEffect, useState } from "react";

import SidebarProject from "@/app/(project)/_components/SidebarProject/page";
import SectionKanban from "@/app/(project)/_components/SectionKanban/page";
import ModalUserstoryCreate from "@/app/(project)/_components/ModalUserstoryCreate/page";
import ModalBulkCreate from "@/app/(project)/_components/ModalBulkCreate/page";

import { UserStoryStatus } from "@/libs/interfaces/model.interface";

import { getProjectByUserIdAndProName } from "@/app/actions/project/user/projects";
import { getStatusesByProId } from "@/app/actions/project/attrs/userstories";

interface KanbanProps {
    params: {
        owner: string,
        projectName: string
    }
}

const Kanban = ({ params }: KanbanProps) => {
    const [isShowStoryModal, setShowStoryModal] = useState(false);
    const [isShowBulkModal, setShowBulkModal] = useState(false);
    const [curStoryStatus, setCurStoryStatus] = useState<UserStoryStatus>({
        _id: "",
        project_id: "",
        color: "",
        name: "?",
        slug: "",
        is_closed: false,
        is_archived: false
    });
    const [project, setProject] = useState<any>(null);
    const [storyStatuses, setStoryStatuses] = useState<any>([]);

    useEffect(() => {
        getProjectByUserIdAndProName(params.owner, params.projectName).then((res: any) => {
            const { status, project } = res;
            if (status) {
                setProject(project);
            }
        }).catch(err => { });
    }, []);

    useEffect(() => {
        if (project === null)
            return;

        getStatusesByProId(project._id).then((res: any) => {
            const { status, statuses } = res;
            console.log(statuses);
            if (status)
                setStoryStatuses(statuses);
        }).catch(err => { });
    }, [project]);

    const showStoryModal = (status: UserStoryStatus) => {
        setCurStoryStatus(status);
        setShowStoryModal(true);
    }

    const hideStoryModal = () => {
        setShowStoryModal(false);
    }

    const showBulkModal = (status: UserStoryStatus) => {
        setCurStoryStatus(status);
        setShowBulkModal(true);
    }

    const hideBulkModal = () => {
        setShowBulkModal(false);
    }

    return <>
        <div className="flex h-full" style={{ minHeight: `calc(100vh - 48px)` }}>
            <SidebarProject projectName={params.projectName} />

            <SectionKanban
                handleAddUserstory={(status) => showStoryModal(status)}
                handleAddBulk={(status) => showBulkModal(status)}
                storyStatuses={storyStatuses}
            />

            <ModalUserstoryCreate show={isShowStoryModal} hideStoryModal={hideStoryModal} />

            <ModalBulkCreate show={isShowBulkModal} storyStatus={curStoryStatus} storyStatuses={storyStatuses} hideBulkModal={hideBulkModal} />
        </div>
    </>
}

export default Kanban;