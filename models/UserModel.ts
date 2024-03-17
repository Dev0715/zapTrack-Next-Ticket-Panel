import mongoose from 'mongoose';

const SIGNIN_TYPE = {
    EMAIL: 0,
    GITHUB: 1,
    GITLAB: 2
}

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    language: {
        type: String,
    },
    theme_id: {
        type: Number
    },
    bio: {
        type: String
    },
    photo: {
        type: String
    },
    premium_date: {
        type: Date
    },
    is_premium: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: false
    },
    signin_type: {
        type: Number,
        default: SIGNIN_TYPE.EMAIL  // 0: Email, 1: Github, 2: Gitlab
    },
}, {
    timestamps: true
});

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

export { SIGNIN_TYPE }

export default UserModel