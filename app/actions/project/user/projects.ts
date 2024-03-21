import axios from 'axios';

const getProjectsByUserId = (userId: string) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/project/user/projects?userId=${userId}`).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

const getProjectByUserIdAndProName = (userId: string, projectName: string) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/project/user/project_name?userId=${userId}&projectName=${[projectName]}`).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

export {
    getProjectsByUserId,
    getProjectByUserIdAndProName
}