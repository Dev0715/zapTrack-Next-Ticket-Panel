const PanelPmPanel = () => {
    return <>
        <div className="flex relative m-0 flex-row items-center justify-center w-full h-auto max-w-full bg-[#F1F1F4] min-w-0 p-0">
            <div className="flex flex-row w-auto h-auto max-w-[1260px] bg-none shrink self-stretch grow-0 px-[30px] py-[60px]">
                <div className="flex flex-1 self-stretch flex-row items-stretch justify-between flex-nowrap -ml-[40px]" style={{ width: 'calc(100% + 40px)' }}>
                    <div className="ml-40px flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-2" style={{ width: 'calc((100% - 2* 40px)* 5 / 12)' }}>
                        <div className="w-auto h-auto relative object-cover max-w-full self-end flex-col overflow-hidden shrink-0">
                            <img alt="" className="min-w-full max-w-full h-auto min-h-full visible" src={`/pic-pm-plan.webp`} />
                        </div>
                    </div>
                    <div className="ml-[40px] flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-0" style={{ width: 'calc((100% - 2* 40px)* 7 / 12)' }}>
                        <div className="flex relative flex-col w-full h-full max-w-full min-w-0 min-h-0 p-0">
                            <div className="flex-col items-center justify-center min-w-0 min-h-0 -mt-[10px] flex flex-1 self-stretch" style={{ width: 'calc(100% + 10px)' }}>
                                <div className="mt-[10px] relative w-full h-auto max-w-[800px] flex flexrow min-w-0">
                                    <span className="text-xl text-[#008AA8]">
                                        <h3 className="text-[#008AA8] text-xl font-normal">PLANNING</h3>
                                    </span>
                                </div>
                                <div className="mt-[10px] relative w-full h-auto max-w-[800px] flex flex-row min-w-0">
                                    <span className="text-3xl text-[#4C566A] font-bold leading-tight">
                                        <div className="font-bold">Get organized</div>
                                    </span>
                                </div>
                                <div className="mt-[10px] relative w-full h-auto max-w-[800px] flex flex-row min-w-0 py-[10px]">
                                    <span className="text-xl text-[#4C566A]">
                                        <div className="mr-0 z-[1] pr-0">Define deliverables involving your full team to capture all team´s knowledge and secure buy in. Regularly align and (re)prioritize deliverables with the end user, to allow for timely pivots and assure the highest priority ones are completed in time.
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

export default PanelPmPanel;