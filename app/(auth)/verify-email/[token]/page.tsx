"use client"

import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { verifyEmail } from "@/app/actions/auth";

interface VerifyEmailProps {
    params: {
        token: string
    }
}

const VerifyEmail = ({ params }: VerifyEmailProps) => {
    const router = useRouter();

    useEffect(() => {
        verifyEmail({ token: params.token })
            .then((res: any) => {
                if (!res?.status) {
                    toast.error(res.msg);
                    router.push("/login");
                } else {
                    toast.success(res.msg);
                    router.push("/login");
                }
            }).catch(err => {
                router.push("/login");
            });
    }, []);

    return <>
        <div className="text-center align-baseline">
            <p className="text-[#2e3440] leading-normal mb-5">
                <span >Please wait while verifing your email...</span>
            </p>
        </div>
    </>
}

export default VerifyEmail;