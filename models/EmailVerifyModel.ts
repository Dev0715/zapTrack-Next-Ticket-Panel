import mongoose from 'mongoose';

const EmailVerifySchema = new mongoose.Schema({
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

const EmailVerify = mongoose.models.EmailVerify || mongoose.model('EmailVerify', EmailVerifySchema);

export default EmailVerify;