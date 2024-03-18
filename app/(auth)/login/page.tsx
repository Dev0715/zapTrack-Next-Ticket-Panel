"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCsrfToken, getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

import BtnFormSubmit from "../_components/BtnFormSubmit/page";
import BtnOAuth from "../_components/BtnOAuth/page";
import InputText from "../_components/InputText/page";
import InputTextLink from "../_components/InputTextLink/page";

import { validateLoginInput } from "../_utils/validations/users";

const Login = () => {
    let isErrorMsg = false;
    const initFormData = { email: "", password: "" };

    const [providers, setProviders] = useState<null | any>([]);
    const [csrfToken, setCsrfToken] = useState<string | undefined>("");
    const [formData, setFormData] = useState(initFormData);
    const [errors, setErrors] = useState(initFormData);

    useEffect(() => {
        getProviders().then(providers => {
            setProviders(providers);
        })

        getCsrfToken().then(csrfToken => {
            setCsrfToken(csrfToken);
        })
    }, []);

    useEffect(() => {
        if (document.location.href.includes("CredentialsSignin") && !isErrorMsg) {
            isErrorMsg = true;
            toast.error("Your email or password are incorrect.");
        }
    }, []);

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event: any) => {
        let { isValid, errors } = validateLoginInput(formData);
        if (!isValid) {
            setErrors(errors);
            return;
        } else setErrors(initFormData);

        signIn('credentials', {
            email: formData.email,
            password: formData.password,
            // redirect: true
        });
    }

    return <>
        <h2 className="text-[1.7rem] text-[#2e3440] leading-8 mb-4 text-center uppercase">LOVE YOUR PROJECT</h2>
        <div className="pt-4">
            <div className="mb-4">
                <input type="hidden" value={csrfToken} name='csrfToken' />
                <InputText
                    tagId=""
                    type="email"
                    name="email"
                    placeholder="Your email"
                    error={errors.email}
                    onChange={handleChange}
                    value={formData.email}
                />
                <InputTextLink
                    tagId=""
                    type="password"
                    name="password"
                    placeholder="Password (case sensitive)"
                    error={errors.password}
                    onChange={handleChange}
                    value={formData.password}
                    linkUrl={`/forgot-password`}
                    linkTitle={`Did you forget your password?`}
                    linkLabel={`Forgot it?`}
                />
                <BtnFormSubmit type="submit" title="Login" label="Login" disabled={false} onClick={handleSubmit} />
            </div>
            <div className="my-4 border-0 p-0 align-baseline">
                <label className="text-[.875rem] text-[#2e3440] mb-2">Or login with</label>
                {
                    providers &&
                    Object.values(providers).map((provider, idx) => (
                        <div key={idx}>
                            <BtnOAuth provider={provider} />
                        </div>
                    ))
                }
            </div>
            <p className="text-[#2e3440] text-[.875rem] mt-8 pb-4 text-center mb-5 leading-6">
                <span >Not registered yet?</span>&nbsp;
                <Link href={`/register`} title="Register" className="underline text-[#2e3440]">create your free account here</Link>
            </p>
        </div>
    </>
}

export default Login;