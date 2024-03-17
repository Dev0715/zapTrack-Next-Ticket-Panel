"use client"

import { signIn } from 'next-auth/react'

interface BtnOAuthProps {
    provider: any
}

const BtnOAuth = ({ provider }: BtnOAuthProps) => {
    return <>
        {
            provider.id !== "credentials" &&
            <fieldset className="mb-2 border-0 m-0 p-0 relative w-full align-baseline">
                <div className="m-0 p-0 border-0 align-baseline">
                    <button
                        title="Enter with your github account"
                        className="text-white text-center bg-[#434456] w-full text-[.875rem] border-0 rounded px-6 py-2 uppercase align-middle cursor-pointer whitespace-normal m-0 flex flex-row justify-center items-center hover:text-[#008aa8] hover:bg-black hover:transition-[color]"
                        onClick={() => signIn(provider.id)}
                    >
                        <img src={`/plugins/${provider.name.toLowerCase()}-logo.png`} alt="" className="text-[1.1rem] text-white m-0 p-0 mr-2 align-middle border-0 uppercase whitespace-normal" />
                        <span className="text-center align-baseline m-0 p-0 border-0 whitespace-normal">Sign in with {provider.name}</span>
                    </button>
                </div>
            </fieldset>
        }
    </>
}

export default BtnOAuth;