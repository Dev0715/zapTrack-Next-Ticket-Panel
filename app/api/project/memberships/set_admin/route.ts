import { NextResponse } from "next/server";

import ProjectMemberModel from "@/models/ProjectMemberModel";

import connectDB from "@/services/connectDB";

interface RequestValue {
    memberId: string,
    is_admin: boolean,
    projectId: string
}

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { memberId, is_admin, projectId }: RequestValue = await req.json();

    try {
        await ProjectMemberModel.findByIdAndUpdate(memberId, {
            is_admin: is_admin
        });

        const members = await ProjectMemberModel.find({ project_id: projectId });

        return NextResponse.json({
            status: true,
            members: members,
            msg: "The ZapTrack saved all your changes."
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}