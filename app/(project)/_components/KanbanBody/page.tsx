import CardUserStory from "../CardUserStory/page";
import CardUserStoryHint from "../CardUserStoryHint/page";

interface KanbanBodyProps {
    stories: Array<any>,
    hint?: boolean,
}

const KanbanBody = ({ stories, hint }: KanbanBodyProps) => {
    return <>
        <div className="bg-[#eceff4] rounded basis-[292px] grow-0 shrink-0 mr-[5px] max-w-[292px] overflow-x-hidden overflow-y-auto duration-100 transition-all w-[292px]"
            style={{ contain: `content` }}>
            <div className="items-center bg-[#eceff4] text-[#70728f] inline-flex text-[.68rem] justify-center min-w-8 p-1 absolute top-0 right-0 z-[2]"
                style={{ boxShadow: `-4px 2px 5px -2px rgba(46,52,64,.15)` }}
                title="Number of US">
                <div className="h-[14px] overflow-hidden relative text-center w-full text-[#70728f]">
                    <div style={{ transform: `-4px 2px 5px -2px rgba(46,52,64,.15)` }}>
                        <div className="block h-[14px] overflow-hidden w-full">
                            <span className="current">0</span>
                        </div>
                        <div className="block h-[14px] overflow-hidden w-full">
                            <span className="current">0</span>
                        </div>
                        <div className="block h-[14px] overflow-hidden w-full">
                            <span className="current">0</span>
                        </div>
                    </div>
                </div>
            </div>

            {
                hint &&
                <CardUserStoryHint />
            }
            {
                stories.map((story, idx) => <CardUserStory />)
            }
        </div>
    </>
}

export default KanbanBody;