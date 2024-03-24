import { NextResponse } from "next/server";

import ProjectMemberModel from "@/models/ProjectMemberModel";

import connectDB from "@/services/connectDB";

interface RequestValue {
    memberId: string,
    email: string,
    projectId: string,
    desc: string
}

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { memberId, email, projectId, desc }: RequestValue = await req.json();

    try {
        // TODO - Send mail to member

        return NextResponse.json({
            status: true,
            msg: `We've sent invitation to ${email}`
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}