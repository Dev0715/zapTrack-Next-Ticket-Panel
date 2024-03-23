"use client"

import { DiScrum } from "react-icons/di";
import { LuKanbanSquare } from "react-icons/lu";
import { HiDuplicate } from "react-icons/hi";
import { CiImport } from "react-icons/ci";

import CardCreateProject from "../../../_components/CardCreateProject/page";

const CreateProject = () => {
    return <>
        <div>
            <div className="h-full min-h-full relative">
                <div className="my-4 px-5 mx-auto max-w-[800px]">
                    <div className="create-project-wrapper">
                        <h1 className="text-[1.7rem] text-center text-[#008aa8] mb-[1rem] font-medium leading-normal">Create Project</h1>
                        <h3 className="text-center leading-normal font-normal mb-8">Which template fits your project better?</h3>
                        <ul className="mb-5 list-none list-outside">
                            <li className="border-t border-t-[#e2e3e9]">
                                <CardCreateProject
                                    title="Scrum"
                                    desc="Prioritize and solve your tasks in short time cycles."
                                    href="/project/new/scrum"
                                    icon={<DiScrum className="w-9 h-9" />}
                                    help={`Scrum is an iterative and incremental agile software development methodology for managing product development.
                                    The product backlog is what will ultimately be delivered, ordered into the sequence in which it should be delivered. Product Backlogs are broken into manageable, executable chunks named sprints. Every certain amount of time the team initiates a new sprint and commits to deliver a certain number of user stories from the backlog, in accordance with their skills, abilities and resources. The project advances as the backlog becomes depleted.`}
                                />
                            </li>
                            <li>
                                <CardCreateProject
                                    title="Kanban"
                                    desc="Keep a constant workflow on independent tasks"
                                    href="/project/new/kanban"
                                    icon={<LuKanbanSquare className="w-9 h-9" />}
                                    help={`The Kanban methodology is used to divide project development (any sort of project) into stages.
                                    A kanban card is like an index card or post-it note that details every task (or user story) in a project that needs to be completed. The Kanban board is used to move each card from one state of completion to the next and in so doing, helps track progress.`}
                                />
                            </li>
                            <li>
                                <CardCreateProject
                                    title="Duplicate project"
                                    desc="Start clean and keep your configuration"
                                    href="/project/new/duplicate"
                                    icon={<HiDuplicate className="w-9 h-9" />}
                                />
                            </li>
                            <li>
                                <CardCreateProject
                                    title="Import project"
                                    desc="Import your project from multiple platforms into Taiga"
                                    href="/project/new/import"
                                    icon={<CiImport className="w-9 h-9" />}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CreateProject;