import Link from "next/dist/client/link";

const SelfHostedPricing = () => {
    return <>
        <div className="mt-0 flex relative flex-col items-center justify-center w-full h-auto max-w-none min-w-0 p-0">
            <div className="flex flex-col items-center relative w-full bg-[#F1F1F4] mb-0 h-full order-1 max-w-none min-w-0 min-h-0 pb-[50px]">
                <div className="flex relative flex-col top-auto left-auto max-w-none ml-0 self-start w-full order-1 min-w-0">
                    <div className="flex-col stretch justify-start min-w-0 -mt-[64px] flex flex-1 self-stretch" style={{ height: `calc(100% + 64px)` }}>
                        <div className="mt-[64px] flex flex-col relative left-auto top-auto w-full h-full order-1 min-w-0 min-h-0" style={{ background: 'linear-gradient(160deg, #008AA8 0%, #83EEDE 100%)' }}>
                            <div className="flex-col items-center justify-center min-w-0 min-h-0 -mt-4 flex flex-1 self-stretch" style={{ height: `calc(100% + 16px)` }}>
                                <h1 className="mt-24 relative w-auto h-auto max-w-none text-white left-auto self-center top-auto mb-14 mr-0 ml-0 text-[3.5rem]">Deployment &amp; pricing options</h1>
                                <div className="mt-4 flex sticky flex-row w-full h-full max-w-none self-start left-0 top-0 z-[1] bg-none order-2 mr-0 mb-0 ml-0 min-w-0 min-h-0">
                                    <div className="flex-row items-center justify-center min-w-0 min-h-0 ml-0 w-full flex flex-1 self-stretch">
                                        <div className="ml-0 block relative w-full h-[50px] max-w-[200px] bg-[#70728F] self-start rounded-tl-[10px] rounded-tr-[10px] min-w-0 p-0">
                                            <div>
                                                <Link className="relative flex items-center justify-center text-center h-[50px] w-[199px] p-0 text-[#4C566A] text-medium" href={`/pricing-cloud`}>
                                                    <div className="w-full h-[27px] max-w-[140px] text-white text-center self-auto sticky left-0 top-0 z-[1] text-medium min-w-0">Taiga Cloud</div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="block relative w-full h-[50px] max-w-[200px] left-auto top-auto bg-[#F1F1F4] z-[1] bottom-auto max-h-none self-start mb-0 mt-0 mr-0 ml-0 rounded-tl-[10px] rounded-tr-[10px] min-w-0 py-3">
                                            <div className="sticky w-auto h-[50px] max-w-[200px] text-[#4C566A] text-center left-0 top-0 z-[1] text-medium">Self-hosted</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex relative w-full h-auto shrink flex-row left-auto top-auto order-2 max-w-[1200px] min-w-0 p-4">
                    <div className="flex flex-1 self-stretch items-stretch flex-row flex-wrap min-w-0 -ml-4" style={{ width: `calc(100% + 16px)` }}>
                        <div className="ml-4 flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-0" style={{ width: `calc((100% - 3 * 16px) * 4 / 12)` }}>
                            <div className="flex relative flex-col items-center justify-start w-full h-full max-w-none left-auto top-auto z-[1] bg-white min-w-0 min-h-0 rounded-[10px] p-4 mt-10 border border-[#83EEDE40]" style={{ boxShadow: '0 8px 16px #008aa81a' }}>
                                <div className="relative w-full h-auto max-w-none left-auto top-auto text-[#4C566A] text-2xl text-center order-1 z-[1] self-auto py-0 leading-tight min-w-0 shrink-0 my-[30px]">SELF-MANAGED</div>
                                <div className="relative w-full h-auto max-w-[800px] left-auto top-auto text-[#006385] font-bold text-4xl text-center order-2 self-stretch min-w-0 m-0 mb-[55px]">Free</div>
                                <div className="relative w-auto h-auto max-w-none left-auto top-auto bg-[#83EEDE40] order-3 text-center text-[13px] text-[#4C566A] rounded-lg p-4 mt-5 mb-[39px]">Requires
                                    <span className="" style={{ fontWeight: 100 }}> </span>
                                    <span className="" style={{ fontWeight: 500 }}>Linux and Docker Experience</span>
                                    <span className="" style={{ fontWeight: 100 }}>.</span><br /><br />
                                    Download and install Taiga on your own infrastructure or any private cloud
                                </div>
                                <section className="flex relative content-start justify-center w-full order-4 min-w-0 py-2" style={{ gridTemplateColumns: '16px 1fr minmax(0, calc((( 1280px - 800px ) / 2) - 16px )) min(800px, calc(100% - 16px - 16px)) minmax(0, calc((( 1280px - 800px ) / 2) - 16px )) 1fr 16px' }}>
                                    <div style={{ gridColumn: 4 }}>
                                        <Link className="max-w-full relative flex left-auto top-auto my-[30px]" href={`/t/taiga-30min-setup/170`}>
                                            <button className="bg-[#D8DEE9] flex relative flex-row cursor-pointer py-2 px-5 rounded text-[#2e3440] hover:bg-[#008AA8] hover:text-white" style={{ WebkitTransitionProperty: 'background', WebkitTransitionDuration: '.1s' }}>
                                                <div className="flex flex-1 self-stretch flex-row items-center justify-center -ml-2" style={{ width: `calc(100 % + 8px)` }}>
                                                    <div className="ml-2 flex relative flex-row items-stretch justify-start">
                                                        <span className="font-bold whitespace-pre text-[1.2rem]">
                                                            <div className="font-medium text-[16px]">More Info</div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </section>
                                <div className="flex relative flex-col w-full h-auto max-w-full top-auto left-auto self-baseline order-5 min-w-0 py-4 px-5">
                                    <div className="flex flex-1 self-stretch flex-col items-center justify-start min-w0 -mt-2" style={{ height: `calc(100% + 8px)` }}>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                100% <span className="font-medium inline static">Open source</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                Easy to <span className="font-bold inline static">update</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                Your choice of <span className="font-bold inline static">community contributions</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                Translated to <span className="font-bold inline static">&gt;20 languages</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                <span className="font-bold inline static">Customize </span>your installation*
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full h-auto order-7 max-w-[800px] text-[#4C566A] text-[12px] mt-[30px] min-w-0">
                                    * As long as you respect Taiga's open source
                                    <Link className="text-[#008AA8] inline font-medium" target="_blank" href={`/t/whats-taigas-open-source-license/`}> license
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="ml-4 flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-0" style={{ width: `calc((100% - 3 * 16px) * 4 / 12)` }}>
                            <div className="flex relative flex-col items-center justify-start w-full h-full max-w-none left-auto top-auto z-[1] bg-white min-w-0 min-h-0 rounded-[10px] p-4 mt-10 border border-[#83EEDE40]" style={{ boxShadow: '0 8px 16px #008aa81a' }}>
                                <div className="relative w-full h-auto max-w-none left-auto top-auto text-[#4C566A] text-2xl text-center order-1 z-[1] self-auto py-0 leading-tight min-w-0 shrink-0 my-[30px]">AUTOMATED-HOSTING</div>
                                <div className="relative w-full h-auto max-w-[800px] left-auto top-auto text-[#006385] font-bold text-4xl text-center order-2 self-stretch min-w-0 m-0 mb-[10px]">From $10</div>
                                <div className="relative w-full h-auto max-w-[300px] h-auto max-w-[300px] text-[15px] text-center order-4 min-w-0 text-[#008AA8]">Ideal for teams with
                                    <span className="font-bold"> limited Linux/Docker </span>
                                    <span className="font-bold">experience</span>
                                </div>
                                <div className="relative w-auto h-auto max-w-none left-auto top-auto bg-[#83EEDE40] order-3 text-center text-[13px] text-[#4C566A] rounded-lg p-4 mt-5">Using the fully managed service for on-premise instances of our partner <span className="" style={{ fontWeight: 500 }}>Elestio</span><br /><br />
                                    You won't need to worry about DNS configuration, SMTP, backups, SSL certificates, OS &amp; Taiga upgrades
                                </div>
                                <section className="flex relative content-start justify-center w-full order-4 min-w-0 py-2" style={{ gridTemplateColumns: '16px 1fr minmax(0, calc((( 1280px - 800px ) / 2) - 16px )) min(800px, calc(100% - 16px - 16px)) minmax(0, calc((( 1280px - 800px ) / 2) - 16px )) 1fr 16px' }}>
                                    <div style={{ gridColumn: 4 }}>
                                        <Link className="max-w-full relative flex left-auto top-auto my-[30px]" href={`/t/taiga-30min-setup/170`}>
                                            <button className="bg-[#83EEDE] flex relative flex-row cursor-pointer py-2 px-5 rounded text-[#2e3440] hover:bg-[#008AA8] hover:text-white" style={{ WebkitTransitionProperty: 'background', WebkitTransitionDuration: '.1s' }}>
                                                <div className="flex flex-1 self-stretch flex-row items-center justify-center -ml-2" style={{ width: `calc(100 % + 8px)` }}>
                                                    <div className="ml-2 flex relative flex-row items-stretch justify-start">
                                                        <span className="font-bold whitespace-pre text-[1.2rem]">
                                                            <div className="font-medium text-[16px]">Go to Elestio</div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </section>
                                <div className="flex relative flex-col w-full h-auto max-w-full top-auto left-auto self-baseline order-5 min-w-0 py-4 px-5">
                                    <div className="flex flex-1 self-stretch flex-col items-center justify-start min-w0 -mt-2" style={{ height: `calc(100% + 8px)` }}>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <div className="max-w-full relative self-start m-[5px] inline-flex flex-col w-auto h-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="1em" width="1em" className="max-w-full grow-0 relative object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                    <path clipRule="evenodd" d="M8.624.942a1 1 0 010 1.414L3.743 7.237h10.762a1 1 0 110 2H3.743l4.881 4.881a1 1 0 11-1.414 1.415L.622 8.944a1 1 0 010-1.414L7.21.942a1 1 0 011.414 0z" />
                                                </svg>
                                            </div>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                Everything from
                                                <span className="font-normal inline static"> SELF-MANAGED</span> and:
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                <span className="font-bold inline static">One-click</span> install
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                Fully managed <span className="font-bold inline static">maintenance and upgrades</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                Enterprise-grade <span className="font-bold inline static">security</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                <span className="font-bold inline static">Scale up and down</span> instantly
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="ml-4 flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-0" style={{ width: `calc((100% - 3 * 16px) * 4 / 12)` }}>
                            <div className="flex relative flex-col items-center justify-start w-full h-full max-w-none left-auto top-auto z-[1] bg-white min-w-0 min-h-0 rounded-[10px] p-4 mt-10 border border-[#83EEDE40]" style={{ boxShadow: '0 8px 16px #008aa81a' }}>
                                <div className="p-2 flex relative flex-col items-center justify-start w-full hauto max-w-none min-w-0">
                                    <div className="relative w-full h-auto max-w-none left-auto top-auto text-[#4C566A] text-2xl text-center order-1 z-[1] self-auto py-0 leading-tight min-w-0 shrink-0 my-[30px]">MANAGED FOR YOU</div>
                                    <div className="relative w-full h-auto max-w-[800px] text-center font-normal order-2 mb-4 text-[32px] text-[#4C566A] mt-0 leading-tight min-w-0">
                                        <span className="font-medium">Get a quote</span>
                                    </div>
                                    <div className="relative w-full h-auto max-w-[300px] text-[15px] text-center order-4 mb-10 min-w-0 text-[#008AA8]">Ideal for teams requiring<br />
                                        <span className="font-bold">priority support</span>
                                    </div>
                                    <div className="h-auto relative w-full max-w-[300px] text-[20px] text-center order-5 min-w-0 text-[#70728F] mx-4 mb-[56px]">Typically suitable for teams<br />
                                        <span className="font-bold">greater than 25 people</span>
                                    </div>
                                </div>

                                <section className="flex relative content-start justify-center w-full order-4 min-w-0 py-2" style={{ gridTemplateColumns: '16px 1fr minmax(0, calc((( 1280px - 800px ) / 2) - 16px )) min(800px, calc(100% - 16px - 16px)) minmax(0, calc((( 1280px - 800px ) / 2) - 16px )) 1fr 16px' }}>
                                    <div style={{ gridColumn: 4 }}>
                                        <Link className="max-w-full relative flex left-auto top-auto my-[30px]" href={`/t/taiga-30min-setup/170`}>
                                            <button className="bg-[#D8DEE9] flex relative flex-row cursor-pointer py-2 px-5 rounded text-[#2e3440] hover:bg-[#008AA8] hover:text-white" style={{ WebkitTransitionProperty: 'background', WebkitTransitionDuration: '.1s' }}>
                                                <div className="flex flex-1 self-stretch flex-row items-center justify-center -ml-2" style={{ width: `calc(100 % + 8px)` }}>
                                                    <div className="ml-2 flex relative flex-row items-stretch justify-start">
                                                        <span className="font-bold whitespace-pre text-[1.2rem]">
                                                            <div className="font-medium text-[16px]">Contact sales</div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>
                                        </Link>
                                    </div>
                                </section>
                                <div className="flex relative flex-col w-full h-auto max-w-full top-auto left-auto self-baseline order-5 min-w-0 py-4 px-5">
                                    <div className="flex flex-1 self-stretch flex-col items-center justify-start min-w0 -mt-2" style={{ height: `calc(100% + 8px)` }}>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <div className="max-w-full relative self-start m-[5px] inline-flex flex-col w-auto h-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="1em" width="1em" className="max-w-full grow-0 relative object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                    <path clipRule="evenodd" d="M8.624.942a1 1 0 010 1.414L3.743 7.237h10.762a1 1 0 110 2H3.743l4.881 4.881a1 1 0 11-1.414 1.415L.622 8.944a1 1 0 010-1.414L7.21.942a1 1 0 011.414 0z" />
                                                </svg>
                                            </div>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                Everything from <span className="font-bold inline static">SELF-MANAGED</span> and:
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                <span className="font-bold inline static">Priority</span>
                                                <span className="font-bold inline static">support </span>with SLA
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                Use it behind your
                                                <span className="font-bold inline static">firewall / VPN</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                <span className="font-bold inline static">Installation </span>support
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-stretch justify-start w-full h-auto max-w-full order-1 min-w-0 p-2 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" height="1em" width="1em" className="max-w-full relative m-[5px] object-cover text-[#008AA8] h-[1em]" role="img" style={{ fill: 'currentcolor' }}>
                                                <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                            </svg>
                                            <div className="relative w-full h-auto max-w-[800px] text-left text-[16px] text-[#4C566A] min-w-0">
                                                Scheduled
                                                <span className="font-bold inline static">updates</span>
                                            </div>
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

export default SelfHostedPricing;