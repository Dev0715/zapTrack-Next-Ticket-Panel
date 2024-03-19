import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: Boolean,
        default: true   // true: `Public`, false: `Private`
    },
    tags: {
        type: String
    },
    is_looking_for_people: {
        type: Boolean
    },
    who_looking_for: {
        type: String
    },
    is_receive_feedback: {
        type: Boolean
    },
    preset_epic_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AttrStatusEpic'
    },
    preset_userstory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AttrStatusUserstory'
    },
    preset_point_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AttrPoint'
    },
    preset_task_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AttrStatusTask'
    },
    preset_issue_type: {
        type: Number,
    },
    preset_issue_status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AttrStatusIssue'
    },
    preset_priority: {
        type: Number,
    },
    preset_severity: {
        type: Number,
    },
    module_epics: {
        type: Boolean
    },
    module_scrum: {
        type: Boolean
    },
    module_scrum_sprint: {
        type: Boolean
    },
    module_scrum_storypoint: {
        type: Boolean
    },
    module_kanban: {
        type: Boolean
    },
    module_issues: {
        type: Boolean
    },
    module_wiki: {
        type: Boolean
    },
    module_meetup: {
        type: Boolean
    },
    module_meetup_type: {
        type: Number,
    },
    module_meetup_prefix: {
        type: String
    },
}, {
    timestamps: true
});

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default Project;