"use client";

import Link from "next/link";

const PanelIntro = () => {
    return <>
        <div className="flex flex-row items-stretch	justify-start w-full h-auto shrink flex-nowrap min-w-0 p-0 bg-no-repeat	shadow-none box-border no-underline	m-0 border-0">
            <div className="w-full flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-0 bg-none bg-no-repeat shadow-none box-border no-underline m-0 border-0" style={{ width: 'calc((100% - 1* 0px* 12 / 12)' }}>
                <div className="flex relative flex-row max-w-screen-xl w-auto bg-white self-center h-full shrink left-auto top-auto z-[1] min-h-0 px-4 py-16">
                    <div className="flex-row items-stretch flex-nowrap min-h-0 -ml-[40px] flex flex-1 self-stretch">
                        <div className="ml-10 flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-0 pointer-events-auto" style={{ width: 'calc((100% - 2* 40px* 6 / 12)' }}>
                            <div className="flex flex-col w-full mr-0 max-w-full pl-0 min-w-0">
                                <div className="flex-col justify-center min-w-0 mt-[-32px] flex flex-1 self-stretch" style={{ height: 'calc(100% + 32px)' }}>
                                    <div className="mt-8 flex relative flex-col mb-0 pb-0 max-w-full w-full self-auto min-w-0">
                                        <div className="flex-col min-w-0 mt-[-30px] flex flex-1 self-stretch" style={{ height: 'calc(100% + 30px)' }}>
                                            <h1 className="mt-[30px] pl-0 left-auto top-auto relative order-none self-auto text-[#006385] font-bold text-[4rem] leading-none -tracking-1">Taiga: <span className="italic inline static ">The </span>free and open-source project management tool</h1>
                                            <div className="mt-[30px] relative w-full h-auto max-w-[800px] min-w-0">
                                                <h2 className="text-[#008AA8] font-normal text-[42px] leading-tight -tracking-1 ">For cross-functional agile teams to work effectively</h2>
                                            </div>
                                            <h2 className="mt-[30px] relative w-full h-auto max-w-[800px] text-[26px] left-auto top-auto text-[#4C566A] font-normal leading-tight tracking-normal min-w-0">A featured-rich software that offers a very simple start through its intuitive user interface.</h2>
                                            <div className="flex relative flex-col w-full h-auto max-w-full mt-[30px] mr-0 mb-0 ml-0 min-w-0 p-0 pointer-events-auto">
                                                <div className="flex-col items-start justify-start min-w-0 -mt-[10px] flex flex-1 self-stretch" style={{ height: 'calc(100% + 10px)' }}>
                                                    <div className="mt-[10px] relative flex w-full h-auto max-w-full flex-row min-w-0 p-2 pointer-events-auto">
                                                        <div className="flex-row justify-start items-center min-w-0 flex flex-1 self-stretch" style={{ marginLeft: 'calc(0px - 16px', width: 'calc(100% + 16px)' }}>
                                                            <div className="ml-4">
                                                                <Link className="flex relative w-auto h-auto left-auto top-auto z-[1]" href={`/register`}>
                                                                    <button className="flex relative flex-row bg-[#83EEDE] cursor-pointer rounded px-5 py-2 border-0">
                                                                        <div className="flex-row items-center justify-center -ml-2 flex flex-1 self-stretch" style={{ width: 'calc(100% + 8px)' }}>
                                                                            <div className="ml-2 flex relative flex-row items-stretch justify-start">
                                                                                <span className="text-[#2e3440] font-bold whitespace-pre text-sm">
                                                                                    <div className="font-medium text-base">
                                                                                        <span className="font-medium ">Get Taiga for free</span>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                            <div className="ml-4">
                                                                <Link className="max-w-full relative left-auto top-auto z-[1] flex right-auto" href={`/pricing-selfhosted`}>
                                                                    <button className="bg-[#D8DEE9] flex relative flex-row cursor-pointer rounded px-5 py-2">
                                                                        <div className="flex-row items-center justify-center -ml-2 flex flex-1 self-stretch pointer-events-none" style={{ width: 'calc(100% + 8px)' }}>
                                                                            <div className="ml-2 flex relative flex-row items-stretch justify-start">
                                                                                <span className="color-[#2e3440] font-bold text-xl">
                                                                                    <div className="font-normal text-base">Self-host Taiga</div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-[10px] self-start text-[14px]">
                                                        <span className="italic text-[#008AA8]">Millions enjoy agile with Taiga already. Join them!</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="ml-10 flex flex-col relative h-auto max-w-full ml-0 mb-0 mt-0 justify-start items-center overflow-visible min-w-0 bg-none">
                            <div className="w-auto h-auto relative object-cover max-w-full self-end flex-col ">
                                <img alt="" aria-hidden="true" className="w-auto min-w-full max-w-full h-auto min-h-full" src={`/pic1.webp`} />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PanelIntro;