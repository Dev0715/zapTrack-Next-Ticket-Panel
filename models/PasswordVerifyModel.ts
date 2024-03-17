import mongoose from 'mongoose';

const PasswordVerifySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    token: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const PasswordVerify = mongoose.models.PasswordVerify || mongoose.model('PasswordVerify', PasswordVerifySchema);

export default PasswordVerify;