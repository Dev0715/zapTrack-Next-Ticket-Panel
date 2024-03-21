import { NextResponse } from "next/server";
import ProjectModel from "@/models/ProjectModel";
import AttrStatusUserstoryModel from "@/models/AttrStatusUserstoryModel";

import connectDB from "@/services/connectDB";

async function seedProject(projectId: any) {
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