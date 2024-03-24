"use client"

import { useEffect, useState } from "react";

import SectionKanban from "@/app/(authed)/_components/SectionKanban/page";
import ModalUserstoryCreate from "@/app/(authed)/_components/ModalUserstoryCreate/page";
import ModalBulkCreate from "@/app/(authed)/_components/ModalBulkCreate/page";
import ModalSelectAssigner from "@/app/(authed)/_components/ModalSelectAssigner/page";

import { InfModAttrStatusUserstory, InfModProject, InfModUserstory } from "@/libs/interfaces/model.interface";
import { getProjectByUserIdAndProName } from "@/app/actions/project/user/projects";
import { useProject } from "@/libs/contexts/project.context";

interface KanbanProps {
    params: {
        owner: string,
        projectName: string
    }
}

const Kanban = ({ params }: KanbanProps) => {
    const projectContext = useProject();

    const [isShowStoryModal, setShowStoryModal] = useState(false);
    const [isShowBulkModal, setShowBulkModal] = useState(false);
    const [isShowAssignModal, setShowAssignModal] = useState(false);
    const [curStoryStatus, setCurStoryStatus] = useState<InfModAttrStatusUserstory>({
        _id: "",
        project_id: "",
        color: "",
        name: "?",
        slug: "",
        is_closed: false,
        is_archived: false
    });
    const [curUserstory, setCurUserstory] = useState<InfModUserstory | null>(null);
    const [project, setProject] = useState<InfModProject | null>(null);
    const [storyStatuses, setStoryStatuses] = useState<any>([]);

    useEffect(() => {
        getProjectByUserIdAndProName(params.owner, params.projectName).then((res: any) => {
            const { status, project, roles, members, userStories, statuses } = res;
            if (status) {
                setProject(project);
                projectContext.setCurProject(project);
                projectContext.setProjectRoles(roles);
                projectContext.setProjectMembers(members);
                projectContext.setUserStories(userStories);
                projectContext.setUserStoryStatuses(statuses);
            }
        }).catch(err => { });
    }, []);

    const showStoryModal = (status: InfModAttrStatusUserstory) => {
        setCurStoryStatus(status);
        setShowStoryModal(true);
    }

    const hideStoryModal = () => {
        setShowStoryModal(false);
    }

    const showBulkModal = (status: InfModAttrStatusUserstory) => {
        setCurStoryStatus(status);
        setShowBulkModal(true);
    }

    const hideBulkModal = () => {
        setShowBulkModal(false);
    }

    const showAssignModal = (userStory: InfModUserstory) => {
        setCurUserstory(userStory);
        setShowAssignModal(true);
    }

    const hideAssignModal = () => {
        setShowAssignModal(false);
    }

    return <>
        <SectionKanban
            handleAddUserstory={(status) => showStoryModal(status)}
            handleAddBulk={(status) => showBulkModal(status)}
            handleSetAssign={(userStory) => showAssignModal(userStory)}
        />

        <ModalUserstoryCreate show={isShowStoryModal} hideStoryModal={hideStoryModal} />

        <ModalBulkCreate show={isShowBulkModal} storyStatus={curStoryStatus} storyStatuses={storyStatuses} hideBulkModal={hideBulkModal} />

        <ModalSelectAssigner show={isShowAssignModal} hideAssignModal={hideAssignModal} userStory={curUserstory} />
    </>
}

export default Kanban;