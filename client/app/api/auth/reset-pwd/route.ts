import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import moment from "moment"

import UserModel from "@/models/UserModel";
import PasswordVerifyModel from "@/models/PasswordVerifyModel";
import connectDB from "@/services/connectDB";

export async function POST(req: Request, res: Response) {
    await connectDB();

    try {
        let { password, token } = await req.json();
        console.log("token", token);
        let passwordVerify = await PasswordVerifyModel.findOne({ token });

        if (passwordVerify) {
            var today = moment();
            var createdAt = moment(passwordVerify.createdAt);
            if (today.diff(createdAt, "hours") <= 72) {
                let salt = bcrypt.genSaltSync(10);
                password = bcrypt.hashSync(password, salt);
                await UserModel.findOneAndUpdate({ email: passwordVerify.email }, { password: password });
                return NextResponse.json({
                    status: true,
                    msg: "Successfully updated."
                });
            }

            return NextResponse.json({
                status: false,
                msg: "Link has expired."
            });
        }

        return NextResponse.json({
            status: false,
            msg: "Token is invalid."
        });
    } catch (err: any) {
        NextResponse.json({
            status: false,
            msg: err.message
        }, { status: 500 });
    }
}