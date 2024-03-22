import mongoose from 'mongoose';
import { boolean } from 'zod';

const ProjectSchema = new mongoose.Schema({
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    permission: {
        type: String,
        ref: 'Permission',
    },
    description: {
        type: String
    },
    is_admin: {
        type: boolean
    },
    status: {
        type: Number,
        default: 0          // 0: Pending, 1: Active
    }
}, {
    timestamps: true
});

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default Project;