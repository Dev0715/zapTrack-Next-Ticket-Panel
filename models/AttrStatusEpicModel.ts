import mongoose from 'mongoose';

const AttrStatusEpicSchema = new mongoose.Schema({
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

const AttrStatusEpic = mongoose.models.AttrStatusEpic || mongoose.model('AttrStatusEpic', AttrStatusEpicSchema);

export default AttrStatusEpic;