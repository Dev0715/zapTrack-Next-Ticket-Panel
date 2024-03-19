import axios from 'axios';

const signIn = (formData: any) => {
    return new Promise((resolve, reject) => {
        axios.post('/api/auth/signin', formData).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

const signUp = (formData: any) => {
    return new Promise((resolve, reject) => {
        axios.post("/api/auth/signup", formData).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    })
}

const forgotPwd = (formData: any) => {
    return new Promise((resolve, reject) => {
        axios.post('/api/auth/forgot-pwd', formData).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

const resetPwd = (formData: any) => {
    return new Promise((resolve, reject) => {
        axios.post('/api/auth/reset-pwd', formData).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

const getUserByEmail = (formData: any) => {
    return new Promise((resolve, reject) => {
        axios.post('/api/auth/user-by-email', formData).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

const verifyEmail = (formData: any) => {
    return new Promise((resolve, reject) => {
        axios.post('/api/auth/verify-email', formData).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

export {
    signIn,
    signUp,
    forgotPwd,
    resetPwd,
    getUserByEmail,
    verifyEmail
}