import { NextResponse } from "next/server";
import crypto from "node:crypto"
import sgMail from "@sendgrid/mail"

import UserModel from "@/models/UserModel";
import PasswordVerifyModel from "@/models/PasswordVerifyModel";
import connectDB from "@/services/connectDB";
import { sendMail } from "@/app/utils/send-mail-aws-ses";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "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");

export async function POST(req: Request, res: Response) {
    await connectDB();

    try {
        let { email } = await req.json();
        let buffer = crypto.randomBytes(30);
        let token = buffer.toString('hex');
        let user = await UserModel.findOne({ email });

        if (!user) {
            return NextResponse.json({
                status: false,
                wrongInfo: true,
                msg: "This email does not exist."
            }, { status: 200 });
        }

        await PasswordVerifyModel.findOneAndUpdate({
            email: email
        }, {
            email: email,
            token: token
        }, {
            upsert: true
        });

        const hostName = process.env.HOSTNAME || "http://localhost:3000";
        const sendGridUser = process.env.SENDGRID_USER || "noreply@answersheet.au";
        const sendGridName = process.env.SENDGRID_NAME || "ZapTrack";

        // console.log(hostName);
        // console.log(sendGridUser);
        // console.log(sendGridName);
        console.log(user.email);
        // console.log(token);

        await sendMail(
            user.email,
            "noreply@answersheet.au",
            "ZapTrack - password reset",
            `
            <div style="background: #fafafa; font-family: sans-serif; max-width: 660px; margin: auto">
                <div style="padding: 10px; margin-bottom: 20px; background: #d6e4f1">
                </div>
                <div style="padding: 10px 20px; border-top: 2px solid #ebebeb; border-bottom: 2px solid #ebebeb;">
                    <h2 style="color: #005492;">Password reset</h2>
                    <p>Hi ${user.username}</p>
                    <p>Click below to reset your password.</p>
                    <div style="padding: 20px;">
                        <a href="${hostName}/reset-password/${token}" style="text-decoration: none; padding: 10px 30px; background: #005492; display: inline-block; color: #fafafa">Reset password</a>
                    </div>
                    <p>This link expires in 72 hours.</p>
                    <p>If you have any questions or didn't make this change, please contact us at support@zaptrack.com</p>
                    <p>Sincerely.</p>
                    <p style="font-weight: 600;">The ZapTrack team</p>
                </div>
                <div style="padding: 10px 20px; font-size: 12px;">
                    <p style="margin-top: 5px; margin-bottom: 5px;">&copy; 2023 ZapTrack Pty Ltd</p>
                    <p style="margin-top: 5px; margin-bottom: 5px;">Our <a href="${hostName}/privacy-policy">Privacy Policy</a> explains how we collect, use, disclose, hold and secure personal information.</p>
                    <p style="margin-top: 5px; margin-bottom: 5px;">Please do not reply to this email.</p>
                </div>
            </div>
            `);

        // await sgMail.send({
        //     to: user.email,
        //     from: {
        //         email: sendGridUser,
        //         name: sendGridName
        //     },
        //     subject: "ZapTrack - password reset",
        //     html: `
        //     <div style="background: #fafafa; font-family: sans-serif; max-width: 660px; margin: auto">
        //         <div style="padding: 10px; margin-bottom: 20px; background: #d6e4f1">
        //         </div>
        //         <div style="padding: 10px 20px; border-top: 2px solid #ebebeb; border-bottom: 2px solid #ebebeb;">
        //             <h2 style="color: #005492;">Password reset</h2>
        //             <p>Hi ${user.username}</p>
        //             <p>Click below to reset your password.</p>
        //             <div style="padding: 20px;">
        //                 <a href="${hostName}/reset-password/${token}" style="text-decoration: none; padding: 10px 30px; background: #005492; display: inline-block; color: #fafafa">Reset password</a>
        //             </div>
        //             <p>This link expires in 72 hours.</p>
        //             <p>If you have any questions or didn't make this change, please contact us at support@zaptrack.com</p>
        //             <p>Sincerely.</p>
        //             <p style="font-weight: 600;">The ZapTrack team</p>
        //         </div>
        //         <div style="padding: 10px 20px; font-size: 12px;">
        //             <p style="margin-top: 5px; margin-bottom: 5px;">&copy; 2023 ZapTrack Pty Ltd</p>
        //             <p style="margin-top: 5px; margin-bottom: 5px;">Our <a href="${hostName}/privacy-policy">Privacy Policy</a> explains how we collect, use, disclose, hold and secure personal information.</p>
        //             <p style="margin-top: 5px; margin-bottom: 5px;">Please do not reply to this email.</p>
        //         </div>
        //     </div>
        //     `
        // });

        return NextResponse.json({
            status: true,
            msg: "If this email is registered with us, check it for a link to reset your password.",
            user: user,
            token: token
        }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json({
            status: false,
            msg: err.message
        }, { status: 500 });
    }
}