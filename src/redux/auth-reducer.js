import { userAPI, authAPI } from "../axios/api";

const SET_USER_DATA = 'SET_USER_DATA';
const PUT_LOGIN = 'PUT_LOGIN';
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, ...action.data, isAuth: true }
        }

        default:
            return state;
    }
}

export default authReducer;


export const setUserDataActionCreator = (userId, login, email) => ({ type: SET_USER_DATA, data: { userId, login, email } });
export const putLoginActionCreator = (email, login) => ({type: PUT_LOGIN, data:{email, login}})
export const isLoginThunkCreator = _ => {
    return dispatch => {
        userAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setUserDataActionCreator(id, login, email));
            }
        });
    }
}

export const putLoginTunkCreator = (email, password) => {
    return dispatch => {
        authAPI.putLogin(email, password)
            .then(response => {
                console.log(response)
            })
    }
}