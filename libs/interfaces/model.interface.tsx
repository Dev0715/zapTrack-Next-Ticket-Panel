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

export interface InfModUserstoryStatus {
    _id: string
    project_id: string,
    color: string,
    name: string,
    slug: string,
    is_closed: boolean,
    is_archived: boolean
}