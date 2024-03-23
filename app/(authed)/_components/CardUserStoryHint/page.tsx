const CardUserStoryHint = () => {
    return <>
        <div className="px-4 py-[26px]">
            <div className="bg-white rounded p-4 mt-2 mb-4" style={{ boxShadow: `4px 4px 8px rgba(216,222,233,.5)` }}>
                <div className="rounded flex mb-2">
                    <div className="bg-[#d8dee9] basis-6 mr-4 h-4 rounded" />
                    <div className="bg-[#d8dee9] flex-auto h-4 rounded" />
                </div>
                <div className="rounded flex mb-2">
                    <div className="bg-[#e5e9f0] rounded basis-[60%] h-4" />
                </div>
                <div className="rounded flex items-center justify-between">
                    <div className="bg-[#eceff4] rounded-[28px] h-[28px] mt-2 w-[28px]" />
                    <div className="bg-[#f9f9fb] rounded basis-[115px] h-4" />
                </div>
            </div>
            <div>
                <div />
                <div />
            </div>
            <div>
                <div />
                <div />
            </div>
            <p className="font-medium text-[#70728f] m-0 text-[.875rem]">This could be a user story</p>
            <p className="text-[.875rem] text-[#70728f] m-0 leading-normal">Create user stories here and change their status to track their progress.</p>
        </div>
    </>
}

export default CardUserStoryHint;