"use client"

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

import BtnFormSubmit from "../_components/BtnFormSubmit/page";
import InputText from "../_components/InputText/page";

import { validateForgotPwdInput } from "../_utils/validations/users";
import { forgotPwd } from "@/app/actions/auth";

const ForgotPassword = () => {
    const [formData, setFormData] = useState({ email: "" });
    const [errors, setErrors] = useState({ email: "" });

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event: any) => {
        let { isValid, errors } = validateForgotPwdInput(formData);
        if (!isValid) {
            setErrors(errors);
            return;
        } else setErrors({ email: "" });

        forgotPwd(formData)
            .then((res: any) => {
                if (res?.status) {
                    toast.success(res.msg);
                } else
                    toast.error(res.msg);
            }).catch(err => {

            })
    }

    return <>
        <div className="text-center align-baseline">
            <p className="text-white leading-normal mb-5">
                <span >Oops, did you forget your password?</span>
                <br />
                <span >Enter your username or email to get a new one</span>
            </p>
            <div className="mb-4">
                <InputText tagId="" type="email" name="email" placeholder="Your email" error={errors.email} onChange={handleChange} value={formData.email} />
                <BtnFormSubmit type="submit" title="Reset Password" label="Reset Password" disabled={false} onClick={handleSubmit} />
                <div className="text-[#2e3440] text-[.875rem] mt-8 pb-4 text-center">
                    <Link href={`/login`} className="text-[#2e3440] underline">Nah, take me back. I think I remember it.</Link>
                </div>
            </div>
        </div>
    </>
}

export default ForgotPassword;