import { NextResponse } from "next/server";
import moment from "moment"
import jwt from "jsonwebtoken";

import UserModel from "@/models/UserModel";
import EmailVerifyModel from "@/models/EmailVerifyModel";
import connectDB from "@/services/connectDB";

export async function POST(req: Request, res: Response) {
    await connectDB();

    try {
        let { token } = await req.json();
        console.log("token", token);
        let verify = await EmailVerifyModel.findOne({ token });

        if (verify) {
            var today = moment();
            var createdAt = moment(verify.createdAt);
            if (today.diff(createdAt, "hours") <= 72) {
                await UserModel.findOneAndUpdate({ email: verify.email }, { status: true });
                let user = await UserModel.findOne({ email: verify.email });
                let token = jwt.sign({
                    userId: user._id, email: user.email
                }, process.env.LOGIN_HASH_TOKEN as string, { expiresIn: "24h" });
                
                return NextResponse.json({
                    status: true,
                    user: user,
                    token: token,
                    msg: "Registration has been completed."
                });
            }

            return NextResponse.json({
                status: false,
                msg: "Token is already expired."
            });
        }

        return NextResponse.json({
            status: false,
            msg: "Link has expired."
        });
    } catch (err: any) {
        NextResponse.json({
            status: false,
            msg: err.message
        }, { status: 500 });
    }
}