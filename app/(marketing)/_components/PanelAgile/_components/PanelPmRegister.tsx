import Link from "next/link";

const PanelPmRegister = () => {
    return <>
        <div className="top-auto pt-5 relative left-auto bottom-auto flex flex-row items-center justify-center w-full h-auto max-w-full bg-[#F1F1F4] z-[1] self-stretch min-w-0 pt-5 px-2 pb-[50px]">
            <div>
                <Link className="max-w-full relative h-[50px] flex" href={`/register`}>
                    <button className="flex relative flex-row bg-[#83EEDE] text-[#2e3440] cursor-pointer rounded px-5 py-2 border-0 hover:bg-[#008AA8]  hover:text-white!">
                        <div className="flex-row items-center  justify-center -ml-2 flex flex-1 self-stretch" style={{ width: `calc(100% + 8px)` }}>
                            <div className="ml-2 flex relative flex-row items-stretch justify-start">
                                <span className=" font-bold text-xl whitespace-pre  hover:text-white">
                                    <div className="font-medium text-[16px]">
                                        <span className="font-medium">Get Taiga for free</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    </>
}

export default PanelPmRegister;