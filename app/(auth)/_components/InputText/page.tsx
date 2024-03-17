interface InputTextProps {
    type: string,
    name: string,
    placeholder: string,
    error: string,
    value: string,
    onChange: any,
    tagId?: string
}

const InputText = ({ tagId, type, name, placeholder, error, value, onChange }: InputTextProps) => {
    return <>
        <fieldset className="mb-2 border-0 m-0 p-0 relative w-full">
            <input type={type} required name={name} placeholder={placeholder} className={`bg-white border-2 rounded-[3px] m-0 px-4 py-[4.8px] w-full text-[#4C566A] ${error ? `border-[#e44057]` : `border-[#d8dee9]`}`} onChange={onChange} value={value} />
            {
                error &&
                <ul className="text-[#ff6363]">
                    <li className="p-[3.2px] text-left my-2">{error}</li>
                </ul>
            }
        </fieldset>
    </>
}

export default InputText;