import Link from "next/link";

const Register = () => {
    return <>
        <div className="pt-4">
            <form className="mb-4">
                <fieldset className="mb-2 border-0 m-0 p-0 relative w-full">
                    <input type="text" required name="username" placeholder="Pick a username" className="bg-white border-2 border-[#d8dee9] rounded-[3px] m-0 px-4 py-[4.8px] w-full" />
                </fieldset>
                <fieldset className="mb-2 border-0 m-0 p-0 relative w-full">
                    <input type="text" required name="full_name" placeholder="Pick your full name" className="bg-white border-2 border-[#d8dee9] rounded-[3px] m-0 px-4 py-[4.8px] w-full" />
                </fieldset>
                <fieldset className="mb-2 border-0 m-0 p-0 relative w-full">
                    <input type="email" required name="email" placeholder="Your email" className="bg-white border-2 border-[#d8dee9] rounded-[3px] m-0 px-4 py-[4.8px] w-full" />
                </fieldset>
                <fieldset className="relative mb-2 border-0 p-0 m-0 w-full">
                    <input type="password" name="password" placeholder="Set a password (case sensitive)" className="bg-white border-2 border-[#d8dee9] rounded-[3px] m-0 py-[4.8px] px-4 w-full" />
                </fieldset>
                <p className="mt-2 mb-3 leading-6">
                    <input type="checkbox" name="accepted_terms" className="mr-2 p-0 m-0" />
                    <span className="text-[.875rem] text-[#2e3440] mt-8 pb-4 text-center m-0 p-0">
                        <span className="m-0 p-0 align-baseline">When creating a new account, you agree to our </span>
                        <Link href={`/terms-and-conditions`} title="See terms of service" target="_blank" className="underline text-[#2e3440]">terms of service</Link>
                        <span className="m-0 p-0 border-0 align-baseline"> and </span>
                        <Link href="{`/privacy-policy`}" title="See privacy policy" target="_blank" className="text-[#2e3440] underline">privacy policy</Link>.
                    </span>
                </p>
                <fieldset className="flex mb-2 justify-end border-0 p-0 m-0 relative w-full">
                    <button type="submit" title="Register" className="w-full bg-[#83eede] text-[#2e3440] px-4 py-[0.45rem] text-[.875rem] items-center border-0 rounded inline-flex justify-center text-center uppercase hover:text-white hover:bg-[#008aa8]" style={{ transition: 'all .3s linear' }}>Sign up</button>
                </fieldset>
            </form>
            <div className="my-4 border-0 p-0 align-baseline">
                <label className="text-[.875rem] text-[#2e3440] mb-2">Or Register with</label>
                <fieldset className="mb-2 border-0 m-0 p-0 relative w-full align-baseline">
                    <div className="m-0 p-0 border-0 align-baseline">
                        <a title="Enter with your github account" className="text-white text-center bg-[#434456] w-full text-[.875rem] border-0 rounded px-6 py-2 uppercase align-middle cursor-pointer whitespace-normal m-0 flex flex-row justify-center items-center hover:text-[#008aa8] hover:bg-black hover:transition-[color]">
                            <img src={`/plugins/github-logo.png`} alt="" className="text-[1.1rem] text-white m-0 p-0 mr-2 align-middle border-0 uppercase whitespace-normal" />
                            <span className="text-center align-baseline m-0 p-0 border-0 whitespace-normal">Sign up with Github</span>
                        </a>
                    </div>
                </fieldset>
                <fieldset className="mb-2 border-0 m-0 p-0 relative w-full align-baseline">
                    <div className="m-0 p-0 border-0 align-baseline">
                        <a title="Enter with your gitlab account" className="text-white text-center bg-[#434456] w-full text-[.875rem] border-0 rounded px-6 py-2 uppercase align-middle cursor-pointer whitespace-normal m-0 flex flex-row justify-center items-center hover:text-[#008aa8] hover:bg-black hover:transition-[color]">
                            <img src={`/plugins/gitlab-logo.png`} alt="" className="text-[1.1rem] text-white m-0 p-0 mr-2 align-middle border-0 uppercase whitespace-normal" />
                            <span className="text-center align-baseline m-0 p-0 border-0 whitespace-normal">Sign up with GitLab</span>
                        </a>
                    </div>
                </fieldset>
            </div>
            <p className="text-[#2e3440] text-[.875rem] mt-8 pb-4 text-center mb-5 leading-6">
                <Link href={`/login`} title="Register" className="underline text-[#2e3440]">Are you already registered? Log in</Link>
            </p>
        </div>
    </>
}

export default Register;