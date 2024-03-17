const PanelAbout = () => {
    return <>
        <div className="flex relative flex-col w-full h-auto max-w-full bg-none min-w-0 p-0" id="About">
            <div className="flex-col items-center justify-center min-w-0 mt-0 flex flex-1 self-stretch" style={{ height: `calc(100% + 0px)` }}>
                <div className="flex relative flex-col w-full h-auto max-w-[1260px] m-0 bg-none min-w-0 pt-[136px] px-[30px]">
                    <div className="flex-col items-center justify-center min-w-0 flex flex-1 self-stretch" style={{ marginTop: `calc(0px - 24px)`, height: `calc(100% + 24px)` }}>
                        <h2 className="mt-6 relative w-full h-auto max-w-none text-[#006385] text-left text-[2.5rem] font-bold min-w-0">About us</h2>
                        <h3 className="mt-6 relative w-full h-auto max-w-none text-[#008AA8] text-[26px] text-left font-bold min-w-0 py-5 pr-5">Open Source and Lean principles gave birth to Taiga</h3>
                        <div className="relative flex-row w-full h-auto max-w-full self-auto left-auto top-auto shrink min-w-0 p-0" style={{ marginTop: `calc(0px + 24px)` }}>
                            <div className="flex flex-1 self-stretch flex-row items-stretch justify-center flew-nowrap min-w-0 -ml-[30px]" style={{ width: `calc(100% + 30px)` }}>
                                <div className="ml-[30px] flex relative flex-col h-auto max-w-full justify-start items-center min-w-0 p-0 " style={{ width: `calc((100% - 2* 30px)* 7 / 12)` }}>
                                    <div className="text-xl pb-1 relative left-auto top-auto text-[#4C566A]">Taiga is an open-source project management software for cross-functional teams that work agile across both scrum and kanban frameworks.<br />
                                        Taiga's birth goes back to a
                                        <a className="text-[#008AA8] underline" href="https://kaleidos.net/">
                                            <span className="text-[#008AA8] underline">Kaleidos</span>
                                            <span className="text-[#008AA8]"> </span>
                                        </a>hackathon in 2013. The team at Kaleidos, filled with frustration, couldn't find an intuitive and visually appealing tool to facilitate agile methodologies for both developers and designers. So, we did what was right. We decided to come up with a better tool and that's how Taiga's journey began! <br />
                                        In only a couple of years, Taiga was rolled out and immediately won "The Best Agile Tool” in the 2015 Agile Awards. Most recently, it was cited as one of the Top 7 project management tools for 2020 by OpenSource.com and it continues to be cited as one of the best agile project management tools with a worldwide footprint.
                                    </div>
                                </div>
                                <div className="ml-[30px] flex relative flex-col h-auto max-w-full justify-center items-center min-w-0 p-0" style={{ width: `calc((100% - 2* 30px)* 5 / 12)` }}>
                                    <div className="h-auto relative object-cover max-w-full w-[610px] left-auto top-auto flexcol overflow-hidden shrink-0">
                                        <img alt="" className="w-full h-auto min-h-full visible" src={`/pic-about.webp`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 relative w-full h-auto max-w-none text-[#4C566A] text-xl min-w-0">We are now busy working on the next iteration of Taiga, something we codenamed
                            <a className="text-[#008AA8] italic inline" href="https://community.taiga.io/t/announcing-the-next-taiga-and-much-more/107">
                                <span className="underline">TaigaNext</span>
                            </a>, and it will showcase the Kaleidos vision around lean and design processes, connecting our two products, both Taiga and <a className="text-[#008AA8] inline" href="https://penpot.app/">
                                <span className="text-[#008AA8] underline">Penpot</span>
                            </a> together.<br />
                            By the way, in case you're wondering, the name of Taiga comes after the boreal forest which lies across the subarctic region. It's strikingly beautiful from a distance but deadly if you enter the Taiga unprepared. A new project is like the Taiga forest, so we created our unique Taiga where you can start any project without any worry at all, we've got you covered. Just enjoy the Taiga!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PanelAbout;