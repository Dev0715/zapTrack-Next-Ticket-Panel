"use client"

import Link from "next/link";
import Validator from 'validator'
import { useState } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";

import InputText from "../_components/InputText/page";
import authService from "../../../../services/authService";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = (event: any) => {
        setEmail(event.target.value);
    }

    const onSubmit = (event: any) => {
        let isValid = true;
        if (Validator.isEmpty(email)) {
            setError("This value is required.")
            isValid = false;
        } else if (!Validator.isEmail(email)) {
            setError("Enter a valid email address.")
            isValid = false;
        }

        if (!isValid)
            return;

        authService.forgotPwd({
            email: email
        }).then(res => {
            if (!res.status) {
                toast.error(res.msg);
            } else {
                toast.success(res.msg);
                redirect("/reset-password");
            }
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
                <InputText tagId="" type="email" name="email" placeholder="Your email" error={error} onChange={handleChange} value={email} />
                {/* <fieldset className="mb-2 relative w-full">
                    <input type="text" name="username" placeholder="Username or email" className="bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] py-[4.8px] pr-4 pl-[15.2px] w-full" />
                </fieldset> */}
                <fieldset className="mb-2 w-full relative">
                    <button title="Reset Password" className="w-full bg-[#83eede] text-[#2e3440] text-[.875rem] items-center bordernone rounded inline-flex justify-center tet-center uppercase px-4 py-[7.2px]" onClick={onSubmit}>Reset Password</button>
                </fieldset>
                <div className="text-[#2e3440] text-[.875rem] mt-8 pb-4 text-center">
                    <Link href={`/login`} className="text-[#2e3440] underline">Nah, take me back. I think I remember it.</Link>
                </div>
            </div>
        </div>
    </>
}

export default ForgotPassword;