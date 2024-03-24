import { NextResponse } from "next/server";

import ProjectMemberModel from "@/models/ProjectMemberModel";

import connectDB from "@/services/connectDB";

interface RequestValue {
    memberId: string,
    role: string,
    projectId: string
}

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { memberId, role, projectId }: RequestValue = await req.json();

    try {
        await ProjectMemberModel.findByIdAndUpdate(memberId, {
            role: role
        });

        const members = await ProjectMemberModel.find({ project_id: projectId });

        return NextResponse.json({
            status: true,
            members: members,
            msg: "Role has changed."
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}