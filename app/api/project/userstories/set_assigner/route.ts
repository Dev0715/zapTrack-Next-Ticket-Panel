import { NextResponse } from "next/server";

import UserStoryModel from "@/models/UserStoryModel";

import connectDB from "@/services/connectDB";

interface RequestValue {
    userStoryId: string,
    memberEmail: string,
    projectId: string
}

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { userStoryId, memberEmail, projectId }: RequestValue = await req.json();

    try {
        await UserStoryModel.findByIdAndUpdate(userStoryId, {
            assigner: memberEmail
        });

        let userstories = await UserStoryModel.find({ project_id: projectId });

        return NextResponse.json({
            status: true,
            userstories: userstories,
            msg: "The assigner has been set up successfully."
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}