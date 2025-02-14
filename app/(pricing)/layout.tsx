"use client"

import Footer from "../../components/Footer/page";

const PricingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return <>
        <div className="h-full dark:bg-[#1F1F1F]">
            <main className="bg-white">
                {children}
            </main>
            <Footer />
        </div>
    </>
}

export default PricingLayout;