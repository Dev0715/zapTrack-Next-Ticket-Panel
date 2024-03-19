"use client"

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import BtnFormSubmit from "../../_components/BtnFormSubmit/page";
import InputText from "../../_components/InputText/page";

import { resetPwd } from "@/app/actions/auth";
import { validateResetPwdInput } from "../../_utils/validations/users";

interface ResetPasswordProps {
    params: {
        token: string
    }
}

const ResetPassword = ({ params }: ResetPasswordProps) => {
    const router = useRouter();
    const INIT_FORM_DATA = { password: "", password2: "" };

    const [formData, setFormData] = useState(INIT_FORM_DATA);
    const [errors, setErrors] = useState(INIT_FORM_DATA);

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = () => {
        const { isValid, errors } = validateResetPwdInput(formData);
        if (!isValid) {
            setErrors(errors)
            return;
        } else setErrors(errors);

        resetPwd({
            password: formData.password,
            token: params.token
        }).then((res: any) => {
            if (!res?.status) {
                toast.error(res.msg);
            } else {
                toast.success(res.msg);
                router.push("/login");
            }
        }).catch(err => {
        })
    }

    return <>
        <div className="text-center align-baseline">
            <p className="text-white leading-normal mb-5">
                <span >Create a new Taiga pass</span>
                <br />
                <span >And hey, you may want to eat some more iron-rich food, it's good for your brain :P</span>
            </p>
            <div className="mb-4">
                <InputText type="password" name="password" placeholder="New password" error={errors.password} onChange={handleChange} value={formData.password} />
                <InputText type="password" name="password2" placeholder="Re-type new password" error={errors.password2} onChange={handleChange} value={formData.password2} />
                <BtnFormSubmit type="submit" title="Reset Password" label="Reset Password" onClick={handleSubmit} />
            </div>
        </div>
    </>
}

export default ResetPassword;