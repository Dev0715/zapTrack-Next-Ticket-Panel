"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

import { InfModProject } from "@/libs/interfaces/model.interface";
import { useProject } from "@/libs/contexts/project.context";

interface SidebarProps {
    owner: string,
    projectName: string
}

const Sidebar = ({ owner, projectName }: SidebarProps) => {
    const projectContext = useProject();
    const [project, setProject] = useState<InfModProject | null>(null);

    useEffect(() => {
        setProject(projectContext.getCurProject());
    }, [projectContext.getCurProject()]);

    return <>
        <div className="w-[250px] bg-[#f9f9fb] p-0 flex-0 min-w-0" style={{ minHeight: `calc(100vh - 48px)` }}>
            <section>
                <nav>
                    <ul className="mb-5">
                        {/* <li className="border-b border-[#a9aabc] uppercase bg-[#f9f9fb] p-0">
                            <a href="#" className="text-[#70728f] block pl-4 py-4">
                                <span className="title">Project</span>
                            </a>
                        </li>
                        <li className="border-b border-[#a9aabc] uppercase bg-[#f9f9fb] p-0">
                            <a href="#" className="text-[#70728f] block pl-4 py-4">
                                <span className="title">Attributes</span>
                            </a>
                        </li> */}
                        <li className="border-b border-[#a9aabc] uppercase bg-white p-0">
                            <Link href={`/project/${owner}/${projectName}/admin/memberships`} className="text-[#008aa8] block pl-4 py-4">
                                <span className="title">Members</span>
                            </Link>
                        </li>
                        {/* <li className="border-b border-[#a9aabc] uppercase bg-[#f9f9fb] p-0">
                            <a href="#" className="text-[#70728f] block pl-4 py-4">
                                <span className="title">Permissions</span>
                            </a>
                        </li>
                        <li className="border-b border-[#a9aabc] uppercase bg-[#f9f9fb] p-0">
                            <a href="#" className="text-[#70728f] block pl-4 py-4">
                                <span className="title">Integrations</span>
                            </a>
                        </li>
                        <li className="border-b border-[#a9aabc] uppercase bg-[#f9f9fb] p-0">
                            <a href="project/johnwindergold71722223-test1-1/admin/contrib/slack" className="text-[#70728f] block pl-4 py-4">
                                <span className="title">Plugins</span>
                            </a>
                        </li> */}
                    </ul>
                </nav>
            </section>
        </div>
    </>
}

export default Sidebar;