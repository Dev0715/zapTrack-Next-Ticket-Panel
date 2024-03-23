import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    epic_view: {
        type: Boolean,
        required: true
    },
    epic_add: {
        type: Boolean,
        required: true
    },
    epic_modify: {
        type: Boolean,
        required: true
    },
    epic_comment: {
        type: Boolean,
        required: true
    },
    epic_delete: {
        type: Boolean,
        required: true
    },
    sprint_view: {
        type: Boolean,
        required: true
    },
    sprint_add: {
        type: Boolean,
        required: true
    },
    sprint_modify: {
        type: Boolean,
        required: true
    },
    sprint_delete: {
        type: Boolean,
        required: true
    },
    userstory_view: {
        type: Boolean,
        required: true
    },
    userstory_add: {
        type: Boolean,
        required: true
    },
    userstory_modify: {
        type: Boolean,
        required: true
    },
    userstory_comment: {
        type: Boolean,
        required: true
    },
    userstory_delete: {
        type: Boolean,
        required: true
    },
    task_view: {
        type: Boolean,
        required: true
    },
    task_add: {
        type: Boolean,
        required: true
    },
    task_modify: {
        type: Boolean,
        required: true
    },
    task_comment: {
        type: Boolean,
        required: true
    },
    task_delete: {
        type: Boolean,
        required: true
    },
    issue_view: {
        type: Boolean,
        required: true
    },
    issue_add: {
        type: Boolean,
        required: true
    },
    issue_modify: {
        type: Boolean,
        required: true
    },
    issue_comment: {
        type: Boolean,
        required: true
    },
    issue_delete: {
        type: Boolean,
        required: true
    },
    wiki_view: {
        type: Boolean,
        required: true
    },
    wiki_add: {
        type: Boolean,
        required: true
    },
    wiki_modify: {
        type: Boolean,
        required: true
    },
    wiki_delete: {
        type: Boolean,
        required: true
    },
    wiki_link_add: {
        type: Boolean,
        required: true
    },
    wiki_link_delete: {
        type: Boolean,
        required: true
    },
    wiki_link_view: {
        type: Boolean,
        required: true
    },
    role_involve: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

const Role = mongoose.models.Role || mongoose.model('Role', RoleSchema);

export default Role;   