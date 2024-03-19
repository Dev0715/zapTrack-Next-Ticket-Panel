import mongoose from 'mongoose';

const AttrStatusIssueSchema = new mongoose.Schema({
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    color: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    is_closed: {
        type: Boolean
    }
}, {
    timestamps: true
});

const AttrStatusIssue = mongoose.models.AttrStatusIssue || mongoose.model('AttrStatusIssue', AttrStatusIssueSchema);

export default AttrStatusIssue;