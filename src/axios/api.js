import * as axios from 'axios';

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '9014ba16-ca0e-42ec-800a-507d9972faf5'
    }
});


export let userAPI = {
    getUsers(pageSize = 4, currentPage = 1) {
        return instance.get(`users/?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },

    getAuth() {
        return instance.get(`auth/me`)
    },

    getProfileFromURL(userIdFromURL) {
        return instance.get(`profile/${userIdFromURL}`)
    },

    getStatusFromURL(id) {
        return instance.get(`profile/status/${id}`)
    },

    setStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },

    editProfile(profile) {
        return instance.put(`profile/`, profile)
    },

    loadPhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export let authAPI = {
    putLogin(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    deleteLogin() {
        return instance.delete(`auth/login`)
    }
}


export let captchaAPI = {
    getCaptcha(){
        return instance.get(`security/get-captcha-url`)
    }
}