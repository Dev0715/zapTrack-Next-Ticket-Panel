import mongoose from 'mongoose';

const AttrKanbanSwimlineSchema = new mongoose.Schema({
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    default: {
        type: Boolean,
        required: false
    }
}, {
    timestamps: true
});

const AttrKanbanSwimline = mongoose.models.AttrKanbanSwimline || mongoose.model('AttrKanbanSwimline', AttrKanbanSwimlineSchema);

export default AttrKanbanSwimline;