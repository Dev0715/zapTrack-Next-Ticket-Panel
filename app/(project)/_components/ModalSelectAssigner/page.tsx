import { MdClose } from "react-icons/md";

import { InfModUserstory } from "@/libs/interfaces/model.interface";

interface ModalSelectAssignerProps {
    show: boolean,
    hideAssignModal: () => void,
    userStory: InfModUserstory | null
}

const ModalSelectAssigner = ({ show, hideAssignModal, userStory }: ModalSelectAssignerProps) => {
    console.log(userStory);

    return <>
        <div className={`${show ? `flex` : `hidden`} items-center justify-center transition-opacity duration-300 bg-white opacity-95 bottom-0 left-0 fixed top-0 right-0 z-[98]`}>
            <div className="inline">
                <button
                    className="w-8 h-8 cursor-pointer text-[#5aab72] absolute top-12 right-12 transition-colors duration-200"
                    title="close"
                    onClick={() => hideAssignModal()}
                >
                    <MdClose className="w-8 h-8" />
                </button>
            </div>
            <div className="block basis-[600px] grow-0 w-[600px] mx-2">
                <h2 className="text-center text-[1.7rem] text-[#2e3440] font-normal mb-4">Select assigned user</h2>
                <fieldset className="mb-4 relative w-full border-0 m-0 p-0">
                    <input
                        type="text"
                        data-maxlength={500}
                        placeholder="Search for users"
                        className="bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 pl-[15.2px] pr-4 py-[4.8px] w-full"
                    />
                </fieldset>
                <div className="max-h-[28.5rem] overflow-y-auto">
                    <div>
                        <div className="flex items-center border-b border-[#e2e3e9] py-1 align-middle">
                            <div className="basis-[3rem] mr-1 max-h-[3rem] max-w-[3rem]">
                                <img src="https://tree.taiga.io/v-1708969004480/images/avatar-role.png" className="rounded-full w-full" />
                            </div>
                            <div className="text-[#434456] grow-1 ml-2">
                                <span className="mr-2">Role: Product Owner</span>
                                <span className="text-[#a9aabc]">(aasdfasdfadfsdf)</span>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="flex items-center border-b border-[#e2e3e9] py-1 align-middle">
                            <div className="basis-[3rem] mr-1 max-h-[3rem] max-w-[3rem]">
                                <img style={{ background: 'rgb(183, 203, 131)', visibility: 'visible' }}
                                    src="https://www.gravatar.com/avatar/919392c43c7449e356…4480%2Fimages%2Fuser-avatars%2Fuser-avatar-04.png"
                                    className="rounded-full w-full" />
                            </div>
                            <div className="text-[#434456] grow-1 ml-2">aasdfasdfadfsdf</div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center" >
                    <button type="button" className="bg-[#83eede] text-[#2e3440] transition-all duration-300 px-4 py-[7.2px] text-[.875rem] items-center border-0 rounded inline-flex justify-center text-center uppercase">Add</button>
                </div>
            </div>
        </div>
    </>
}

export default ModalSelectAssigner;