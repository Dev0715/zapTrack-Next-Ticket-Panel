import Link from "next/link";

const ForgotPassword = () => {
    return <>
        <div className="text-center align-baseline">
            <p className="text-white leading-normal mb-5">
                <span >Oops, did you forget your password?</span>
                <br />
                <span >Enter your username or email to get a new one</span></p>
            <form className="mb-4">
                <fieldset className="mb-2 relative w-full">
                    <input type="text" name="username" placeholder="Username or email" className="bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] py-[4.8px] pr-4 pl-[15.2px] w-full" />
                </fieldset>
                <fieldset className="mb-2 w-full relative">
                    <button title="Reset Password" className="w-full bg-[#83eede] text-[#2e3440] text-[.875rem] items-center bordernone rounded inline-flex justify-center tet-center uppercase px-4 py-[7.2px]">Reset Password</button>
                </fieldset>
                <div className="text-[#2e3440] text-[.875rem] mt-8 pb-4 text-center">
                    <Link href={`/login`} className="text-[#2e3440] underline">Nah, take me back. I think I remember it.</Link>
                </div>
            </form>
        </div>
    </>
}

export default ForgotPassword;