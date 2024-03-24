import { NextResponse } from "next/server";

import ProjectMemberModel from "@/models/ProjectMemberModel";

import { InfModProjectMember } from "@/libs/interfaces/model.interface";

import connectDB from "@/services/connectDB";

interface RequestValue {
    memberId: string,
    projectId: string
}

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { memberId, projectId }: RequestValue = await req.json();

    try {
        await ProjectMemberModel.findByIdAndDelete(memberId);
        let members = await ProjectMemberModel.find({ project_id: projectId });

        return NextResponse.json({
            status: true,
            members: members,
            msg: "Member has been deleted."
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}