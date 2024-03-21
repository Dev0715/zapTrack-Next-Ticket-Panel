import axios from 'axios';

const getStatusesByProId = (projectId: string) => {
    return new Promise((resolve, reject) => {
        axios.get(`/api/project/attr/status/userstories/pro_id?projectId=${projectId}`).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

export {
    getStatusesByProId
}