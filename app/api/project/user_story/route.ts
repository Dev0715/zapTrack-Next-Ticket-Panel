import { NextResponse } from "next/server";
import UserStoryModel from "@/models/UserStoryModel";

import connectDB from "@/services/connectDB";

export async function GET(req: Request, res: Response) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get("projectId");

    try {
        let userStories = await UserStoryModel.find({ project_id: projectId});

        return NextResponse.json({
            status: true,
            stories: userStories,
            msg: ""
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}