import { createContext, useContext, PropsWithChildren, useState } from "react";

interface AttrStatusUserstoryProps {
    project_id: string,
    color: string,
    name: string,
    slug: string,
    is_closed: boolean,
    is_archived: boolean
}

interface ProjectContextValue {
    setProject: ({ project_id, color, name, slug, is_closed, is_archived }: AttrStatusUserstoryProps) => void;
    // getProject: () => AttrStatusUserstoryProps
}

export const ProjectContext = createContext<ProjectContextValue>({
    setProject: () => undefined
})

export const useProject = () => useContext<ProjectContextValue>(ProjectContext);

export const ProjectProvider = (props: PropsWithChildren<unknown>) => {
    const [curProject, setCurProject] = useState<AttrStatusUserstoryProps>();

    const setProject = ({ project_id, color, name, slug, is_closed, is_archived }: AttrStatusUserstoryProps) => {
        setCurProject({ project_id, color, name, slug, is_closed, is_archived });
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