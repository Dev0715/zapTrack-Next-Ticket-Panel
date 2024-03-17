import { NextResponse, type NextRequest } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import UserModel from "@/models/UserModel";
import connectDB from "@/services/connectDB";

export async function POST(req: Request, res: Response) {
    await connectDB();

    let { email, password } = await req.json();

    try {
        let user = await UserModel.findOne({ email: email });

        if (!user) {
            return NextResponse.json({
                data: {
                    status: false,
                    msg: "Your email or password are incorrect."
                }
            });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return NextResponse.json({
                data: {
                    status: false,
                    msg: "Your email or password are incorrect."
                }
            })
        }

        let token = jwt.sign({
            userId: user._id,
            email: user.email
        }, process.env.LOGIN_HASH_TOKEN as string, {
            expiresIn: "3h"
        });

        return NextResponse.json({
            data: {
                status: true,
                user,
                token,
                msg: "Successfully logged in."
            }
        });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}