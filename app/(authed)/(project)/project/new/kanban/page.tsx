"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LuKanbanSquare } from "react-icons/lu";
import { GiWorld } from "react-icons/gi";
import { IoMdKey } from "react-icons/io";
import { toast } from "sonner";

import { validateNewKanban } from "@/app/(authed)/_utils/validations/project-new-kanban";
import { newKanban } from "@/app/actions/project/new/kanban";
import { getItem, LS_USER } from '@/app/utils/localstore';
import { useProject } from "@/libs/contexts/project.context";

const Kanban = () => {
    const router = useRouter();
    const projectContext = useProject();
    const INIT_FORM_DATA = { name: "", desc: "" };

    const [isPublic, setIsPublic] = useState(true);
    const [formData, setFormData] = useState(INIT_FORM_DATA);
    const [errors, setErrors] = useState(INIT_FORM_DATA);

    const handleBack = () => {
        router.push("/project/new");
    }

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleCreateProject = () => {
        const { isValid, errors } = validateNewKanban(formData);
        if (isValid)
            setErrors(INIT_FORM_DATA);
        else {
            setErrors(errors);
            return;
        }

        const user = JSON.parse(getItem(LS_USER) as string);

        newKanban({
            userId: user._id,
            name: formData.name,
            description: formData.desc,
            type: isPublic
        }).then((res: any) => {
            const { status, msg, project, attrStatuseUserstories, roles, members } = res;
            if (status) {
                toast.success(msg);

                projectContext.setCurProject(project);
                projectContext.setProjectMembers(members);
                projectContext.setProjectRoles(roles);

                router.push(`/project/${project.owner}/${project.name}/kanban`);
            } else
                toast.error(msg);
        }).catch(err => {
            console.log(err);
        });
    }

    return <>
        <div className="my-4 mx-auto px-5 w-full max-w-[800px]">
            <div className="items-center flex justify-center mb-0">
                <LuKanbanSquare className="w-7 h-7 text-[#008aa8] mr-4 stroke-[#25a28c] align-middle overflow-hidden" />
                <h1 className="text-[1.7rem] text-center text-[#008aa8]">Kanban</h1>
            </div>
            <h3 className="text-[#70728f] mb-8 text-center leading-normal text-normal">Keep a constant workflow on independent tasks</h3>
            <div>
                <div>
                    <fieldset className="mb-4">
                        <label htmlFor="project-name" className="text-[#70728f] flex mb-1 max-h-[44px]">New project details</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Project Name (Required)"
                            className={`bg-white border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] px-[15.2px] py-[4.8px] w-full ${errors.name && `border-[#e44057b7]`}`}
                            onChange={handleChange}
                        />
                        {
                            errors.name &&
                            <div className="mb-0 mt-2 text-[.7rem] text-[#e44057] transition-opacity duration-300 ">{errors.name}</div>
                        }
                    </fieldset>
                </div>
                <div >
                    <fieldset className="mb-4">
                        <textarea
                            name="desc"
                            placeholder="Project Description (Required)"
                            className={`min-h-[10rem] resize-y bg-hite border-2 border-[#d8dee9] rounded-[3px] text-[#4c566a] py-[4.8px] pl-[15.2px] pr-[16px] w-full ${errors.desc && `border-[#e44057b7]`}`}
                            onChange={handleChange}
                        />
                        {
                            errors.desc &&
                            <div className="mb-0 mt-2 text-[.7rem] text-[#e44057] transition-opacity duration-300 ">{errors.desc}</div>
                        }
                    </fieldset>
                </div>
                <div>
                    <div className="flex">
                        <fieldset className="mb-4 relative w-full border-0 m-0 p-0">
                            <input type="radio" name="is_private" id="template-public" className="hidden" onClick={() => setIsPublic(true)} />
                            <label
                                htmlFor="template-public"
                                className={`rounded-tl-[0.2rem] rounded-bl-[0.2rem] flex min-h-[37px] px-3 items-center cursor-pointer justify-center text-center uppercase mb-1 max-h-[44px] ${isPublic ? `bg-[#008aa8] text-white ` : `bg-[#f1f1f4] text-[#4c566a] hover:transition-colors hover:bg-[#e3e3e9] hover:duration-200`}`}>
                                <GiWorld className={`mr-4 w-4 h-4 ${isPublic ? `text-white` : `text-[#4c566a]`}`} />
                                <span className={`text-[.875rem] ${isPublic ? `text-white` : `text-[#4c566a]`}`}>Public Project</span>
                            </label>
                        </fieldset>
                        <fieldset className="mb-4 relative w-full border-0 m-0 p-0">
                            <input type="radio" name="is_private" id="template-private" className="hidden" onClick={() => setIsPublic(false)} />
                            <label
                                htmlFor="template-private"
                                className={`rounded-tr-[0.2rem] rounded-br-[0.2rem] flex min-h-[37px] px-3 items-center cursor-pointer justify-center text-center uppercase mb-1 max-h-[44px] ${!isPublic ? `bg-[#008aa8] text-white` : `bg-[#f1f1f4] text-[#4c566a] hover:transition-colors hover:bg-[#e3e3e9] hover:duration-200`}`}>
                                <IoMdKey className={`mr-4 w-4 h-4 ${!isPublic ? `text-white` : `text-[#4c566a]`}`} />
                                <span className={`text-[.875rem] ${!isPublic ? `text-white` : `text-[#4c566a]`}`}>Private Project</span>
                            </label>
                        </fieldset>
                    </div>
                </div>
                <div>
                    <div className="mt-12 flex">
                        <button
                            type="button"
                            title="Back"
                            className="bg-[#d8dee9] text-[#4c566a] text-[1.1rem] p-3 flex-1 rounded hover:bg-[#008aa8] hover:text-white hover:transition-colors hover:duration-300" style={{ transition: 'all .3s line' }}
                            onClick={() => handleBack()}
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            className="text-[1.1rem] p-3 flex-[4] ml-4 items-center bg-[#83eede] border-0 rounded text-[#2e3440] inline-flex justify-center text-center uppercase hover:bg-[#008aa8] hover:text-white hover:transition-colors hover:duration-300"
                            onClick={() => handleCreateProject()}
                        >
                            Create Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Kanban;