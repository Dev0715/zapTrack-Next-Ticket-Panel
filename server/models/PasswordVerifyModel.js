import mongoose from 'mongoose';

const PasswordVerifySchema = mongoose.Schema({
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

const PasswordVerify = mongoose.model('PasswordVerify', PasswordVerifySchema);

export default PasswordVerify;