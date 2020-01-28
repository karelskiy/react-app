import { isLoginThunkCreator } from "./auth-reducer";

const IS_AUTHORIZED = 'IS_AUTHORIZED';
 
let initiateState = {
    isAuthorized: false
}

const appReducer = (state = initiateState, action) => {
    switch (action.type) {
        case IS_AUTHORIZED:
            return {
                ...state,
                isAuthorized: true
            }
        default:
            return state
    }
}

export const isAuthorizedProfileActionCreator = () => ({ type: IS_AUTHORIZED })

export const isAuthorizedThunkCreator = () => dispatch => {
    let promise = dispatch(isLoginThunkCreator());
    Promise.all([promise])
        .then(() => {
            dispatch(isAuthorizedProfileActionCreator())
        })
} 

export default appReducer;
