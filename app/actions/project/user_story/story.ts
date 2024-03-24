import axios from 'axios';

const getStoriesByProjectId = (projectId: string) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/project/user_story?projectId=${projectId}`).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

const setAssigner = (formData: any) => {
    return new Promise((resolve, reject) => {
        axios.post('/api/project/userstories/set_assigner', formData).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

export {
    getStoriesByProjectId,
    setAssigner
}