import mongoose from 'mongoose';

const AttrStatusUserstorySchema = new mongoose.Schema({
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
        type: Boolean,
        default: false
    },
    is_archived: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const AttrStatusUserstory = mongoose.models.AttrStatusUserstory || mongoose.model('AttrStatusUserstory', AttrStatusUserstorySchema);

export default AttrStatusUserstory;