import { userAPI } from "../axios/api";

const FOLLOW_FRIENDS = 'FOLLOW_FRIENDS';
const UNFOLLOW_FRIENDS = 'UNFOLLOW_FRIENDS';
const LOAD_FRIENDS = 'LOAD_FRIENDS';
const CLICK_ON_PAGE = 'CLICK_ON_PAGE';
const LOADER = 'LOADER';
const IS_TOGGLE = 'IS_TOGGLE';

let initiateState = {
    usersData: [],
    loaderState: false,
    currentPage: 1,
    pageSize: 4,
    totalCountPerson: 90,
    isToggle: false,
    arrToggles: []
}
let findUsersReducer = (state = initiateState, action) => {
    switch (action.type) {
        case FOLLOW_FRIENDS: {
            let stateCopy = {
                ...state, usersData: state.usersData.map(i => {
                    if (i.id === action.id) {
                        return { ...i, followed: true }
                    }
                    return i
                })
            };
            return stateCopy;
        };

        case UNFOLLOW_FRIENDS: {
            let stateCopy = {
                ...state, usersData: state.usersData.map(i => {
                    if (i.id === action.id) {
                        return { ...i, followed: false }
                    }
                    return i
                })
            };

            return stateCopy;
        };

        case LOAD_FRIENDS:

            return { ...state, usersData: action.users };
            ;

        case CLICK_ON_PAGE:
            return {
                ...state,
                currentPage: action.id
            };
        case LOADER:
            return {
                ...state,
                loaderState: action.loader
            };
        case IS_TOGGLE:
            return {
                ...state,
                arrToggles: action.state ? [...state.arrToggles, action.id] : [state.arrToggles.filter(i => i != action.id)]
            }

        default:
            return state;
    }
}

export const followFriendsActionCreator = (id) => ({ type: FOLLOW_FRIENDS, id });
export const unfollowFriendsActionCreator = (id) => ({ type: UNFOLLOW_FRIENDS, id })
export const loadFriendsActionCreator = (users) => ({ type: LOAD_FRIENDS, users });
export const clickOnPageActionCreator = (id) => ({ type: CLICK_ON_PAGE, id });
export const loaderActionCreator = (loader) => ({ type: LOADER, loader });
export const isToggleActionCreator = (state, id) => ({ type: IS_TOGGLE, state, id });






// *******************************************************************
export const getUsersThunkCreator = (pageSize, currentPage) => {
    return dispatch => {
        dispatch(loaderActionCreator(true));
        userAPI.getUsers(pageSize, currentPage).then(response => {
            dispatch(loaderActionCreator(false));
            dispatch(loadFriendsActionCreator(response.items));
        });
    }
}

export const isFollowThunkCreator = id => {
    return dispatch => {
        dispatch(loaderActionCreator(true));
        dispatch(isToggleActionCreator(true, id));
        userAPI.follow(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(loaderActionCreator(false));
                dispatch(isToggleActionCreator(false, id));
                dispatch(followFriendsActionCreator(id))
            }
        })
    }
}

export const isUnfollowThunkCreator = id => {
    return dispatch => {
        dispatch(loaderActionCreator(true));
        dispatch(isToggleActionCreator(true, id));
        userAPI.unfollow(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(loaderActionCreator(false));
                dispatch(isToggleActionCreator(false, id));
                dispatch(unfollowFriendsActionCreator(id))
            }
        })
    }
}


export default findUsersReducer
