import { NextResponse } from "next/server";
import ProjectModel from "@/models/ProjectModel";

import connectDB from "@/services/connectDB";

export async function GET(req: Request, res: Response) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const projectName = searchParams.get("projectName");

    try {
        let project = await ProjectModel.findOne({ owner: userId, name: projectName });

        return NextResponse.json({
            status: true,
            project: project,
            msg: ""
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}