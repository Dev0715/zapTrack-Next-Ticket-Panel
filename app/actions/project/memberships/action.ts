import axios from 'axios';

const inviteMembers = (formData: any) => {
    return new Promise((resolve, reject) => {
        axios.post(`/api/project/memberships/bulk_create`, formData).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

const deleteMember = (formData: any) => {
    return new Promise((resolve, reject) => {
        axios.post(`/api/project/memberships/delete`, formData).then((res) => {
            resolve(res.data);
        }).catch((err: any) => {
            reject(err);
        })
    })
}

export {
    inviteMembers,
    deleteMember
}