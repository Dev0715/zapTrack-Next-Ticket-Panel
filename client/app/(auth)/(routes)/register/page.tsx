"use client"

import { getCsrfToken, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

import OauthButton from "../_components/OauthButton/page";
import InputText from "../_components/InputText/page";
import authService from "../../../../services/authService";
import { validateRegisterInput } from "../../../../utils/validations/users";

const Register = () => {
    const [providers, setProviders] = useState<null | any>([]);
    const [csrfToken, setCsrfToken] = useState<string | undefined>("");
    const [formData, setFormData] = useState({ username: "", full_name: "", email: "", password: "" });
    const [error, setError] = useState({ username: "", full_name: "", email: "", password: "" });
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

    const onSubmit = () => {
        const { isValid, errors } = validateRegisterInput(formData);
        if (!isValid) {
            setError(errors);
            return;
        }

        if (!terms)
            return;

        authService.signUp(formData).then((value) => {
            if (value?.success) {
                toast.success("Successfully registered!");
            } else {
                toast.error(value?.msg);
            }
        }).catch(err => {
        })
    }

    return <>
        <div className="pt-4">
            <div className="mb-4">
                <InputText tagId="" type="text" name="username" placeholder="Pick a username" error={error.username} onChange={handleChange} value={formData.username} />
                <InputText tagId="" type="text" name="full_name" placeholder="Pick your full name" error={error.full_name} onChange={handleChange} value={formData.full_name} />
                <InputText tagId="" type="email" name="email" placeholder="Your email" error={error.email} onChange={handleChange} value={formData.email} />
                <InputText tagId="" type="password" name="password" placeholder="Set a password (case sensitive)" error={error.password} onChange={handleChange} value={formData.password} />
                <p className="mt-2 mb-3 leading-6">
                    <input type="checkbox" name="accepted_terms" className="mr-2 p-0 m-0" onChange={(e) => { setTerms(e.target.checked) }} />
                    <span className="text-[.875rem] text-[#2e3440] mt-8 pb-4 text-center m-0 p-0">
                        <span className="m-0 p-0 align-baseline">When creating a new account, you agree to our </span>
                        <Link href={`/terms-and-conditions`} title="See terms of service" target="_blank" className="underline text-[#2e3440]">terms of service</Link>
                        <span className="m-0 p-0 border-0 align-baseline"> and </span>
                        <Link href="{`/privacy-policy`}" title="See privacy policy" target="_blank" className="text-[#2e3440] underline">privacy policy</Link>.
                    </span>
                </p>
                <fieldset className="flex mb-2 justify-end border-0 p-0 m-0 relative w-full">
                    <button
                        type="submit"
                        title="Register"
                        className={`w-full bg-[#83eede] text-[#2e3440] px-4 py-[0.45rem] text-[.875rem] items-center border-0 rounded inline-flex justify-center text-center uppercase hover:text-white hover:bg-[#008aa8] ${!terms && `bg-[#d8dee9] text-[#2E344080] hover:bg-[#d8dee9] hover:text-[#2E344080]`}`}
                        style={{ transition: 'all .3s linear' }}
                        onClick={() => onSubmit()}
                        disabled={!terms}
                    >
                        Sign up
                    </button>
                </fieldset>
            </div>
            <div className="my-4 border-0 p-0 align-baseline">
                <label className="text-[.875rem] text-[#2e3440] mb-2">Or login with</label>
                {
                    providers &&
                    Object.values(providers).map((provider, idx) => (
                        <div key={idx}>
                            <OauthButton provider={provider} />
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