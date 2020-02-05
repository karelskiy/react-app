import { userAPI } from "../axios/api";

const FOLLOW_FRIENDS = 'FOLLOW_FRIENDS';
const UNFOLLOW_FRIENDS = 'UNFOLLOW_FRIENDS';
const LOAD_FRIENDS = 'LOAD_FRIENDS';
const CLICK_ON_PAGE = 'CLICK_ON_PAGE';
const LOADER = 'LOADER';
const IS_TOGGLE = 'IS_TOGGLE';
const COUNT_PERSON = 'COUNT_PERSON';

let initiateState = {
    usersData: [],
    loaderState: false,
    currentPage: 1,
    pageSize: 4,
    totalCountPerson: 90,
    isToggle: false,
    arrToggles: []
}

let followUnfollowButton = (state, action, isFollowed) => {
    let stateCopy = {
        ...state, usersData: state.usersData.map(i => {
            if (i.id === action.id) {
                return { ...i, followed: isFollowed }
            }
            return i
        })
    };
    return stateCopy;
}

let findUsersReducer = (state = initiateState, action) => {
    switch (action.type) {
        case FOLLOW_FRIENDS:
            return followUnfollowButton(state, action, true);

        case UNFOLLOW_FRIENDS: {
            return followUnfollowButton(state, action, false)
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
        case COUNT_PERSON:
            return {...state, totalCountPerson: action.int}

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
export const setTotalCountPerson = (int) => ({type: COUNT_PERSON, int})






// *******************************************************************
export const getUsersThunkCreator = (pageSize, currentPage) => {     //   <-- thunkCreator
    return async dispatch => {                                       //   <-- thunk
        dispatch(loaderActionCreator(true));
        let response = await userAPI.getUsers(pageSize, currentPage);
        console.log(response)
        dispatch(setTotalCountPerson(response.totalCount))
        dispatch(loaderActionCreator(false));
        dispatch(loadFriendsActionCreator(response.items));
    }
}

const followUnfollowFlow = (id, dispatch, actionCreator, methodAPI) => {
    dispatch(loaderActionCreator(true));
    dispatch(isToggleActionCreator(true, id));
    let response = methodAPI

    if (response.data.resultCode === 0) {
        dispatch(loaderActionCreator(false));
        dispatch(isToggleActionCreator(false, id));
        dispatch(actionCreator)
    }
}


export const isFollowThunkCreator = id => {
    return async dispatch => {

        let actionCreator = followFriendsActionCreator(id);
        let methodAPI = await userAPI.follow(id)
        followUnfollowFlow(id, dispatch, actionCreator, methodAPI)
    }
}

export const isUnfollowThunkCreator = id => {
    return async dispatch => {

        let actionCreator = unfollowFriendsActionCreator(id)
        let methodAPI = await userAPI.unfollow(id);
        followUnfollowFlow(id, dispatch, actionCreator, methodAPI)
    }
}


export default findUsersReducer
