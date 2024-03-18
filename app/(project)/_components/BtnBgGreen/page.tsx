interface BtnBgGreenProps {
    title: string,
    label: string
}

const BtnBgGreen = ({ title, label }: BtnBgGreenProps) => {
    return <>
        <button
            title={title}
            className="bg-[#83eede] text-[#2e3440] px-4 py-[7.2px] rounded uppercase hover:bg-[#008aa8] hover:text-white" >
            {label}
        </button>
    </>
}

export default BtnBgGreen;