import mongoose from 'mongoose';

const UserStorySchema = new mongoose.Schema({
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    tags: {
        type: String
    },
    description: {
        type: String,
    },
    attachments: {
        type: Object
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AttrStatusUserstory',
        required: true
    },
    location: {
        type: Number
    },
    assigner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    point_ux: {
        type: Number
    },
    point_design: {
        type: Number
    },
    point_front: {
        type: Number
    },
    point_back: {
        type: Number
    },
    due_date: {
        type: Date
    },
    team_requirement: {
        type: Boolean,
        default: false
    },
    client_requirement: {
        type: Boolean,
        default: false
    },
    is_blocked: {
        type: Boolean,
        default: false
    },
    blocked_reason: {
        type: String
    },
    swimlane_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AttrKanbanSwimline'
    }
}, {
    timestamps: true
});

const UserStory = mongoose.models.UserStory || mongoose.model('UserStory', UserStorySchema);

export default UserStory;