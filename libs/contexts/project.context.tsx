import { createContext, useContext, PropsWithChildren, useState } from "react";

import { InfModAttrStatusUserstory } from "../interfaces/model.interface";

interface ProjectContextValue {
    setCurProject: (project: InfModAttrStatusUserstory) => void;
    getCurProject: () => InfModAttrStatusUserstory | null
}

export const ProjectContext = createContext<ProjectContextValue>({
    setCurProject: () => undefined,
    getCurProject: () => null
})

export const useProject = () => useContext<ProjectContextValue>(ProjectContext);

export const ProjectProvider = (props: PropsWithChildren<unknown>) => {
    const [project, setProject] = useState<InfModAttrStatusUserstory | null>(null);

    const setCurProject = (curProject: InfModAttrStatusUserstory) => {
        setProject(curProject);
    }

    const getCurProject = () => {
        return project;
    }

    return (
        <ProjectContext.Provider
            value={{
                setCurProject,
                getCurProject
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}