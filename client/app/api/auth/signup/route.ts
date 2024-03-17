import { NextResponse, type NextRequest } from "next/server";
import bcrypt from "bcrypt"

import UserModel, { SIGNIN_TYPE } from "@/models/UserModel";
import connectDB from "@/services/connectDB";

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { username, full_name, email, password } = await req.json();

    try {
        let salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, salt);
        let user = await UserModel.findOne({ email: email });
        if (user) {
            return NextResponse.json({
                data: {
                    status: false,
                    msg: "Username is already in use"
                }
            }, { status: 200 });
        }

        user = await UserModel.create({
            username: username,
            full_name: full_name,
            email: email,
            password: password,
            signin_type: SIGNIN_TYPE.EMAIL
        })

        return NextResponse.json({
            data: {
                status: true,
                msg: "Your credential created successfully.",
                user: user
            }
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}