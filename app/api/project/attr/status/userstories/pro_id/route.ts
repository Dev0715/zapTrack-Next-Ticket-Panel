import { NextResponse } from "next/server";

import AttrStatusUserstoryModel from "@/models/AttrStatusUserstoryModel";
import connectDB from "@/services/connectDB";

export async function GET(req: Request, res: Response) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get("projectId");

    try {
        let statuses = await AttrStatusUserstoryModel.find({ project_id: projectId });

        return NextResponse.json({
            status: true,
            statuses: statuses,
            msg: ""
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}