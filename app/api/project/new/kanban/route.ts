import { NextResponse } from "next/server";
import ProjectModel from "@/models/ProjectModel";
import AttrStatusUserstoryModel from "@/models/AttrStatusUserstoryModel";
import RoleModel from "@/models/RoleModel";

import connectDB from "@/services/connectDB";

async function seedProject(projectId: any) {
    // --- AttrStatusUserstory --- 
    const attrStatuses = [
        { color: `#70728F`, name: `New`, slug: `new`, is_closed: false, is_archived: false },
        { color: `#E44057`, name: `Ready`, slug: `ready`, is_closed: false, is_archived: false },
        { color: `#E47C40`, name: `In progress`, slug: `in-progress`, is_closed: false, is_archived: false },
        { color: `#E4CE40`, name: `Ready for test`, slug: `ready-for-test`, is_closed: false, is_archived: false },
        { color: `#A8E440`, name: `Done`, slug: `done`, is_closed: true, is_archived: false },
        { color: `#A9AABC`, name: `Archived`, slug: `archived`, is_closed: true, is_archived: true },
    ];
    const attrStatusCnt = attrStatuses.length;
    for (let i = 0; i < attrStatusCnt; i++) {
        await AttrStatusUserstoryModel.create({
            project_id: projectId,
            color: attrStatuses[i].color,
            name: attrStatuses[i].name,
            slug: attrStatuses[i].slug,
            is_closed: attrStatuses[i].is_closed,
            is_archived: attrStatuses[i].is_archived
        });
    }

    // --- Role --- 
    const roles = [
        {
            name: `UX`, epic_view: true, epic_add: true, epic_modify: true, epic_comment: true, epic_delete: true, sprint_view: true, sprint_add: true, sprint_modify: true, sprint_delete: true, userstory_view: true, userstory_add: true, userstory_modify: true, userstory_comment: true, userstory_delete: true, task_view: true, task_add: true, task_modify: true, task_comment: true, task_delete: true, issue_view: true, issue_add: true, issue_modify: true, issue_comment: true, issue_delete: true, wiki_view: true, wiki_add: true, wiki_modify: true, wiki_delete: true, wiki_link_add: true, wiki_link_delete: true, wiki_link_view: true, role_involve: true,
        },
        {
            name: `Design`, epic_view: true, epic_add: true, epic_modify: true, epic_comment: true, epic_delete: true, sprint_view: true, sprint_add: true, sprint_modify: true, sprint_delete: true, userstory_view: true, userstory_add: true, userstory_modify: true, userstory_comment: true, userstory_delete: true, task_view: true, task_add: true, task_modify: true, task_comment: true, task_delete: true, issue_view: true, issue_add: true, issue_modify: true, issue_comment: true, issue_delete: true, wiki_view: true, wiki_add: true, wiki_modify: true, wiki_delete: true, wiki_link_add: true, wiki_link_delete: true, wiki_link_view: true, role_involve: true,
        },
        {
            name: `Front`, epic_view: true, epic_add: true, epic_modify: true, epic_comment: true, epic_delete: true, sprint_view: true, sprint_add: true, sprint_modify: true, sprint_delete: true, userstory_view: true, userstory_add: true, userstory_modify: true, userstory_comment: true, userstory_delete: true, task_view: true, task_add: true, task_modify: true, task_comment: true, task_delete: true, issue_view: true, issue_add: true, issue_modify: true, issue_comment: true, issue_delete: true, wiki_view: true, wiki_add: true, wiki_modify: true, wiki_delete: true, wiki_link_add: true, wiki_link_delete: true, wiki_link_view: true, role_involve: true,
        },
        {
            name: `Back`, epic_view: true, epic_add: true, epic_modify: true, epic_comment: true, epic_delete: true, sprint_view: true, sprint_add: true, sprint_modify: true, sprint_delete: true, userstory_view: true, userstory_add: true, userstory_modify: true, userstory_comment: true, userstory_delete: true, task_view: true, task_add: true, task_modify: true, task_comment: true, task_delete: true, issue_view: true, issue_add: true, issue_modify: true, issue_comment: true, issue_delete: true, wiki_view: true, wiki_add: true, wiki_modify: true, wiki_delete: true, wiki_link_add: true, wiki_link_delete: true, wiki_link_view: true, role_involve: true,
        },
        {
            name: `Product Owner`, epic_view: true, epic_add: true, epic_modify: true, epic_comment: true, epic_delete: true, sprint_view: true, sprint_add: true, sprint_modify: true, sprint_delete: true, userstory_view: true, userstory_add: true, userstory_modify: true, userstory_comment: true, userstory_delete: true, task_view: true, task_add: true, task_modify: true, task_comment: true, task_delete: true, issue_view: true, issue_add: true, issue_modify: true, issue_comment: true, issue_delete: true, wiki_view: true, wiki_add: true, wiki_modify: true, wiki_delete: true, wiki_link_add: true, wiki_link_delete: true, wiki_link_view: true, role_involve: false,
        },
        {
            name: `Shakeholder`, epic_view: true, epic_add: false, epic_modify: false, epic_comment: true, epic_delete: false, sprint_view: true, sprint_add: false, sprint_modify: false, sprint_delete: false, userstory_view: true, userstory_add: false, userstory_modify: false, userstory_comment: true, userstory_delete: false, task_view: true, task_add: false, task_modify: false, task_comment: true, task_delete: false, issue_view: true, issue_add: true, issue_modify: true, issue_comment: true, issue_delete: true, wiki_view: true, wiki_add: false, wiki_modify: true, wiki_delete: false, wiki_link_add: true, wiki_link_delete: true, wiki_link_view: true, role_involve: false,
        },
        {
            name: `External User`, epic_view: false, epic_add: false, epic_modify: false, epic_comment: false, epic_delete: false, sprint_view: true, sprint_add: false, sprint_modify: false, sprint_delete: false, userstory_view: true, userstory_add: false, userstory_modify: false, userstory_comment: false, userstory_delete: false, task_view: true, task_add: false, task_modify: false, task_comment: false, task_delete: false, issue_view: true, issue_add: false, issue_modify: false, issue_comment: false, issue_delete: false, wiki_view: false, wiki_add: false, wiki_modify: false, wiki_delete: false, wiki_link_add: false, wiki_link_delete: false, wiki_link_view: false, role_involve: false,
        },
    ];
    const roleCnt = roles.length;
    for (let i = 0; i < roleCnt; i++) {
        await RoleModel.create({
            project_id: projectId,
            name: roles[i].name,
            epic_view: roles[i].epic_view,
            epic_add: roles[i].epic_add,
            epic_modify: roles[i].epic_modify,
            epic_comment: roles[i].epic_comment,
            epic_delete: roles[i].epic_delete,
            sprint_view: roles[i].sprint_view,
            sprint_add: roles[i].sprint_add,
            sprint_modify: roles[i].sprint_modify,
            sprint_delete: roles[i].sprint_delete,
            userstory_view: roles[i].userstory_view,
            userstory_add: roles[i].userstory_add,
            userstory_modify: roles[i].userstory_modify,
            userstory_comment: roles[i].userstory_comment,
            userstory_delete: roles[i].userstory_delete,
            task_view: roles[i].task_view,
            task_add: roles[i].task_add,
            task_modify: roles[i].task_modify,
            task_comment: roles[i].task_comment,
            task_delete: roles[i].task_delete,
            issue_view: roles[i].issue_view,
            issue_add: roles[i].issue_add,
            issue_modify: roles[i].issue_modify,
            issue_comment: roles[i].issue_comment,
            issue_delete: roles[i].issue_delete,
            wiki_view: roles[i].wiki_view,
            wiki_add: roles[i].wiki_add,
            wiki_modify: roles[i].wiki_modify,
            wiki_delete: roles[i].wiki_delete,
            wiki_link_add: roles[i].wiki_link_add,
            wiki_link_delete: roles[i].wiki_link_delete,
            wiki_link_view: roles[i].wiki_link_view,
            role_involve: roles[i].role_involve
        });
    }
}

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { userId, name, description, type } = await req.json();

    try {
        let project = await ProjectModel.findOne({ name: name, owner: userId });
        if (project) {
            return NextResponse.json({
                status: false,
                msg: "A project with the same name already exists."
            }, { status: 200 });
        }

        project = await ProjectModel.create({
            owner: userId,
            name,
            description,
            type
        });

        await seedProject(project._id);

        return NextResponse.json({
            status: true,
            project: project,
            msg: "The Kanban project has been created successfully."
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}