import { NextResponse } from "next/server";
import UserModel from "@/models/UserModel";
import connectDB from "@/services/connectDB";

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { email } = await req.json();

    try {
        let user = await UserModel.findOne({ email: email });
        if (user) {
            return NextResponse.json({
                data: {
                    status: true,
                    user: user,
                    msg: "User exists."
                }
            }, { status: 200 });
        }

        return NextResponse.json({
            data: {
                status: false,
                msg: "User does not exist.",
            }
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}