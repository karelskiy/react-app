import { userAPI, authAPI } from "../axios/api";
import { stopSubmit } from "redux-form";

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
            return { ...state, ...action.data }
        }

        default:
            return state;
    }
}

export default authReducer;


export const setUserDataActionCreator = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, data: { userId, login, email, isAuth } });
export const putLoginActionCreator = (email, login) => ({ type: PUT_LOGIN, data: { email, login } })

export const isLoginThunkCreator = _ => {
    return dispatch => {
        return userAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setUserDataActionCreator(id, login, email, true));
            }
        });
    }
}

export const putLoginTunkCreator = (email, password, rememberMe) => {
    return dispatch => {
        authAPI.putLogin(email, password, rememberMe)
            .then(response => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    dispatch(isLoginThunkCreator());
                } else {
                    dispatch(stopSubmit('login', { _error: response.data.messages }))
                }
            })
    }   
}

export const deleteLoginThunkCreator = () => {
    return dispatch => {
        authAPI.deleteLogin()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataActionCreator(null, null, null, false))
                }
            })
    }
}