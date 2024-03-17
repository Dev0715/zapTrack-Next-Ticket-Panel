"use client"

import { getCsrfToken, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import BtnFormSubmit from "../_components/BtnFormSubmit/page";
import BtnOAuth from "../_components/BtnOAuth/page";
import InputText from "../_components/InputText/page";

import { validateRegisterInput } from "../_utils/validations/users";
import { signUp } from "@/app/actions/auth";

const Register = () => {
    const router = useRouter();

    const [providers, setProviders] = useState<null | any>([]);
    const [csrfToken, setCsrfToken] = useState<string | undefined>("");
    const [formData, setFormData] = useState({ username: "", full_name: "", email: "", password: "" });
    const [errors, setErrors] = useState({ username: "", full_name: "", email: "", password: "" });
    const [terms, setTerms] = useState(false);

    useEffect(() => {
        getProviders().then(providers => {
            setProviders(providers);
        })

        getCsrfToken().then(csrfToken => {
            setCsrfToken(csrfToken);
        })
    }, []);

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = () => {
        const { isValid, errors } = validateRegisterInput(formData);
        if (!isValid) {
            setErrors(errors);
            return;
        }

        if (!terms)
            return;

        signUp(formData).then((res: any) => {
            console.log(res);
            const { status, msg, user } = res.data;
            if (status) {
                toast.success(msg);
                router.push("/dashboard");
            } else
                toast.error(msg);
        }).catch(err => {
            console.log(err);
        });
    }

    return <>
        <div className="pt-4">
            <div className="mb-4">
                <input type="hidden" value={csrfToken} />
                <InputText tagId="" type="text" name="username" placeholder="Pick a username" error={errors.username} onChange={handleChange} value={formData.username} />
                <InputText tagId="" type="text" name="full_name" placeholder="Pick your full name" error={errors.full_name} onChange={handleChange} value={formData.full_name} />
                <InputText tagId="" type="email" name="email" placeholder="Your email" error={errors.email} onChange={handleChange} value={formData.email} />
                <InputText tagId="" type="password" name="password" placeholder="Set a password (case sensitive)" error={errors.password} onChange={handleChange} value={formData.password} />
                <p className="mt-2 mb-3 leading-6">
                    <input type="checkbox" name="accepted_terms" className="mr-2 p-0 m-0" onChange={(e) => { setTerms(e.target.checked) }} />
                    <span className="text-[.875rem] text-[#2e3440] mt-8 pb-4 text-center m-0 p-0">
                        <span className="m-0 p-0 align-baseline">When creating a new account, you agree to our </span>
                        <Link href={`/terms-and-conditions`} title="See terms of service" target="_blank" className="underline text-[#2e3440]">terms of service</Link>
                        <span className="m-0 p-0 border-0 align-baseline"> and </span>
                        <Link href={`/privacy-policy`} title="See privacy policy" target="_blank" className="text-[#2e3440] underline">privacy policy</Link>.
                    </span>
                </p>
                <BtnFormSubmit type="submit" title="Register" label="Sign up" disabled={!terms} onClick={handleSubmit} />
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
                <Link href={`/login`} title="Register" className="underline text-[#2e3440]">Are you already registered? Log in</Link>
            </p>
        </div>
    </>
}

export default Register;