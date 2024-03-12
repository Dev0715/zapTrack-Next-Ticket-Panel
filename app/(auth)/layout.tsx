"use client";

const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return <>
        <div className="h-full min-h-full relative">
            <div className="flex h-full" style={{ minHeight: `calc(100vh - 48px)` }}>
                <div className="items-center bg-white bottom-0 flex justify-center left-0 right-0 overflow-y-auto fixed right-0 top-0 z-[2]">
                    <div className="basis-[400px]">
                        <div className="w-full m-0 p-0 flex items-center justify-center">
                            <svg preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0 0 267.204 267.245" className="w-32 h-32 overflow-hidden text-center">
                                <path d="M228.256 39.167l-11.755 82.74-82.74 11.756 11.756-82.74z" fill="#a295ae" opacity=".8" />
                                <path d="M39.19 228.134l11.755-82.74 82.74-11.756-11.755 82.74z" fill="#5d6f6d" opacity=".8" />
                                <path d="M39.19 39.277l82.74 11.755 11.756 82.74-82.74-11.755z" fill="#8cd592" opacity=".8" />
                                <path d="M228.16 228.144l-82.74-11.755-11.756-82.742 82.74 11.756z" fill="#665e74" opacity=".8" />
                                <path d="M133.738 267.245l-50.194-66.82 50.194-66.817 50.194 66.818z" fill="#3c3647" opacity=".8" />
                                <path d="M267.204 133.48l-66.82 50.195-66.817-50.194 66.818-50.193z" fill="#837193" opacity=".8" />
                                <path d="M133.616 0l50.194 66.82-50.194 66.817L83.422 66.82z" fill="#a2f4ac" opacity=".8" />
                                <path d="M0 133.706l66.82-50.194 66.817 50.194L66.82 183.9z" fill="#7ea685" opacity=".8" />
                                <path d="M133.602 101.85l31.772 31.772-31.772 31.772-31.772-31.772z" fill="#3c3647" />
                            </svg>
                        </div>
                        <h1 className="text-[2.1rem] text-[#2e3440] block mb-4 text-center">Taiga</h1>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AuthLayout;