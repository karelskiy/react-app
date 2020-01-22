import * as axios from 'axios';

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '9014ba16-ca0e-42ec-800a-507d9972faf5'
    }
});


export let userAPI = {
    getUsers(pageSize = 4, currentPage = 1){
        return instance.get(`users/?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    follow(id){
        return instance.delete(`follow/${id}`)
    },
    unfollow(id){
        return instance.post(`follow/${id}`)
    }
}