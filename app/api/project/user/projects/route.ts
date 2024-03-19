import { NextResponse } from "next/server";
import ProjectModel from "@/models/ProjectModel";

import connectDB from "@/services/connectDB";

export async function GET(req: Request, res: Response) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    try {
        let projects = await ProjectModel.find({ owner: userId });

        return NextResponse.json({
            status: true,
            projects: projects,
            msg: ""
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}