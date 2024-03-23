"use client"

import { ProjectProvider } from "@/libs/contexts/project.context";

const ProjectLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return <>
        <ProjectProvider>
            <div>
                <div className="h-full min-h-full relative">
                    {children}
                </div>
            </div>
        </ProjectProvider>
    </>
}

export default ProjectLayout;