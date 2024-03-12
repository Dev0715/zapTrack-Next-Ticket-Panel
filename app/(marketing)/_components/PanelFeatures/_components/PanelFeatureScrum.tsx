import Link from "next/link";

const PanelFeatureScrum = () => {
    return <>
        <div className="max-w-full relative flex flex-col items-center justify-center w-full h-auto bg-white min-w-0 p-0">
            <div className="flex relative flex-row w-full h-auto max-w-[1280px] shrink min-w-0 px-[30px] py-[60px]">
                <div className="flex flex-1 self-stretch flex-row items-stretch justify-center flex-nowrap min-w-0 -ml-[30px]" style={{ width: `calc(100% + 30px)` }}>
                    <div className="ml-[30px] flex relative flex-col h-auto max-w-full min-w-0 p-0">
                        <div className="flex-col justify-center items-center min-w-0 mt-0 flex flex-1 self-stretch" style={{ height: `calc(100% + 0px)` }}>
                            <div className="w-auto h-auto mt-0 relative object-cover max-w-[500px]">
                                <img alt="" className="w-auto min-w-full max-w-full h-auto min-h-full visible" src={`/pic-feature-scrum.webp`} />
                            </div>
                        </div>
                    </div>
                    <div className="ml-[30px] flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-0">
                        <div className="flex flex-col relative items-center justify-center w-full h-auto max-w-full min-w-0 p-0">
                            <div className="flex relative flex-row items-center justify-center w-full h-full max-w-full top-auto left-auto z-[1] self-auto min-w-0 min-h-0 py-2">
                                <div className="flex">
                                    <div className="w-auto h-auto relative object-cover max-w-[35px] left-auto top-auto z-auto flex-col shrink-0 overflow-hidden">
                                        <img alt="" className="w-auto min-w-full max-w-full h-auto min-h-full" src={`/icon-feature-scrum.webp`} />
                                    </div>
                                </div>
                                <div className="relative w-full h-auto max-w-full flex flex-row min-w-0 pl-[10px]">
                                    <span className="text-xl font-bold text-[#008AA8]">
                                        <h3 className="text-xl w-auto h-auto text-[#008AA8]">SCRUM</h3>
                                    </span>
                                </div>
                            </div>
                            <div className="relative w-full h-auto max-w-[800px] pr-0 mr-0 flex flex-row self-start min-w-0">
                                <span className="font-bold " style={{ color: `rgb(76 86 106)` }}>
                                    <span className="relative text-4xl font-bold text-[#4C566A] leading-5 tracking-tight">Complete set of boards to plan and show individual sprints from backlog</span>
                                </span>
                            </div>
                            <div className="flex relative flex-row w-full h-auto max-w-full shrink min-w-0 py-2">
                                <div className="flex-row items-stretch justify-start flex-nowrap min-w-0 -ml-[40px]" style={{ width: `calc(100% + 40px)` }}>
                                    <div className="flex relative flex-col h-auto max-w-full min-w-0 py-2 ml-[40px]" style={{ width: `calc((100% - 1* 40px)* 12 / 12)` }}>
                                        <div className="flex-col justify-start items-center min-w-0 -mt-2 flex flex-1 self-stretch" style={{ height: `calc(100% + 8px)` }}>
                                            <div className="mt-2 flex relative flex-row w-full h-auto max-w-full min-w-0 p-0">
                                                <div className="flex-row items-center justify-start min-w-0 -ml-[10px] flex flex-1 self-stretch" style={{ height: `calc(100% + 10px)` }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" className="fill-current max-w-full relative w-4 shrink-0 ml-[10px] object-cover text-[#008AA8] h-4" role="img">
                                                        <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                                    </svg>
                                                    <span className="ml-[10px] text-lg text-[#4C566A]">
                                                        <span className="ml-[10px] relative text-lg text-[#4C566A]">Backlog & sprint planning including EPICS and sub-tasks</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-2 flex relative flex-row w-full h-auto max-w-full min-w-0 p-0">
                                                <div className="flex-row items-center justify-start min-w-0 -ml-[10px] flex flex-1 self-stretch" style={{ height: `calc(100% + 10px)` }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" className="fill-current max-w-full relative w-4 shrink-0 ml-[10px] object-cover text-[#008AA8] h-4" role="img">
                                                        <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                                    </svg>
                                                    <span className="ml-[10px] text-lg text-[#4C566A]">
                                                        <span className="ml-[10px] relative text-lg text-[#4C566A]">Estimations (possible per role) including project doom-line</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-2 flex relative flex-row w-full h-auto max-w-full min-w-0 p-0">
                                                <div className="flex-row items-center justify-start min-w-0 -ml-[10px] flex flex-1 self-stretch" style={{ height: `calc(100% + 10px)` }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" className="fill-current max-w-full relative w-4 shrink-0 ml-[10px] object-cover text-[#008AA8] h-4" role="img">
                                                        <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                                    </svg>
                                                    <span className="ml-[10px] text-lg text-[#4C566A]">
                                                        <span className="ml-[10px] relative text-lg text-[#4C566A]">Estimation tool (Taiga Seed)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-2 flex relative flex-row w-full h-auto max-w-full min-w-0 p-0">
                                                <div className="flex-row items-center justify-start min-w-0 -ml-[10px] flex flex-1 self-stretch" style={{ height: `calc(100% + 10px)` }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" className="fill-current max-w-full relative w-4 shrink-0 ml-[10px] object-cover text-[#008AA8] h-4" role="img">
                                                        <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                                    </svg>
                                                    <span className="ml-[10px] text-lg text-[#4C566A]">
                                                        <span className="ml-[10px] relative text-lg text-[#4C566A]">Sprint task board with swim-lanes per user story and zoom function</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-2 flex relative flex-row w-full h-auto max-w-full min-w-0 p-0">
                                                <div className="flex-row items-center justify-start min-w-0 -ml-[10px] flex flex-1 self-stretch" style={{ height: `calc(100% + 10px)` }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" className="fill-current max-w-full relative w-4 shrink-0 ml-[10px] object-cover text-[#008AA8] h-4" role="img">
                                                        <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                                    </svg>
                                                    <span className="ml-[10px] text-lg text-[#4C566A]">
                                                        <span className="ml-[10px] relative text-lg text-[#4C566A]">Burn down chart on project and sprint level</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-2 flex relative flex-row w-full h-auto max-w-full min-w-0 p-0">
                                                <div className="flex-row items-center justify-start min-w-0 -ml-[10px] flex flex-1 self-stretch" style={{ height: `calc(100% + 10px)` }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x={0} y={0} viewBox="0 0 512 512" xmlSpace="preserve" className="fill-current max-w-full relative w-4 shrink-0 ml-[10px] object-cover text-[#008AA8] h-4" role="img">
                                                        <path d="M437.3 30L202.7 339.3 64 200.7l-64 64L213.3 478 512 94z" />
                                                    </svg>
                                                    <span className="ml-[10px] text-lg text-[#4C566A]">
                                                        <span className="ml-[10px] relative text-lg text-[#4C566A]">Possibility to switch over to Kanban and vice versa</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-2 relative w-full h-auto max-w-[800px] flex flex-row items-center justify-start min-w-0 pt-10">
                                                <span className="text-[#008AA8] text-lg">
                                                    <Link className="text-[#008AA8]" href={`/t/quick-intro-to-scrum-module/124`}>
                                                        <span className="fond-bold">Learn more &gt;&gt;</span>
                                                    </Link>
                                                </span>
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

export default PanelFeatureScrum;