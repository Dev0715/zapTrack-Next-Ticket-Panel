import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";
import { MdDragIndicator } from "react-icons/md";
import { BiKey } from "react-icons/bi";

interface ListProjectProps {
    title: string,
    description: string,
    owner: string,
    isPrivate?: boolean
}

const ListProject = ({ title, description, owner, isPrivate }: ListProjectProps) => {
    return <>
        <li className="bg-white/[.6] border-b border-[#d8dee9] flex p-2 justify-between">
            <div>
                <div className="flex">
                    <Link href={`/project/${owner}/${title}/kanban`} title={title} className="shrink-0 mr-4 w-12 text-[#008aa8]">
                        <img alt={title} src="	https://tree.taiga.io/v-1708969004480/images/project-logos/project-logo-05.png" style={{ background: 'rgb(152, 224, 168)' }} />
                    </Link>
                    <div>
                        <div className="text-[1.1rem] flex items-center gap-[0.25rem] text-[#4c566a] mt-1">
                            <Link href={`/project/${owner}/${title}/kanban`} title={title} className="text-[#008aa8]">{title}</Link>
                            {
                                isPrivate &&
                                <BiKey className="w-[22px] h-[22px] ml-2 text-[#70728f]" />
                            }
                            <HiBadgeCheck className="w-4 h-4 text-[#5cbaa9]" />
                        </div>
                        <div className="flex items-center gap-[0.25rem] flex-wrap">{description}</div>
                    </div>
                </div>
            </div>
            <MdDragIndicator className="w-[1.1rem] h-[1.1rem] text-[#70728f] mr-2 duration-200 transition-opacity" />
        </li>
    </>
}

export default ListProject; 