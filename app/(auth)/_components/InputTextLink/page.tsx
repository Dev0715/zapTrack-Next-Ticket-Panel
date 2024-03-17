import Link from "next/link"

interface InputTextLinkProps {
    tagId: string,
    type: string,
    name: string,
    placeholder: string,
    error: string,
    value: string,
    onChange: any,
    linkUrl: string,
    linkTitle: string,
    linkLabel: string
}

const InputTextLink = ({ tagId, type, name, placeholder, error, value, onChange, linkUrl, linkTitle, linkLabel }: InputTextLinkProps) => {
    return <>
        <fieldset className="mb-2 border-0 m-0 p-0 relative w-full">
            <input type={type} required name={name} placeholder={placeholder} className={`bg-white border-2 rounded-[3px] m-0 px-4 py-[4.8px] w-full text-[#4C566A] ${error ? `border-[#e44057]` : `border-[#d8dee9]`}`} onChange={onChange} value={value} />
            <Link href={linkUrl} title={linkTitle} className="text-[.876rem] text-[#4c566a] opacity-100 absolute right-4 top-[0.6rem]" style={{ transition: 'all .3s linear' }}>{linkLabel}</Link>
            {
                error &&
                <ul className="text-[#ff6363]">
                    <li className="p-[3.2px] text-left my-2">{error}</li>
                </ul>
            }
        </fieldset>
    </>
}

export default InputTextLink;