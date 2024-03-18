import { ReactNode } from "react";
import { FaQuestion } from "react-icons/fa";

interface CardCreateProjectProps {
    href: string,
    title: string,
    desc: string,
    icon: ReactNode,
    help?: string
}

const CardCreateProject = ({ href, title, desc, icon, help }: CardCreateProjectProps) => {
    return <>
        <a title={title} href={href} className="flex items-center justify-center relative cursor-pointer text-[#434456] border-b border-b-[#e2e3e9] hover:bg-[#008aa819] hover:ease-in hover:duration-300 hover:transition-[background]">
            <div className="self-start px-4 py-6">
                {icon}
            </div>
            <div className="flex-1 p-5">
                <p className="leading-normal uppercase">{title}</p>
                <p className="leading-normal">{desc}</p>
                {
                    help &&
                    <>
                        <div className="absolute top-[1.5rem] right-[1.5rem]">
                            <FaQuestion className="w-[1.2rem] h-[1.2rem] fill-[#434456]" />
                        </div>
                        <div className="hidden mt-4 overflow-hidden" style={{ transition: 'all .3s .2s cubic-bezier(0,0,.53,1.32)' }}>
                            <p className="leading-normal">{help}</p>
                        </div>
                    </>
                }
            </div>
        </a>
    </>
}

export default CardCreateProject;