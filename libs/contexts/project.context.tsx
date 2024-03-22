import { createContext, useContext, PropsWithChildren, useState } from "react";

import { InfModAttrStatusUserstory } from "../interfaces/model.interface";

interface ProjectContextValue {
    setProject: ({ project_id, color, name, slug, is_closed, is_archived }: InfModAttrStatusUserstory) => void;
    // getProject: () => InfModAttrStatusUserstory
}

export const ProjectContext = createContext<ProjectContextValue>({
    setProject: () => undefined
})

export const useProject = () => useContext<ProjectContextValue>(ProjectContext);

export const ProjectProvider = (props: PropsWithChildren<unknown>) => {
    const [curProject, setCurProject] = useState<InfModAttrStatusUserstory>();

    const setProject = ({ project_id, color, name, slug, is_closed, is_archived }: InfModAttrStatusUserstory) => {
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