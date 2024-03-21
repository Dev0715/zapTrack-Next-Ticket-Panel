export interface UserStoryStatus {
    _id: string
    project_id: string,
    color: string,
    name: string,
    slug: string,
    is_closed: boolean,
    is_archived: boolean
}