export interface InfModAttrKanbanSwimline {
    _id: string,
    project_id: string,
    name: string,
    default: boolean
}

export interface InfModAttrPoint {
    _id: string,
    project_id: string,
    name: string,
    value: number
}

export interface InfModAttrStatusEpic {
    _id: string,
    project_id: string,
    color: string,
    name: string,
    slug: string,
    is_closed: boolean,
}

export interface InfModAttrStatusIssue {
    _id: string,
    project_id: string,
    color: string,
    name: string,
    slug: string,
    is_closed: string
}

export interface InfModAttrStatusTask {
    _id: string,
    project_id: string,
    color: string,
    name: string,
    slug: string,
    is_closed: string
}

export interface InfModAttrStatusUserstory {
    _id: string,
    project_id: string,
    color: string,
    name: string,
    slug: string,
    is_closed: boolean,
    is_archived: boolean
}

export interface InfModEmailVerify {
    _id: string,
    email: string,
    token: string
}

export interface InfModPasswordVerify {
    _id: string,
    email: string,
    token: string
}

export interface InfModProjectMember {
    _id: string,
    project_id: string,
    email: string,
    permission: string,
    description: string,
    is_admin: boolean,
    status: number
}

export interface InfModProject {
    _id: string,
    owner: string,
    name: string,
    description: string,
    type: boolean,
    tags: string,
    is_looking_for_people: boolean,
    who_looking_for: string,
    is_receive_feedback: boolean,
    preset_epic_id: string,
    preset_userstory_id: string,
    preset_point_id: string,
    preset_task_id: string,
    preset_issue_type: number,
    preset_issue_status: string,
    preset_priority: number,
    preset_severity: number,
    module_epics: boolean,
    module_scrum: boolean,
    module_scrum_sprint: boolean,
    module_scrum_storypoint: boolean,
    module_kanban: boolean,
    module_issues: boolean,
    module_wiki: boolean,
    module_meetup: boolean,
    module_meetup_type: number,
    module_meetup_prefix: string
}

export interface InfModRole {
    _id: string,
    project_id: string,
    name: string,
    epic_view: boolean,
    epic_add: boolean,
    epic_modify: boolean,
    epic_comment: boolean,
    epic_delete: boolean,
    sprint_view: boolean,
    sprint_add: boolean,
    sprint_modify: boolean,
    sprint_delete: boolean,
    userstory_view: boolean,
    userstory_add: boolean,
    userstory_modify: boolean,
    userstory_comment: boolean,
    userstory_delete: boolean,
    task_view: boolean,
    task_add: boolean,
    task_modify: boolean,
    task_comment: boolean,
    task_delete: boolean,
    issue_view: boolean,
    issue_add: boolean,
    issue_modify: boolean,
    issue_comment: boolean,
    issue_delete: boolean,
    wiki_view: boolean,
    wiki_add: boolean,
    wiki_modify: boolean,
    wiki_delete: boolean,
    wiki_link_add: boolean,
    wiki_link_delete: boolean,
    wiki_link_view: boolean,
    role_involve: boolean,
}

export interface InfModUser {
    _id: string,
    username: string,
    full_name: string,
    email: string,
    password: string,
    language: string,
    theme_id: number,
    bio: string,
    photo: string,
    premium_date: string,
    is_premium: boolean,
    status: boolean,
    signin_type: number
}

export interface InfModUserstory {
    _id: string,
    project_id: string,
    subject: string,
    tags: string,
    description: string,
    attachments: any,
    status: string,
    location: number,
    assigner: string,
    point_ux: number,
    point_design: number,
    point_front: number,
    point_back: number,
    due_date: string,
    team_requirement: boolean,
    client_requirement: boolean,
    is_blocked: boolean,
    blocked_reason: string,
    swimlane_id: string
}