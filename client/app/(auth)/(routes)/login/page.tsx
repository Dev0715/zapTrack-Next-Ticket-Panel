"use client"

import Link from "next/link";
import { getCsrfToken, getProviders } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

import OauthButton from "../_components/OauthButton/page";

const Login = () => {
    const [providers, setProviders] = useState<null | any>([]);
    const [csrfToken, setCsrfToken] = useState<string | undefined>("");
    const [error, setError] = useState<String>();

    useEffect(() => {
        getProviders().then(providers => {
            setProviders(providers);
        })

        getCsrfToken().then(csrfToken => {
            setCsrfToken(csrfToken);
        })
    }, []);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (error)
            setError(undefined);

        const formData = new FormData(event.currentTarget);

        signIn('credentials', {
            username: formData.get('username'),
            password: formData.get('password'),
            redirect: true
        }).then((result) => {
            if (result?.error) {
                setError(result.error);
            }
            // toast.error("Your username/email or password are incorrect.")
            // else {
            //     redirect(`/dashboard`);
            // }
        }).catch((reason) => {
            // toast.error("Your username/email or password are incorrect.")
        })
    }

    return <>
        <h2 className="text-[1.7rem] text-[#2e3440] leading-8 mb-4 text-center uppercase">LOVE YOUR PROJECT</h2>
        <div className="pt-4">
            <form className="mb-4"
                action="/api/auth/callback/credentials"
                method="post"
                onSubmit={onSubmit}>
                <input type="hidden" value={csrfToken} name='csrfToken' />
                <fieldset className="mb-2 border-0 m-0 p-0 relative w-full">
                    <input type="text" required name="username" placeholder="Username or email (case sensitive)" className="bg-white border-2 border-[#d8dee9] rounded-[3px] m-0 px-4 py-[4.8px] w-full" />
                </fieldset>
                <fieldset className="relative mb-2 border-0 p-0 m-0 w-full">
                    <input type="password" name="password" placeholder="Password (case sensitive)" className="bg-white border-2 border-[#d8dee9] rounded-[3px] m-0 py-[4.8px] px-4 w-full" />
                    <Link href={`/forgot-password`} title="Did you forget your password?" className="text-[.876rem] text-[#4c566a] opacity-100 absolute right-4 top-[0.6rem]" style={{ transition: 'all .3s linear' }}>Forgot it?</Link>
                </fieldset>
                {error && <p>{error}</p>}
                <fieldset className="flex mb-2 justify-end border-0 p-0 m-0 relative w-full">
                    <button type="submit" title="Login" className="w-full bg-[#83eede] text-[#2e3440] px-4 py-[0.45rem] text-[.875rem] items-center border-0 rounded inline-flex justify-center text-center uppercase hover:text-white hover:bg-[#008aa8]" style={{ transition: 'all .3s linear' }}>Login</button>
                </fieldset>
            </form>
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
                <span >Not registered yet?</span>&nbsp;
                <Link href={`/register`} title="Register" className="underline text-[#2e3440]">create your free account here</Link>
            </p>
        </div>
    </>
}

export default Login;