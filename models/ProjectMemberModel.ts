import mongoose from 'mongoose';

const ProjectMemberSchema = new mongoose.Schema({
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
    },
    description: {
        type: String
    },
    is_admin: {
        type: Boolean
    },
    status: {
        type: Number,
        default: 0          // 0: Pending, 1: Active
    }
}, {
    timestamps: true
});

const ProjectMember = mongoose.models.ProjectMember || mongoose.model('ProjectMember', ProjectMemberSchema);

export default ProjectMember;