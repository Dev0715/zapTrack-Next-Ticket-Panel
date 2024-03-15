"use client"

import { useState } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";

import InputText from "../_components/InputText/page";
import authService from "../../../../services/authService";
import { validateResetPwdInput } from "../../../../utils/validations/users";

const ResetPassword = () => {
    const [formData, setFormData] = useState({ password: "", password2: "" });
    const [error, setError] = useState({ password: "", password2: "" });
    const [token, setToken] = useState("");

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const onSubmit = () => {
        const { isValid, errors } = validateResetPwdInput(formData);
        if (!isValid) {
            setError(errors)
            return;
        }

        authService.resetPwd({
            password: formData.password,
            token: token
        }).then(res => {
            if (!res?.status) {
                toast.error(res.msg);
            } else {
                toast.success(res.msg);
                redirect("/login");
            }
        }).catch(err => {

        });
    }

    return <>
        <div className="text-center align-baseline">
            <p className="text-white leading-normal mb-5">
                <span >Create a new Taiga pass</span>
                <br />
                <span >And hey, you may want to eat some more iron-rich food, it's good for your brain :P</span>
            </p>
            <div className="mb-4">
                <InputText tagId="" type="password" name="password" placeholder="New password" error={error.password} onChange={handleChange} value={formData.password} />
                <InputText tagId="" type="password" name="password2" placeholder="Re-type new password" error={error.password2} onChange={handleChange} value={formData.password2} />
                <fieldset className="flex mb-2 justify-end border-0 p-0 m-0 relative w-full">
                    <button
                        type="submit"
                        title="Reset Password"
                        className={`w-full bg-[#83eede] text-[#2e3440] px-4 py-[0.45rem] text-[.875rem] items-center border-0 rounded inline-flex justify-center text-center uppercase hover:text-white hover:bg-[#008aa8]`}
                        style={{ transition: 'all .3s linear' }}
                        onClick={() => onSubmit()}
                    >
                        Reset Password
                    </button>
                </fieldset>
            </div>
        </div>
    </>
}

export default ResetPassword;