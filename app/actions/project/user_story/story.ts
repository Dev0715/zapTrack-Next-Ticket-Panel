import axios from 'axios';

const getStoriesByProjectId = ( projectId: string) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/project/user_story?projectId=${projectId}`).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

export {
    getStoriesByProjectId
}