import Link from "next/link";

import Navbar from "../../../components/Navbar/Navbar";

const CloudPricing = () => {
    return <>
        <div className="mt-0 flex relative flex-col items-center justify-center w-full h-auto max-w-none min-w-0 p-0">
            <div className="flex flex-col items-center relative w-full bg-[#F1F1F4] mb-0 h-full order-1 max-w-none min-w-0 min-h-0 pb-[50px]">
                <div className="flex relative flex-col top-auto left-auto max-w-none ml-0 self-start w-full order-1 min-w-0">
                    <div className="flex-col stretch justify-start min-w-0 -mt-[64px] flex flex-1 self-stretch" style={{ height: `calc(100% + 64px)` }}>
                        <div className="mt-[64px] flex flex-col relative left-auto top-auto w-full h-full order-1 min-w-0 min-h-0" style={{ background: 'linear-gradient(160deg, #008AA8 0%, #83EEDE 100%)' }}>
                            <Navbar />
                            <div className="flex-col items-center justify-center min-w-0 min-h-0 -mt-4 flex flex-1 self-stretch" style={{ height: `calc(100% + 16px)` }}>
                                <h1 className="mt-24 relative w-auto h-auto max-w-none text-white left-auto self-center top-auto mb-14 mr-0 ml-0 text-[3.5rem]">Deployment &amp; pricing options</h1>
                                <div className="mt-4 flex sticky flex-row w-full h-full max-w-none self-start left-0 top-0 z-[1] bg-none order-2 mr-0 mb-0 ml-0 min-w-0 min-h-0">
                                    <div className="flex-row items-center justify-center min-w-0 min-h-0 ml-0 w-full flex flex-1 self-stretch">
                                        <div className="block relative w-full h-[50px] max-w-[200px] left-auto top-auto bg-[#F1F1F4] z-[1] bottom-auto max-h-none self-start mb-0 mt-0 mr-0 ml-0 rounded-tl-[10px] rounded-tr-[10px] min-w-0 py-3">
                                            <div className="sticky w-auto h-[50px] max-w-[200px] text-[#4C566A] text-center left-0 top-0 z-[1] text-medium">Taiga Cloud</div>
                                        </div>
                                        <div className="ml-0 block relative w-full h-[50px] max-w-[200px] bg-[#70728F] self-start rounded-tl-[10px] rounded-tr-[10px] min-w-0 p-0">
                                            <div>
                                                <Link className="relative flex items-center justify-center text-center h-[50px] w-[199px] p-0 text-[#4C566A] text-medium" href={`/pricing-selfhosted`}>
                                                    <div className="w-full h-[27px] max-w-[140px] text-white text-center self-auto sticky left-0 top-0 z-[1] text-medium min-w-0">Self-hosted</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex relative w-full h-auto shrink flex-row left-auto top-auto order-2 max-w-[800px] min-w-0 p-4">
                    <div className="flex flex-1 self-stretch items-stretch flex-row flex-wrap min-w-0 -ml-6 -mt-2" style={{ width: `calc(100% + 24px)`, height: `calc(100% + 8px)` }}>
                        <div className="ml-6 mt-2 flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-0" style={{ width: `calc((100% - 2 * 24px) * 6 / 12)` }}>
                            <div className="flex relative flex-col items-center justify-start w-full h-full max-w-none left-auto top-auto bg-white min-w-0 min-h-0 rounded-[10px] p-4 mt-10 border border-[#83EEDE40]" style={{ boxShadow: '0 8px 16px #008aa81a' }}>
                                <div className="relative w-full h-[70px] max-w-none left-auto top-auto text-[#4C566A] text-2xl text-center order-1 z-[1] self-auto py-0 leading-tight min-w-0 shrink-0 mt-8 mb-[50px]">Taiga Cloud Basic</div>
                                <div className="relative w-full h-auto max-w-[800px] left-auto top-auto text-[#006385] font-bold text-4xl text-center order-2 self-stretch min-w-0 m-0">Free</div>
                                <section className="flex relative content-start justify-center w-full order-4 min-w-0 p-0" style={{ gridTemplateColumns: '16px 1fr minmax(0, calc((( 1280px - 800px ) / 2) - 16px )) min(800px, calc(100% - 16px - 16px)) minmax(0, calc((( 1280px - 800px ) / 2) - 16px )) 1fr 16px' }}>
                                    <div style={{ gridColumn: 4 }}>
                                        <Link className="max-w-full relative flex left-auto top-auto mt-[65px] mb-5" href={`/register`}>
                                            <button className="bg-[#D8DEE9] flex relative flex-row cursor-pointer py-2 px-5 rounded text-[#2e3440] hover:bg-[#008AA8] hover:text-white" style={{ WebkitTransitionProperty: 'background', WebkitTransitionDuration: '.1s' }}>
                                                <div className="flex flex-1 self-stretch flex-row items-center justify-center -ml-2" style={{ width: `calc(100 % + 8px)` }}>
                                                    <div className="ml-2 flex relative flex-row items-stretch justify-start">
                                                        <span className="font-bold whitespace-pre text-[1.2rem]">
                                                            <div className="font-medium text-[16px]">Get Taiga for free</div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </section>
                                <div className="flex relative flex-col items-center justify-start w-full h-full max-w-none top-auto left-auto self-baseline order-4 bg-white shadow-none min-w-0 min-h-0 p-4 mt-10">
                                    <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                            <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                        </svg>
                                        <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                            <span className="font-bold inline static">Unlimited </span>number of users
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                            <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                        </svg>
                                        <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                            <span className="font-bold inline static" style={{ fontWeight: 700 }}>Unlimited </span>number of projects
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                            <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                        </svg>
                                        <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                            <span className="font-bold inline static" style={{ fontWeight: 700 }}>Estimation </span>tool Taiga Seed
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                            <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                        </svg>
                                        <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">Translated to <span className="font-bold inline static" style={{ fontWeight: 700 }}>&gt;20 languages</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                            <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                        </svg>
                                        <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                            <a className="text-[#008AA8] underline font-bold inline" target="_blank" href="https://community.taiga.io/">Community</a> support</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-6 ml-6 mt-2 flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-0" style={{ width: `calc((100% - 2 * 24px) * 6 / 12)` }}>
                            <div className="flex relative flex-col items-center justify-start w-full h-full max-w-none left-auto top-auto bg-white min-w-0 min-h-0 rounded-[10px] p-4 mt-10 border border-[#83EEDE40]" style={{ boxShadow: '0 8px 16px #008aa81a' }}>
                                <div className="relative w-full h-[70px] max-w-none left-auto top-auto text-[#4C566A] text-2xl text-center order-1 z-[1] self-auto py-0 leading-tight min-w-0 shrink-0 mt-8 mb-[50px]">Taiga Cloud with Premium support</div>
                                <div className="relative w-full h-auto max-w-[800px] left-auto top-auto text-[#006385] font-bold text-4xl text-center order-2 self-stretch min-w-0 m-0">$70</div>
                                <div className="relative w-full h-auto max-w-[300px] text-center order-3 min-w-0 text-[15px] text-[#008AA8] block">per month <br />
                                    ($600 when billed annually)
                                </div>
                                <section className="flex relative content-start justify-center w-full order-4 min-w-0 py-2" style={{ gridTemplateColumns: '16px 1fr minmax(0, calc((( 1280px - 800px ) / 2) - 16px )) min(800px, calc(100% - 16px - 16px)) minmax(0, calc((( 1280px - 800px ) / 2) - 16px )) 1fr 16px' }}>
                                    <div style={{ gridColumn: 4 }}>
                                        <Link className="max-w-full relative flex left-auto top-auto mt-5 mb-5" href={`/register?target=trial`}>
                                            <button className="bg-[#83EEDE] flex relative flex-row cursor-pointer py-2 px-5 rounded text-[#2e3440] hover:bg-[#008AA8] hover:text-white" style={{ WebkitTransitionProperty: 'background', WebkitTransitionDuration: '.1s' }}>
                                                <div className="flex flex-1 self-stretch flex-row items-center justify-center -ml-2" style={{ width: `calc(100 % + 8px)` }}>
                                                    <div className="ml-2 flex relative flex-row items-stretch justify-start">
                                                        <span className="font-bold whitespace-pre text-[1.2rem]">
                                                            <div className="font-medium text-[16px]">Get Premium support</div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </section>
                                <div className="flex relative flex-col items-center justify-start w-full h-full max-w-none top-auto left-auto self-baseline order-4 bg-white shadow-none min-w-0 min-h-0 p-4">
                                    <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                            <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                        </svg>
                                        <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                            <span className="font-bold inline static">Unlimited </span>number of users
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                            <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                        </svg>
                                        <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                            <span className="font-bold inline static">Unlimited </span>number of projects
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                            <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                        </svg>
                                        <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                            <span className="font-bold inline static">Estimation </span>tool Taiga Seed
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                            <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                        </svg>
                                        <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">Translated to <span className="font-bold inline static">&gt;20 languages</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                            <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                        </svg>
                                        <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">Premium <span className="font-bold inline static">support</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                            <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                        </svg>
                                        <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                            <span className="font-bold inline static">Help us fund</span> the Taiga open source project
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CloudPricing;