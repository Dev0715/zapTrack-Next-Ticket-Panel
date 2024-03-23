"use client"

import { ProjectProvider } from "@/libs/contexts/project.context";

const ProjectLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    return <>
        <ProjectProvider>
            {
                children
            }
        </ProjectProvider>
    </>
}

export default ProjectLayout;