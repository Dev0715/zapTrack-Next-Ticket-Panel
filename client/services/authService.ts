import axios from "axios";

interface UserType {
    data: {
        msg: string,
        success: boolean,
        user: {
            createdAt: string,
            email: string,
            full_name: string,
            is_premium: boolean,
            password: string,
            signin_type: number,
            status: boolean,
            updatedAt: string,
            username: string,
            _id: string
        }
    }
}

interface ForgotResType {
    data: {
        msg: string,
        status: boolean,
        wrongInfo: boolean | undefined
    }
}

class AuthService {
    service: any;

    constructor() {
        this.service = axios.create({
            // baseURL: process.env.SERVER_URL + `/api`,
            baseURL: `http://localhost:5001/api`,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    signIn = (formData: any) => {
        return new Promise((resolve, reject) => {
            this.service.post('/user/signin', formData).then((res: UserType) => {
                resolve(res.data);
            }).catch((err: any) => {
                reject(err);
            })
        })
    }

    signUp = (formData: any) => {
        return new Promise((resolve, reject) => {
            this.service.post('/user/signup', formData).then((res: UserType) => {
                resolve(res.data);
            }).catch((err: any) => {
                reject(err);
            })
        })
    }

    forgotPwd = (formData: any) => {
        return new Promise((resolve, reject) => {
            this.service.post('/user/forgot-pwd', formData).then((res: ForgotResType) => {
                resolve(res.data);
            }).catch((err: any) => {
                reject(err);
            })
        })
    }

    resetPwd = (formData: any) => {
        return new Promise((resolve, reject) => {
            this.service.post('/user/reset-pwd', formData).then((res: ForgotResType) => {
                resolve(res.data);
            }).catch((err: any) => {
                reject(err);
            })
        })
    }
}

const service = new AuthService();

export default service;