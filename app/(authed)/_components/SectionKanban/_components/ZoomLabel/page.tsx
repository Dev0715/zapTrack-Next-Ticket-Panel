interface ZoomLabelProps {
    title: string,
    value: number,
    selected: boolean,
    handleSelected: any
}

const ZoomLabel = ({ title, value, selected, handleSelected }: ZoomLabelProps) => {
    return <>
        <label className="mr-2" title={title} onClick={handleSelected}>
            <input type="radio" defaultValue={value} className="hidden p-0" />
            <div className={`flex items-center rounded-2xl cursor-pointer ${selected ? `w-auto bg-[#008aa8]` : `w-4 bg-[#d8dee9] hover:bg-[#83eede]`}  h-4`}>
                <span className={`text-[.7rem] text-white px-5 ${!selected && `hidden`}`}>{title}</span>
            </div>
        </label>
    </>
}

export default ZoomLabel;