import mongoose from 'mongoose';

const AttrPointSchema = new mongoose.Schema({
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

const AttrPoint = mongoose.models.AttrPoint || mongoose.model('AttrPoint', AttrPointSchema);

export default AttrPoint;