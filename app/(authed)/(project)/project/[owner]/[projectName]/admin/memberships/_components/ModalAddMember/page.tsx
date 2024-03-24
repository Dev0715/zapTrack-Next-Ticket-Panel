"use client"

import { useState, useEffect } from "react";
import Validator from "validator";
import { MdClose, MdOutlineAdd } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";

import { useProject } from "@/libs/contexts/project.context";

import { InfModRole, InfModProjectMember } from "@/libs/interfaces/model.interface";

import { inviteMembers } from "@/app/actions/project/memberships/action";

interface ModalAddMemberProps {
    shown: boolean,
    hideAddModal: () => void
}

const ModalAddMember = ({ shown, hideAddModal }: ModalAddMemberProps) => {
    const projectContext = useProject();
    const INIT_FORM_DATA = { email: "" };

    const [formData, setFormData] = useState(INIT_FORM_DATA);
    const [errors, setErrors] = useState(INIT_FORM_DATA);
    const [invDesc, setInvDesc] = useState("");
    const [errInvDesc, setErrInvDesc] = useState("");
    const [step, setStep] = useState(false);
    const [roles, setRoles] = useState<Array<InfModRole>>([]);
    const [members, setMembers] = useState<Array<InfModProjectMember>>([]);

    useEffect(() => {
        const projectRoles = projectContext.getProjectRoles();
        setRoles(projectRoles);
    }, []);

    const isEmpty = (value: any) => {
        return value === undefined ||
            value === null ||
            (typeof value === "object" && Object.keys(value).length === 0) ||
            (typeof value === "string" && value.trim().length === 0);
    }

    const validationEmailInput = (data: any) => {
        let errors = { email: "" };
        let isValid = true;

        data.email = !isEmpty(data.email) ? data.email : "";

        if (Validator.isEmpty(data.email)) {
            errors.email = "This value is required.";
            isValid = false;
        } else if (!Validator.isEmail(data.email)) {
            errors.email = "Enter a valid email address.";
            isValid = false;
        }

        return {
            errors,
            isValid
        };
    }

    const validationInviteMembers = () => {
        let isValid = true;

        if (invDesc === "") {
            isValid = false;
            setErrInvDesc("This value is required.");
        } else setErrInvDesc("");

        let noPermCnt = members.filter((member, idx) => member.role === "").length;
        if (noPermCnt > 0)
            isValid = false;

        return isValid;
    }

    const handleChangeEmail = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleAddMember = () => {
        let { isValid, errors } = validationEmailInput(formData);

        if (!isValid) {
            setErrors(errors);
            return;
        } else setErrors(INIT_FORM_DATA);

        setStep(true);

        // Add member
        const project = projectContext.getCurProject();
        let sameMemberCnt = members.filter((member, idx) => member.email === formData.email).length;
        if (sameMemberCnt === 0 && project !== null) {
            let newMembers = members;
            newMembers.push({
                _id: "",
                name: "",
                project_id: project._id,
                email: formData.email,
                role: "",
                description: "",
                is_admin: false,
                status: 0
            });
            setMembers(newMembers);
        }
    }

    const handleRemoveMember = (idx: number) => {
        let tempMembers = members;
        tempMembers = tempMembers.filter((member, memIdx) => memIdx !== idx);

        setMembers(tempMembers);
        if (tempMembers.length === 0)
            setStep(false);
    }

    const handleChgRole = (e: any, idx: number) => {
        let tempMembers = members;
        tempMembers[idx].role = e.target.value;
        setMembers(tempMembers);
    }

    const handleInvDescChange = (e: any) => {
        setInvDesc(e.target.value);
    }

    const handleInviteMembers = () => {
        if (!validationInviteMembers())
            return;

        const project = projectContext.getCurProject();
        console.log(project);
        if (project !== null) {
            inviteMembers({
                projectId: project._id,
                invitationText: invDesc,
                memberships: members
            }).then((res: any) => {
                const { status, members } = res;
                if (status) {
                    projectContext.setProjectMembers(members);
                    hideAddModal();
                }
            });
        }
    }

    return <>
        <div className={`${shown ? `flex` : `hidden`} items-center justify-center opacity-95 transition-opacity duration-300 bg-white fixed top-0 left-0 right-0 bottom-0 z-[98]`}>
            <button
                className="w-8 h-8 cursor-pointer block text-[#5a5b72] absolute top-12 right-12 transition-fill duration-200"
                title="close"
                onClick={() => hideAddModal()}
            >
                <MdClose className="w-8 h-8" />
            </button>
            <div className="block max-w-[900px] w-[90%]">
                <h2 className="text-center text-[1.7rem] leading-tight mb-4 text-[#2e3440] font-normal">New Member</h2>
                <div className={`${step ? `hidden` : `block`}`}>
                    <div className="flex items-center px-60 relative">
                        <input
                            type="text"
                            name="email"
                            placeholder="Filter users or write an email to invite"
                            className={`flex-1 mr-1 bg-white border-2 ${errors.email ? `border-[#e44057]` : `border-[#d8dee9]`} rounded-[3px] text-[#4c566a] pr-4 pl-[15.2px] py-[4.8px] w-full`}
                            onChange={handleChangeEmail} />
                        <span className="text-[.7rem] text-[#70728f] absolute right-[19rem] top-[.5rem]" >Add email</span>
                        <button className="bg-[#434456] rounded-[.25rem] px-3 py-2 transition-background duration-200"
                            onClick={() => handleAddMember()}>
                            <AiOutlineUserAdd className="w-[1.3rem] h-[1.3rem] text-white" />
                        </button>
                    </div>
                    <ul className="grid mt-8" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                    </ul>
                </div>
                <div className={`${step ? `block` : `hidden`}`}>
                    <form className="border-t border-[#e2e3e9] mx-20" >
                        <ul className="m-0 mb-4">
                            {
                                members.map((member, idx) =>
                                    <li className="flex items-center border-b border-[#e2e3e9] justify-between p-4" key={idx}>
                                        <div className="flex items-center flex-1">
                                            <span>{member.email}</span>
                                            <a className="text-[#e44057] ml-4 transition-color duration-200 cursor-pointer hover:text-[#4c566a]"
                                                onClick={() => handleRemoveMember(idx)}>Remove</a>
                                        </div>
                                        <select
                                            className={`basis-[40%] shrink-0 bg-white border-2 ${member.role === "" ? `border-[#e44057]` : `border-[#d8dee9]`} rounded-[3px] text-[#4c566a] m-0 pr-4 pl-[15.2px] py-[4.8px] w-full`}
                                            onChange={e => handleChgRole(e, idx)}
                                        >
                                            <option value={``} selected={member.role === ""}>Choose a role</option>
                                            {
                                                roles.map((role, idx) =>
                                                    <option key={idx} label={role.name} value={role._id} selected={member.role === role._id}>{role.name}</option>
                                                )
                                            }
                                        </select>
                                    </li>
                                )
                            }
                        </ul>
                        <div className="flex items-center justify-center py-4">
                            <MdOutlineAdd className="w-8 h-8 text-[#434456] transition-fill duration-200 cursor-pointer hover:text-[#5cbaa9]"
                                onClick={() => setStep(false)} />
                        </div>

                        <textarea
                            placeholder="(Optional) Add a personalized text to the invitation. Tell something lovely to your new members ;-)"
                            maxLength={250}
                            className={`min-h-[10rem] bg-white border-2 ${errInvDesc ? `border-[#e44057]` : `border-[#d8dee9] `} rounded-[3px] text-[#4c566a] pr-4 pl-[15.2px] py-[4.8px] w-full`}
                            defaultValue={""}
                            value={invDesc}
                            onChange={e => handleInvDescChange(e)} />
                        <button
                            type="button"
                            className="text-[1.1rem] block mb-4 mt-6 p-4 w-full bg-[#83eede] text-[#2e3440] transition-all duration-300"
                            onClick={() => handleInviteMembers()}
                        >
                            Invite
                        </button>
                        <p className="text-[.875rem] leading-normal mb-5">
                            If users are already registered on Taiga, they will be added automatically. Otherwise they will receive an invitation.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default ModalAddMember;