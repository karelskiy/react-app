import { userAPI } from "../axios/api";

const SET_USER_DATA = 'SET_USER_DATA';

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