import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import crypto from "node:crypto";
import sgMail from "@sendgrid/mail"

import UserModel, { SIGNIN_TYPE } from "@/models/UserModel";
import EmailVerifyModel from "@/models/EmailVerifyModel";
import connectDB from "@/services/connectDB";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "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");

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
                    msg: "User already exists."
                }
            }, { status: 200 });
        }

        user = await UserModel.create({
            username: username,
            full_name: full_name,
            email: email,
            password: password,
            signin_type: SIGNIN_TYPE.EMAIL
        });

        let buffer = crypto.randomBytes(30);
        let token = buffer.toString('hex');
        await EmailVerifyModel.create({
            email: user.email,
            token: token
        });

        console.log(token);

        const hostName = process.env.HOSTNAME || "http://localhost:3000";
        const sendGridUser = process.env.SENDGRID_USER || "noreply@answersheet.au";
        const sendGridName = process.env.SENDGRID_NAME || "ZapTrack";

        await sgMail.send({
            to: user.email,
            from: {
                email: sendGridUser,
                name: sendGridName
            },
            subject: "ZapTrack - your account is almost ready.",
            html: `
            <div style="background: #fafafa; font-family: sans-serif; max-width: 660px; margin: auto">
                <div style="padding: 10px; margin-bottom: 20px; background: #d6e4f1">
                </div>
                <div style="padding: 10px 20px; border-top: 2px solid #ebebeb; border-bottom: 2px solid #ebebeb;">
                    <h2 style="color: #005492;">Your account is almost ready</h2>
                    <p>Hi ${user.username}</p>
                    <p>Click below to finish your registration.</p>
                    <div style="padding: 20px;">
                        <a href="${hostName}/verify-email/${token}" style="text-decoration: none; padding: 10px 30px; background: #005492; display: inline-block; color: #fafafa">Validate Email</a>
                    </div>
                    <p>This link expires in 72 hours.</p>
                    <p>If you have any questions or didn't make this change, please contact us at support@zaptrack.com</p>
                    <p>Sincerely.</p>
                    <p style="font-weight: 700;">The ZapTrack team</p>
                </div>
                <div style="padding: 10px 20px; font-size: 12px;">
                    <p style="margin-top: 5px; margin-bottom: 5px;">&copy; 2024 ZapTrack Pty Ltd</p>
                    <p style="margin-top: 5px; margin-bottom: 5px;">Our <a href="${hostName}/privacy-policy">Privacy Policy</a> explains how we collect, use, disclose, hold and secure personal information.</p>
                    <p style="margin-top: 5px; margin-bottom: 5px;">Please do not reply to this email.</p>
                </div>
            </div>
            `
        });

        return NextResponse.json({
            data: {
                status: true,
                msg: "Check your email for a validation link to complete sign up.",
                user: user
            }
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            data: err
        }, { status: 500 });
    }
}