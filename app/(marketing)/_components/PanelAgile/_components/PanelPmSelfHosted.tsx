const PanelPmSelfHosted = () => {
    return <>
        <div className="max-w-full relative flex flex-row items-center justify-center w-full h-auto bg-[#F1F1F4] min-w-0 p-0">
            <div className="flex flex-row w-auto h-auto max-w-[1260px] bg-none shrink self-stretch grow-0 px-[30px] py-[60px]">
                <div className="flex-row items-stretch justify-between flex-nowrap -ml-[40px] flex flex-1 self-stretch" style={{ width: 'calc(100% + 40px)' }}>
                    <div className="ml-[40px] flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-2" style={{ width: 'calc((100% - 2* 40px)* 5 / 12)' }}>
                        <div className="w-auto h-auto relative object-cover max-w-full flex-col overflow-hidden shrink-0">
                            <img alt="" className="w-auto min-w-full max-w-full h-auto min-h-full visible" src={`/pic-pm-selfhosted.webp`} />
                        </div>
                    </div>
                    <div className="ml-[40px] flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-0" style={{ width: 'calc((100% - 2* 40px)* 7 / 12)' }}>
                        <div className="flex relative flex-col w-full h-full max-w-full min-w-0 min-h-0 p-0">
                            <div className="flex-col flex flex-1 self-stretch items-center justify-center min-w-0 min-h-0 -mt-[10px]" style={{ height: 'calc(100% + 10px)' }}>
                                <div className="mt-[10px] relative w-full h-auto max-w-[800px] flex flex-row min-w-0">
                                    <span className="text-xl text-[#008AA8]">
                                        <h3 className="text-[#008AA8] font-normal text-xl">SELF HOSTED</h3>
                                    </span>
                                </div>
                                <div className="mt-[10px] relative w-full h-auto max-w-[800px] flex flex-row min-w-0">
                                    <span className="text-3xl text-[#4C566A] font-bold leading-5">
                                        <div className="font-bold">100% Open source</div>
                                    </span>
                                </div>
                                <div className="mt-[10px] relative w-full h-auto max-w-[800px] flex flex-row min-w-0 px-0 py-[10px]">
                                    <span className="text-xl text-[#4C566A]">
                                        <div className="flex relative flex-col items-center justify-start w-full h-auto max-w-full min-w-0 p-2">
                                            <div className="relative w-full h-auto max-w-[800px] text-lg min-w-0">Taiga on-premise hosting option is ideal for larger teams or multiple small teams that need to have all data on their own servers and/or want to customize Taiga:</div>
                                            <div className="pb-0 w-full min-w-0">
                                                <ul className="flex flex-col text-lg p-5 items-start justify-center list-disc list-outside">
                                                    <li className="">Easy to <span className="font-bold" >update</span>
                                                    </li>
                                                    <li className="">Your choice of<span className="font-bold"> community contributions</span>
                                                    </li>
                                                    <li className="">Translated to <span className="font-bold">&gt;20 languages</span>
                                                    </li>
                                                    <li className="">
                                                        <span className="font-bold">Customize</span> your installation
                                                    </li>
                                                    <li className="">Unparalleled <span className="font-bold">security and control</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PanelPmSelfHosted;