import { createContext, useContext, PropsWithChildren, useState } from "react";

import { InfModUserstoryStatus } from "../interfaces/model.interface";

interface ProjectContextValue {
    setProject: ({ project_id, color, name, slug, is_closed, is_archived }: InfModUserstoryStatus) => void;
    // getProject: () => InfModUserstoryStatus
}

export const ProjectContext = createContext<ProjectContextValue>({
    setProject: () => undefined
})

export const useProject = () => useContext<ProjectContextValue>(ProjectContext);

export const ProjectProvider = (props: PropsWithChildren<unknown>) => {
    const [curProject, setCurProject] = useState<InfModUserstoryStatus>();

    const setProject = ({ project_id, color, name, slug, is_closed, is_archived }: InfModUserstoryStatus) => {
        // setCurProject({ project_id, color, name, slug, is_closed, is_archived });
    }

    return (
        <ProjectContext.Provider
            value={{
                setProject
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}