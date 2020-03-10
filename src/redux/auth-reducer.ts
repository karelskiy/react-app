import { userAPI, authAPI, captchaAPI } from "../axios/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA: string = 'SET_USER_DATA';
const PUT_LOGIN: string = 'PUT_LOGIN';
const GET_CAPTCHA: string = 'GET_CAPTCHA';

type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captcha: string | null
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
};

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, ...action.data }
        }
        case GET_CAPTCHA:
            return { ...state, captcha: action.url}

        default:
            return state;
    }
}

type SetUserDataActionCreatorDataType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

type SetUserDataActionCreatorType = {
   type: typeof SET_USER_DATA,
   data: SetUserDataActionCreatorDataType
}

export const setUserDataActionCreator = (userId: number| null, login: string | null, email: string | null, isAuth: boolean): SetUserDataActionCreatorType => ({ type: SET_USER_DATA, data: { userId, login, email, isAuth } });

type PutLoginActionCreatorDataType = {
    email: string,
    login: string,
}

type PutLoginActionCreatorType = {
    type: typeof PUT_LOGIN,
    data: PutLoginActionCreatorDataType
}
export const putLoginActionCreator = (email: string, login: string): PutLoginActionCreatorType => ({ type: PUT_LOGIN, data: { email, login } });

type SetCaptchaInStateType = {
    type: typeof GET_CAPTCHA,
    url: string
}
export const setCaptchaInState = (url: string): SetCaptchaInStateType => ({type: GET_CAPTCHA, url})

export const isLoginThunkCreator = () => {
    return async (dispatch:any) => {
        let response = await userAPI.getAuth()
        
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch(setUserDataActionCreator(id, login, email, true));
        }
    }
}

export const putLoginTunkCreator = (email:string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        let response = await authAPI.putLogin(email, password, rememberMe, captcha)

        if (response.data.resultCode === 0) {
            dispatch(isLoginThunkCreator());
        } else {
            if(response.data.resultCode === 10){
                dispatch(getCaptchaThunkCreator());
            }
            dispatch(stopSubmit('login', { _error: response.data.messages }))
        }
    }
}

export const deleteLoginThunkCreator = () => {
    return async (dispatch: any) => {
        let response = await authAPI.deleteLogin()

        if (response.data.resultCode === 0) {
            dispatch(setUserDataActionCreator(null, null, null, false))
        }
    }
}

export const getCaptchaThunkCreator = () => {
    return async (dispatch: any) => {
        let response = await captchaAPI.getCaptcha()
        dispatch(setCaptchaInState(response.data.url))
    }
}


export default authReducer;
