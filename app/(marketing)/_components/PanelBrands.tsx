import Link from "next/link";

const PanelBrands = () => {
    return <>
        <div className="flex relative flex-row w-full h-auto max-w-[1260px] mt-0 shrink min-w-0 px-[100px] py-2">
            <div className="flex flex-1 self-stretch flex-row items-stretch justify-center flex-nowrap min-w-0 -ml-[30px]" style={{ width: 'calc(100% + 30px)' }}>
                <div className="ml-30px flex relative flex-col h-auto max-w-full justify-evenly items-center min-w00 p-2" style={{ width: 'calc((100% - 4* 30px)* 3 / 12)' }}>
                    <Link className="w-full relative w-[125px]" href="https://www.g2.com/products/taiga-agile-llc-taiga/reviews" target="_blank" rel="noreferrer">
                        <img src="https://images.g2crowd.com/uploads/report_medal/image/1003085/medal.svg" alt="Taiga is a leader in Project Management on G2" title="Taiga is a leader in Project Management on G2" className="w-full visible" data-xblocker="passed" />
                    </Link>
                </div>
                <div className="ml-[30px] flex relative flex-col h-auto max-w-full justify-evenly items-center min-w-0 p-2" style={{ width: 'calc((100% - 4* 30px)* 3 / 12)' }}>
                    <Link className="max-w-full relative" href="https://www.capterra.com/reviews/137160/Taiga-io" target="_blank" rel="noreferrer">
                        <img src="https://assets.capterra.com/badge/fec58037f9ef62bfcb9f8874602888ae.png?v2096748&p=137160" alt="" className="w-full" />
                    </Link>
                </div>
                <div className="ml-[30px] flex relative flex-col h-auto max-w-full justify-evenly items-center min-w-0 p-2" style={{ width: 'calc((100% - 4* 30px)* 3 / 12)' }}>
                    <Link className="max-w-full relative mr-0 w-[150px] h-[78px] shrink-1" href="https://crozdesk.com/it/development-tools-software/taiga-io" target="_blank" rel="noreferrer">
                        <img src="//embed.crozdesk.com/badges/v2/rating/taiga-io" alt="Taiga.io reviews" title="Taiga.io - software ratings and reviews on Crozdesk" className="w-full" />
                    </Link>
                </div>
                <div className="ml-[30px] flex relative flex-col h-auto max-w-full justify-evenly items-center min-w-0 p-2" style={{ width: 'calc((100% - 4* 30px)* 3 / 12)' }}>
                    <Link className="max-w-full relative" href="https://www.getapp.com/project-management-planning-software/a/taiga/reviews/" target="_blank" rel="noreferrer">
                        <img src="https://www.getapp.com/ext/reviews_widget/v1/dark/taiga-application" alt="Read Taiga Reviews on GetApp.com" title="Read Taiga Reviews on GetApp.com" className="w-full" />
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default PanelBrands;