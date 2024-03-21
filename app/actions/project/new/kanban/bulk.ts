import axios from 'axios';

const createBulk = (formData: any) => {
    return new Promise((resolve, reject) => {
        axios.post('/api/project/new/kanban/bulk', formData).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

export {
    createBulk
}