import { useEffect, useState } from "react";
import CardUserStory from "../CardUserStory/page";
import CardUserStoryHint from "../CardUserStoryHint/page";

import { InfModUserstoryStatus, InfModUserstory } from "@/libs/interfaces/model.interface";

interface KanbanBodyProps {
    status: InfModUserstoryStatus,
    hint?: boolean,
    userStories: Array<InfModUserstory>,
    handleSetAssign: (userStory: InfModUserstory) => void
}

const KanbanBody = ({ status, hint, userStories, handleSetAssign }: KanbanBodyProps) => {
    const [cnt, setCnt] = useState(0);

    useEffect(() => {
        let userStoryCnt = userStories.length;
        let curCnt = 0;
        for (let i = 0; i < userStoryCnt; i++) {
            if (userStories[i].status === status._id)
                curCnt++;
        }
        setCnt(curCnt);
    }, [userStories]);

    return <>
        <div className="bg-[#eceff4] rounded basis-[292px] grow-0 shrink-0 mr-[5px] max-w-[292px] overflow-x-hidden overflow-y-auto duration-100 transition-all w-[292px]"
            style={{ contain: `content` }}>
            <div className="items-center bg-[#eceff4] text-[#70728f] inline-flex text-[.68rem] justify-center min-w-8 p-1 absolute top-0 right-0 z-[2]"
                style={{ boxShadow: `-4px 2px 5px -2px rgba(46,52,64,.15)` }}
                title="Number of US">
                <div className="h-[14px] overflow-hidden relative text-center w-full text-[#70728f]">
                    <div style={{ transform: `-4px 2px 5px -2px rgba(46,52,64,.15)` }}>
                        <div className="block h-[14px] overflow-hidden w-full">
                            <span className="current">{cnt}</span>
                        </div>
                        <div className="block h-[14px] overflow-hidden w-full">
                            <span className="current">{cnt + 1}</span>
                        </div>
                        <div className="block h-[14px] overflow-hidden w-full">
                            <span className="current">{cnt - 1}</span>
                        </div>
                    </div>
                </div>
            </div>

            {
                hint &&
                <CardUserStoryHint />
            }

            {
                userStories.map((story, idx) => story.status === status._id && <CardUserStory key={idx} userStory={story} handleSetAssign={(userStory) => handleSetAssign(userStory)} />)
            }
        </div>
    </>
}

export default KanbanBody;