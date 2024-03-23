import { createContext, useContext, PropsWithChildren, useState } from "react";

import { InfModProject } from "../interfaces/model.interface";

interface ProjectContextValue {
    setCurProject: (project: InfModProject) => void;
    getCurProject: () => InfModProject | null;
    setCurProjects: (projects: Array<InfModProject>) => void;
    getCurProjects: () => Array<InfModProject>;
}

export const ProjectContext = createContext<ProjectContextValue>({
    setCurProject: () => undefined,
    getCurProject: () => null,
    setCurProjects: () => undefined,
    getCurProjects: () => []
})

export const useProject = () => useContext<ProjectContextValue>(ProjectContext);

export const ProjectProvider = (props: PropsWithChildren<unknown>) => {
    const [project, setProject] = useState<InfModProject | null>(null);
    const [projects, setProjects] = useState<Array<InfModProject>>([]);

    const setCurProject = (curProject: InfModProject) => {
        setProject(curProject);
    }

    const getCurProject = () => {
        return project;
    }

    const setCurProjects = (curProjects: Array<InfModProject>) => {
        setProjects(curProjects);
    }

    const getCurProjects = () => {
        return projects;
    }

    return (
        <ProjectContext.Provider
            value={{
                setCurProject,
                getCurProject,
                setCurProjects,
                getCurProjects
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}