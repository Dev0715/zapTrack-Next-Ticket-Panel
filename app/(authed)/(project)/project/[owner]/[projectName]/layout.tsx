"use client"

import React from "react";

import SidebarProject from "@/app/(authed)/_components/SidebarProject/page";

const ProjectLayout = ({
    children, params
}: {
    children: React.ReactNode;
    params: {
        owner: string,
        projectName: string
    }
}) => {
    return <>
        <div className="flex h-full" style={{ minHeight: `calc(100vh - 48px)` }}>
            <SidebarProject projectName={params.projectName} owner={params.owner} />
            {
                children
            }
        </div>
    </>
}

export default ProjectLayout;