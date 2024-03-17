interface BtnFormSubmitProps {
    type: "submit" | "reset" | "button" | undefined,
    title: string | undefined,
    label: string | undefined,
    onClick: any,
    disabled?: boolean | undefined
}

const BtnFormSubmit = ({ type, title, label, onClick, disabled }: BtnFormSubmitProps) => {
    return <>
        <fieldset className="flex mb-2 justify-end border-0 p-0 m-0 relative w-full">
            <button
                type={type}
                title={title}
                className={`w-full bg-[#83eede] text-[#2e3440] px-4 py-[0.45rem] text-[.875rem] items-center border-0 rounded inline-flex justify-center text-center uppercase hover:text-white hover:bg-[#008aa8] ${disabled && `bg-[#d8dee9] text-[#2E344080] hover:bg-[#d8dee9] hover:text-[#2e3440]`}`}
                style={{ transition: 'all .3s linear' }}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </fieldset>
    </>
}

export default BtnFormSubmit;