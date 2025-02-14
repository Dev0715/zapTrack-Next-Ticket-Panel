import { NextResponse } from "next/server";

import ProjectModel from "@/models/ProjectModel";
import RoleModel from "@/models/RoleModel";
import ProjectMemberModel from "@/models/ProjectMemberModel";
import UserStoryModel from "@/models/UserStoryModel";
import AttrStatusUserstoryModel from "@/models/AttrStatusUserstoryModel";

import connectDB from "@/services/connectDB";

export async function GET(req: Request, res: Response) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const projectName = searchParams.get("projectName");

    try {
        let project = await ProjectModel.findOne({ owner: userId, name: projectName });
        let roles = await RoleModel.find({ project_id: project._id });
        let members = await ProjectMemberModel.find({ project_id: project._id });
        let userStories = await UserStoryModel.find({ project_id: project._id });
        let statuses = await AttrStatusUserstoryModel.find({ project_id: project._id });

        return NextResponse.json({
            status: true,
            project: project,
            roles: roles,
            members: members,
            userStories: userStories,
            statuses: statuses,
            msg: ""
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}