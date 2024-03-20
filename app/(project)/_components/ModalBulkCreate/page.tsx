import { MdClose } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

interface ModalBulkCreateProps {
    show: boolean,
    hideBulkModal: any
}

const ModalBulkCreate = ({ show, hideBulkModal }: ModalBulkCreateProps) => {
    return <>
        <div className={`items-center justify-center transition-opacity duration-300 bg-white opacity-95 fixed top-0 left-0 right-0 bottom-0 z-[98] ${show ? `flex` : `hidden`} `}>
            <div className="inline">
                <button
                    className="w-8 h-8 top-12 right-12 absolute text-[#5a5b72] cursor-pointer transition-fill duration-200"
                    title="close"
                    onClick={hideBulkModal}>
                    <MdClose className="w-8 h-8" />
                </button>
            </div>
            <form className="basis-[600px] grow-0 max-w-[600px]">
                <h2 className="text-center text-[1.7rem] leading-tight mb-4 text-[#2e3440] font-normal">New bulk insert</h2>
                <fieldset className="mb-4 relative w-full">
                    <div className="text-[.7rem] text-[#2e3440] mb-1 uppercase">Select status</div>
                    <div className="relative">
                        <button type="button" className="bg-[#e44057] text-[.875rem] border-2 border-transparent rounded-[3px] text-white flex justify-between px-4 py-1 w-full"><span>Ready</span>
                            <RiArrowDownSLine className="w-4 h-4" />
                        </button>
                        <div className="bg-white border border-[#d8dee9] rounded p-2 absolute w-full z-[2] hidden"
                            style={{ boxShadow: `4px 4px 8px rgba(216,222,233,.5)`, top: `calc(1.5rem + 4px)` }}>
                            <button type="button" className="text-[.875rem] text-[#008aa8] cursor-pointer p-1 text-left w-full">New</button>
                            <button type="button" className="text-[.875rem] text-[#70728f] cursor-pointer p-1 text-left w-full">Ready</button>
                            <button type="button" className="text-[.875rem] text-[#008aa8] cursor-pointer p-1 text-left w-full">In progress</button>
                            <button type="button" className="text-[.875rem] text-[#008aa8] cursor-pointer p-1 text-left w-full">Ready for test</button>
                            <button type="button" className="text-[.875rem] text-[#008aa8] cursor-pointer p-1 text-left w-full">Done</button>
                            <button type="button" className="text-[.875rem] text-[#008aa8] cursor-pointer p-1 text-left w-full">Archived</button>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <div className="text-[.7rem] text-[#2e3440] mb-1 uppercase">Location</div>
                    <div className="flex">
                        <label className="flex self-center mr-2 text-[.875rem] text-[#505c74]">
                            <input type="radio" defaultValue="bottom" defaultChecked className="w-0 opacity-0 h-0" />
                            <span className="border-2 border-[#d8dee9] rounded-full grid h-[18px] mr-1 w-[18px]" style={{ transform: `translateY(-.06rem)` }} />
                            <span className="text-[#008aa8]">at the bottom</span>
                        </label>
                        <label className="flex self-center mr-2 text-[.875rem] text-[#505c74]">
                            <input type="radio" defaultValue="top" className="w-0 opacity-0 h-0" />
                            <span className="border-2 border-[#d8dee9] rounded-full grid h-[18px] mr-1 w-[18px]" style={{ transform: `translateY(-.06rem)` }} />
                            <span className="text-[#505c74]">on top</span>
                        </label>
                    </div>
                </fieldset>

                <fieldset className="mb-4 relative w-full">
                    <textarea cols={200} className="max-h-[12rem] min-h-[15rem] bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] m-0 w-full pr-4 pl-[15.2px] py-[4.8px]" placeholder="One item per line..." defaultValue={""} />
                </fieldset>
                <div className="flex justify-end">
                    <button type="submit" title="Save" className="bg-[#83eede] text-[#2e3440] transition-all duration-300 px-4 py-[7.2px] text-[.875rem] items-center border-0 rounded inline-flex justify-center uppercase text-center">Save</button>
                </div>
            </form>
        </div>
    </>
}

export default ModalBulkCreate;