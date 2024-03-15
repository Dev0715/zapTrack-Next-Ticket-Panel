import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import moment from "moment"
import crypto from "node:crypto"
import nodemailer from "nodemailer"

import UserModel, { SIGNIN_TYPE } from "../../models/UserModel.js";
import PasswordVerifyModel from "../../models/PasswordVerifyModel.js";

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
    },
});

export const getUser = async (req, res) => {
    let data = req.body;
    console.log(data);

    res.json({
        success: false,
    });
}

export const signIn = async (req, res) => {
    let { username, password } = req.body;
    try {
        let user = await UserModel.findOne({ email: username });

        if (user == null) {
            return res.json({
                status: false,
                msg: "Your username/email or password are incorrect."
            });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.json({
                status: false,
                msg: "Your username/email or password are incorrect."
            })
        }

        let token = jwt.sign({
            userId: user._id, email: user.email
        }, process.env.LOGIN_HASH_TOKEN, {
            expiresIn: "24h"
        });

        res.json({
            status: true,
            user,
            token,
            msg: "Successfully logged in."
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

export const signUp = async (req, res) => {
    let data = req.body;
    console.log(data);

    try {
        let salt = bcrypt.genSaltSync(10);
        data.password = bcrypt.hashSync(data.password, salt);
        let user = await UserModel.findOne({ email: data.email });

        if (user) {
            return res.json({
                success: false,
                msg: "Username is already in use."
            })
        }

        data.signin_type = SIGNIN_TYPE.EMAIL;
        user = await UserModel.create(data);

        // Send Mail To User

        return res.json({
            success: true,
            msg: "Check your email for a validation link to complete sign up.",
            user: user
        })
    } catch (err) {
        return res.json({
            success: false,
            msg: err.message
        });
    }
}

export const forgotPwd = async (req, res) => {
    try {
        let { email } = req.body;
        let buffer = await crypto.randomBytes(30);
        let token = buffer.toString('hex');
        let user = await UserModel.findOne({ email });

        if (!user) {
            return res.json({
                status: false,
                wrongInfo: true,
                msg: "If this email is registered with us, check it for a link to reset your password."
            });
        }

        await PasswordVerifyModel.findOneAndUpdate({
            email: email
        }, {
            email: email,
            token: token
        }, {
            upsert: true
        });

        // let mailOptions = {
        //     from: "sacreddevking@gmail.com",
        //     to: email,
        //     subject: 'Nodemailer Project',
        //     text: 'Hi from your nodemailer project'
        // };

        // const info = await transporter.sendMail({
        //     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        //     to: "bar@example.com, baz@example.com", // list of receivers
        //     subject: "Hello ✔", // Subject line
        //     text: "Hello world?", // plain text body
        //     html: "<b>Hello world?</b>", // html body
        // });

        // await sgMail.send({
        //     to: user.email,
        //     from: {
        //         email: global.env.SENDGRID_USER,
        //         name: global.env.SENDGRID_NAME
        //     },
        //     subject: "AnswerSheet - password reset",
        //     html: `
        //     <div style="background: #fafafa; font-family: sans-serif; max-width: 660px; margin: auto">
        //         <div style="padding: 10px; margin-bottom: 20px; background: #d6e4f1">
        //             <img src="${global.env.HOSTNAME}/logo.png" />
        //         </div>
        //         <div style="padding: 10px 20px; border-top: 2px solid #ebebeb; border-bottom: 2px solid #ebebeb;">
        //             <h2 style="color: #005492;">Password reset</h2>
        //             <p>Hi ${user.firstName}</p>
        //             <p>Click below to reset your password.</p>
        //             <div style="padding: 20px;">
        //                 <a href="${global.env.HOSTNAME}/reset-password/${token}" style="text-decoration: none; padding: 10px 30px; background: #005492; display: inline-block; color: #fafafa">Reset password</a>
        //             </div>
        //             <p>This link expires in 72 hours.</p>
        //             <p>If you have any questions or didn't make this change, please contact us at support@answersheet.au</p>
        //             <p>Sincerely.</p>
        //             <p style="font-weight: 600;">The AnswerSheet team</p>
        //         </div>
        //         <div style="padding: 10px 20px; font-size: 12px;">
        //             <p style="margin-top: 5px; margin-bottom: 5px;">&copy; 2023 AnswerSheet Pty Ltd</p>
        //             <p style="margin-top: 5px; margin-bottom: 5px;">Our <a href="${global.env.HOSTNAME}/privacy-policy">Privacy Policy</a> explains how we collect, use, disclose, hold and secure personal information.</p>
        //             <p style="margin-top: 5px; margin-bottom: 5px;">Please do not reply to this email.</p>
        //         </div>
        //     </div>
        //     `
        // });
        res.json({
            status: true,
            msg: "Check your email for a validation link to complete sign up.",
            user: user,
            token: token
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}

export const resetPwd = async (req, res) => {
    try {
        let { password, token } = req.body;
        console.log("token", token);
        let passwordVerify = await PasswordVerifyModel.findOne({ token });

        if (passwordVerify) {
            var today = moment();
            var createdAt = moment(passwordVerify.createdAt);
            if (today.diff(createdAt, "hours") <= 72) {
                let salt = bcrypt.genSaltSync(10);
                password = bcrypt.hashSync(password, salt);
                await UserModel.findOneAndUpdate({ email: passwordVerify.email }, { password: password });
                return res.json({
                    status: true,
                    msg: "Successfully updated."
                });
            }

            return res.json({
                status: false,
                msg: "Link has expired."
            });
        }

        return res.json({
            status: false,
            msg: "Token is invalid."
        });
    } catch (err) {
        res.json({
            status: false,
            msg: err.message
        });
    }
}