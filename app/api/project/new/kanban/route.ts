import { NextResponse } from "next/server";
import ProjectModel from "@/models/ProjectModel";

import connectDB from "@/services/connectDB";

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { userId, name, description, type } = await req.json();

    try {
        let project = await ProjectModel.findOne({ name: name, owner: userId });
        if (project) {
            return NextResponse.json({
                status: false,
                msg: "A project with the same name already exists."
            }, { status: 200 });
        }

        project = await ProjectModel.create({
            owner: userId,
            name,
            description,
            type
        });

        return NextResponse.json({
            status: true,
            project: project,
            msg: "The Kanban project has been created successfully."
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}