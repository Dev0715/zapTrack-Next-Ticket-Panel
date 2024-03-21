import { NextResponse } from "next/server";
import UserStoryModel from "@/models/UserStoryModel";

import connectDB from "@/services/connectDB";

interface RequestValue {
    projectId: string,
    statusId: string,
    location: boolean,
    items: string
}

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { projectId, statusId, location, items }: RequestValue = await req.json();

    try {
        const subjects = items.split("\n");
        const subjectCnt = subjects.length;

        for (let i = 0; i < subjectCnt; i++) {
            await UserStoryModel.create({
                project_id: projectId,
                subject: subjects[i],
                status: statusId,
                location: 1
            });
        }

        return NextResponse.json({
            status: true,
            msg: "The Userstories have been created successfully."
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}