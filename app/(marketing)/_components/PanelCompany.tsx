"use client";

const PanelCompany = () => {
    return <>
        <div className="flex relative flex-col items-center justify-center w-full h-auto max-w-full bg-[#F1F1F4] min-w-0 p-0">
            <div className="flex relative flex-col items-center justify-start w-full h-auto max-w-[1260px] min-w-0 px-[30px] py-[60px] m-0">
                <h2 className="relative w-full h-auto max-w-none text-[#008AA8] text-[2.5rem] text-center font-bold min-w-0 p-5">Join some of the most Agile companies in the world</h2>
                <div className="flex relative flex-col items-center justify-start w-full h-auto max-w-full min-w-0 p-[4%]">
                    <div className="flex relative w-full h-auto shrink flex-row min-w-0 px-0 py-[10px]">
                        <div className="items-stretch flex-row flex-wrap min-w-0 -ml-[60px] flex flex-1 self-stretch" style={{ width: 'calc(100% + 60px)' }}>
                            <div className="ml-[60px] flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-2" style={{ width: 'calc((100% - 2* 60px) * 6 / 12)' }}>
                                <div className="w-auto h-auto relative object-cover max-w-full flex-col truncate shrink-0">
                                    <img alt="" aria-hidden="true" className="w-auto min-w-full max-w-full h-auto min-h-full block" src={`/company1.webp`} />
                                </div>
                            </div>
                            <div className="ml-[60px] flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-2" style={{ width: 'calc((100% - 2* 60px) * 6 / 12)' }}>
                                <div className="w-auto h-auto relative object-cover max-w-full flex-col truncate shrink-0">
                                    <img alt="" aria-hidden="true" className="w-auto min-w-full max-w-full h-auto min-h-full block" src={`/company2.webp`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative w-full h-auto shrink flex-row min-w-0 px-0 py-[10px]">
                        <div className="items-stretch flex-row flex-wrap min-w-0 -ml-[60px] flex flex-1 self-stretch" style={{ width: 'calc(100% + 60px)' }}>
                            <div className="ml-[60px] flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-2" style={{ width: 'calc((100% - 2* 60px) * 6 / 12)' }}>
                                <div className="w-auto h-auto relative object-cover max-w-full flex-col truncate shrink-0">
                                    <img alt="" aria-hidden="true" className="w-auto min-w-full max-w-full h-auto min-h-full block" src={`/company3.webp`} />
                                </div>
                            </div>
                            <div className="ml-[60px] flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-2" style={{ width: 'calc((100% - 2* 60px) * 6 / 12)' }}>
                                <div className="w-auto h-auto relative object-cover max-w-full flex-col truncate shrink-0">
                                    <img alt="" aria-hidden="true" className="w-auto min-w-full max-w-full h-auto min-h-full block" src={`/company4.webp`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative w-full h-auto shrink flex-row min-w-0 px-0 py-[10px]">
                        <div className="items-stretch flex-row flex-wrap min-w-0 -ml-[60px] flex flex-1 self-stretch" style={{ width: 'calc(100% + 60px)' }}>
                            <div className="ml-[60px] flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-2" style={{ width: 'calc((100% - 2* 60px) * 6 / 12)' }}>
                                <div className="w-auto h-auto relative object-cover max-w-full flex-col truncate shrink-0">
                                    <img alt="" aria-hidden="true" className="w-auto min-w-full max-w-full h-auto min-h-full block" src={`/company5.webp`} />
                                </div>
                            </div>
                            <div className="ml-[60px] flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-2" style={{ width: 'calc((100% - 2* 60px) * 6 / 12)' }}>
                                <div className="w-auto h-auto relative object-cover max-w-full flex-col truncate shrink-0">
                                    <img alt="" aria-hidden="true" className="w-auto min-w-full max-w-full h-auto min-h-full block" src={`/company6.webp`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-auto max-w-none text-center text-[#70728F] not-italic text-base min-w-0">Logos and trademarks property of respective owners. These organizations are not endorsing Taiga products</div>
            </div>
        </div>
    </>
}

export default PanelCompany;