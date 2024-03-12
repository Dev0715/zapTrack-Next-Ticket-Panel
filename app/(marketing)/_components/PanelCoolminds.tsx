"use client";

const PanelCoolminds = () => {
    return <>
        <div className="flex relative flex-row items-stretch justify-start w-full h-auto max-w-[1260px] top-auto left-auto self-center shrink flex-nowrap min-w-0 p-2">
            <div className="flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-2" style={{ width: '50%' }}>
                <div className="max-w-full h-full w-full self-start min-w-0 min-h-0 flex items-stretch shrink flex-row flex-nowrap bg-white shadow-none relative rounded-none p-0">
                    <div className="flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-0" style={{ width: 'calc((100% - 1* 0px)* 12 / 12)' }}>
                        <div className="w-auto h-auto relative object-contain max-w-[146px] overflow-hidden flex-col shrink-1">
                            <img alt="" className="w-auto min-w-full max-w-full h-auto min-h-full" src={`/pic-coolmind-gonzalo.webp`} />
                        </div>
                        <div className="flex relative flex-col items-center justify-center w-full h-auto max-w-full bg-none self-start min-w-0 p-5">
                            <div className="relative w-full h-auto max-w-none pt-0 min-h-[120px] flex flex-row min-w-0 mb-4">
                                <span className="text-[18px] italic text-[#70728F] text-center">
                                    <div className="text-xl not-italic mb-0">"It was a 180-degree change. Less than a month after starting with Taiga, the stress level of the team went down dramatically. In a few months the relationship with the client had become stronger. "</div>
                                </span>
                            </div>
                            <div className="relative w-auto h-auto max-w-[800px] justify-end flex flex-col self-start">
                                <span className="font-bold text-[#008AA8] text-right">
                                    <div className="text-2xl self-start">Gonzalo</div>
                                </span>
                            </div>
                            <div className="relative w-auto h-auto max-w-[800px] justify-end flex flex-row self-start">
                                <span className="italic text-center text-[#008AA8]">
                                    <div className="text-base text-left">New Business Director at Secuoyas</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-2" style={{ width: '50%' }}>
                <div className="min-w-full relative self-auto h-auto w-full left-auto top-auto min-w-0">
                    <div className="flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-0" style={{ width: 'calc((100% - 1* 0px)* 12 / 12)' }}>
                        <div className="w-auto h-auto relative object-cover max-w-[370px] mt-[60px] mb-[40px] flex-col overflow-hidden shrink-1">
                            <img alt="" className="w-auto min-w-full max-w-full h-auto min-h-full" src={`/pic-coolmind-jeroen.webp`} />
                        </div>
                        <div className="flex relative flex-col items-center justify-center w-full h-auto max-w-full bg-none self-start min-w-0 p-5">
                            <div className="relative w-full h-auto max-w-none pt-0 min-h-[120px] flex flex-row min-w-0 mb-4">
                                <span className="text-[18px] italic text-[#70728F] text-center">
                                    <div className="text-xl not-italic mb-0 h-auto pb-[14px] self-center">"Now more than ever we need a digital environment that supports an Agile form of working and Taiga does just that."</div>
                                </span>
                            </div>
                            <div className="relative w-auto h-auto max-w-[800px] justify-end flex flex-col self-start">
                                <span className="font-bold text-[#008AA8] text-right">
                                    <div className="text-2xl self-start">Jeroen</div>
                                </span>
                            </div>
                            <div className="relative w-auto h-auto max-w-[800px] justify-end flex flex-row self-start">
                                <span className="italic text-center text-[#008AA8]">
                                    <div className="text-base text-left">Consultant at Coolminds</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PanelCoolminds;