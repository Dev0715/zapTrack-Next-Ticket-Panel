import { createContext, useContext, PropsWithChildren, useState } from "react";

import { InfModProject, InfModRole } from "../interfaces/model.interface";

interface ProjectContextValue {
    setCurProject: (project: InfModProject) => void;
    getCurProject: () => InfModProject | null;
    setCurProjects: (projects: Array<InfModProject>) => void;
    getCurProjects: () => Array<InfModProject>;
    setProjectRoles: (roles: Array<InfModRole>) => void;
    getProjectRoles: () => Array<InfModRole>;
}

export const ProjectContext = createContext<ProjectContextValue>({
    setCurProject: () => undefined,
    getCurProject: () => null,
    setCurProjects: () => undefined,
    getCurProjects: () => [],
    setProjectRoles: () => undefined,
    getProjectRoles: () => []
})

export const useProject = () => useContext<ProjectContextValue>(ProjectContext);

export const ProjectProvider = (props: PropsWithChildren<unknown>) => {
    const [project, setProject] = useState<InfModProject | null>(null);
    const [projects, setProjects] = useState<Array<InfModProject>>([]);
    const [roles, setRoles] = useState<Array<InfModRole>>([]);

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

    const setProjectRoles = (curRoles: Array<InfModRole>) => {
        setRoles(curRoles);
    }

    const getProjectRoles = () => {
        return roles;
    }

    return (
        <ProjectContext.Provider
            value={{
                setCurProject,
                getCurProject,
                setCurProjects,
                getCurProjects,
                setProjectRoles,
                getProjectRoles
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}