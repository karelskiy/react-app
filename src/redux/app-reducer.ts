import { isLoginThunkCreator } from "./auth-reducer";

const IS_AUTHORIZED: string = 'IS_AUTHORIZED';
 
type InitiateStateType = {
    isAuthorized: boolean
}

const initiateState: InitiateStateType = {
    isAuthorized: false
}

type ActionType = {
    type: typeof IS_AUTHORIZED,
}


const appReducer = (state = initiateState, action: ActionType): InitiateStateType => {
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

export const isAuthorizedProfileActionCreator = (): ActionType => ({ type: IS_AUTHORIZED })

export const isAuthorizedThunkCreator = () => (dispatch: any) => {
    let promise = dispatch(isLoginThunkCreator());
    Promise.all([promise])
        .then(() => {
            dispatch(isAuthorizedProfileActionCreator())
        })
} 

export default appReducer;
