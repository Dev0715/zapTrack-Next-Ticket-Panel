import { createContext, useContext, PropsWithChildren, useState } from "react";

import { InfModProject, InfModRole, InfModProjectMember, InfModUserstory, InfModAttrStatusUserstory } from "../interfaces/model.interface";

interface ProjectContextValue {
    setCurProject: (project: InfModProject) => void;
    getCurProject: () => InfModProject | null;
    setCurProjects: (projects: Array<InfModProject>) => void;
    getCurProjects: () => Array<InfModProject>;
    setProjectRoles: (roles: Array<InfModRole>) => void;
    getProjectRoles: () => Array<InfModRole>;
    setProjectMembers: (members: Array<InfModProjectMember>) => void;
    getProjectMembers: () => Array<InfModProjectMember>;
    setUserStories: (stories: Array<InfModUserstory>) => void;
    getUserStories: () => Array<InfModUserstory>;
    setUserStoryStatuses: (statues: Array<InfModAttrStatusUserstory>) => void;
    getUserStoryStatuses: () => Array<InfModAttrStatusUserstory>;
}

export const ProjectContext = createContext<ProjectContextValue>({
    setCurProject: () => undefined,
    getCurProject: () => null,
    setCurProjects: () => undefined,
    getCurProjects: () => [],
    setProjectRoles: () => undefined,
    getProjectRoles: () => [],
    setProjectMembers: () => undefined,
    getProjectMembers: () => [],
    setUserStories: () => undefined,
    getUserStories: () => [],
    setUserStoryStatuses: () => undefined,
    getUserStoryStatuses: () => []
})

export const useProject = () => useContext<ProjectContextValue>(ProjectContext);

export const ProjectProvider = (props: PropsWithChildren<unknown>) => {
    const [project, setProject] = useState<InfModProject | null>(null);
    const [projects, setProjects] = useState<Array<InfModProject>>([]);
    const [roles, setRoles] = useState<Array<InfModRole>>([]);
    const [members, setmembers] = useState<Array<InfModProjectMember>>([]);
    const [curUserStories, setCurUserStories] = useState<Array<InfModUserstory>>([]);
    const [curUserStoryStatues, setCurUserStoryStatues] = useState<Array<InfModAttrStatusUserstory>>([]);

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

    const setProjectMembers = (curMembers: Array<InfModProjectMember>) => {
        setmembers(curMembers);
    }

    const getProjectMembers = () => {
        return members;
    }

    const setUserStories = (userStories: Array<InfModUserstory>) => {
        setCurUserStories(userStories);
    }

    const getUserStories = () => {
        return curUserStories;
    }

    const setUserStoryStatuses = (statues: Array<InfModAttrStatusUserstory>) => {
        setCurUserStoryStatues(statues);
    }

    const getUserStoryStatuses = () => {
        return curUserStoryStatues;
    }

    return (
        <ProjectContext.Provider
            value={{
                setCurProject,
                getCurProject,
                setCurProjects,
                getCurProjects,
                setProjectRoles,
                getProjectRoles,
                setProjectMembers,
                getProjectMembers,
                setUserStories,
                getUserStories,
                setUserStoryStatuses,
                getUserStoryStatuses
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}