"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

import ListProject from "../../_components/ListProject/page";
import { getProjectsByUserId } from "../../../actions/project/user/projects";
import { getItem, LS_USER } from '@/app/utils/localstore';

import { InfModProject } from "@/libs/interfaces/model.interface";

import { useProject } from "@/libs/contexts/project.context";

const Projects = () => {

    const projectObj = useProject();

    const [projects, setProjects] = useState<Array<InfModProject>>([]);

    useEffect(() => {
        const user = JSON.parse(getItem(LS_USER) as string);

        console.log(user);
        console.log(projectObj.getCurProjects());

        getProjectsByUserId(user._id).then((res: any) => {
            const { status, projects } = res;
            if (status) {
                setProjects(projects);
                projectObj.setCurProjects(projects);
            }
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return <>
        <div>
            <div className="w-full h-full relative">
                <div className="relative my-4 mx-auto max-w-[1200px] w-full">
                    <div className="flex items-center bg-[#f1f1f4] justify-between mt-8 mb-4 px-4 py-[14.4px]">
                        <h1 className="text-[1.4rem] text-[#008aa8]">My projects</h1>
                        <div>
                            <Link href="/project/new" title="New project" className="text-[.875rem] mr-[0.25rem] px-10 py-[9.6px] bg-[#83eede] text-[#we3440] duration-300 transition-all rounded inline-flex justify-center text-center uppercase">
                                New project
                            </Link>
                        </div>
                    </div>
                    <section className="flex">
                        <div className="flex-1 mr-8">
                            <ul className="list-none mb-5">
                                {
                                    (projects && projects.length > 0) &&
                                    projects.map((project, idx) =>
                                        <ListProject key={idx} title={project?.name} description={project?.description} isPrivate={!project?.type} owner={project?.owner} />
                                    )
                                }
                            </ul>
                        </div>
                        <aside className="text-[.875rem] text-[#70728f] w-[200px]">
                            <p className="mb-5 leading-normal">Reorder your projects to set at the top the most used ones.<br /> The top 4 projects will appear in the top navigation bar project list</p>
                        </aside>
                    </section>
                </div>
            </div>
        </div>
    </>
}

export default Projects;