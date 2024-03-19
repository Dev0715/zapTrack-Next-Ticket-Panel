import axios from 'axios';

const newKanban = (formData: any) => {
    return new Promise((resolve, reject) => {
        axios.post('/api/project/new/kanban', formData).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

export {
    newKanban
}