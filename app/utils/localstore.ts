const LS_USER = "ls_user";

const setItem = (key: string, data: string) => {
    localStorage.setItem(key, data);
}

const getItem = (key: string) => {
    const data = localStorage.getItem(key);
    return data;
}

export {
    LS_USER,
    setItem,
    getItem
}