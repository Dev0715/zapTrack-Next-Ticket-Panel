import { NextResponse } from "next/server";

import ProjectMemberModel from "@/models/ProjectMemberModel";

import { InfModProjectMember } from "@/libs/interfaces/model.interface";

import connectDB from "@/services/connectDB";

interface RequestValue {
    projectId: string,
    invitationText: string,
    memberships: Array<InfModProjectMember>
}

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { projectId, invitationText, memberships }: RequestValue = await req.json();

    try {
        let members = await ProjectMemberModel.find({ project_id: projectId });
        const membershipCnt = memberships.length;

        for (let i = 0; i < membershipCnt; i++) {
            const isExist = members.filter(member => member.email === memberships[i].email).length > 0;
            if (!isExist) {
                await ProjectMemberModel.create({
                    project_id: projectId,
                    name: "",
                    email: memberships[i].email,
                    role: memberships[i].role,
                    description: invitationText,
                    is_admin: memberships[i].is_admin,
                    // status: memberships[i].status
                    status: true
                });

                // TODO - Send mail to member
            }
        }

        members = await ProjectMemberModel.find({ project_id: projectId });

        return NextResponse.json({
            status: true,
            members: members,
            msg: "The members created successfully."
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}