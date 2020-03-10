import { userAPI } from "../axios/api";
import { UserType } from "../types/types";

const FOLLOW_FRIENDS: string = 'FOLLOW_FRIENDS';
const UNFOLLOW_FRIENDS: string = 'UNFOLLOW_FRIENDS';
const LOAD_FRIENDS: string = 'LOAD_FRIENDS';
const CLICK_ON_PAGE: string = 'CLICK_ON_PAGE';
const LOADER: string = 'LOADER';
const IS_TOGGLE: string = 'IS_TOGGLE';
const COUNT_PERSON: string = 'COUNT_PERSON';



let initiateState = {
    usersData: [] as Array<UserType>,
    loaderState: false,
    currentPage: 1,
    pageSize: 4,
    totalCountPerson: 90,
    isToggle: false,
    arrToggles: [] as Array<number>
}

type InitiateStateType = typeof initiateState;

let followUnfollowButton = (state: any, action: any, isFollowed: boolean): InitiateStateType => {
    let stateCopy = {
        ...state, usersData: state.usersData.map((i:any) => {
            if (i.id === action.id) {
                return { ...i, followed: isFollowed }
            }
            return i
        })
    };
    return stateCopy;
}

let findUsersReducer = (state = initiateState, action: any) => {
    switch (action.type) {
        case FOLLOW_FRIENDS:
            return followUnfollowButton(state, action, true);

        case UNFOLLOW_FRIENDS: 
            return followUnfollowButton(state, action, false);

        case LOAD_FRIENDS:
            return { ...state, usersData: action.users };

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
                arrToggles: action.state ? [...state.arrToggles, action.id] : [state.arrToggles.filter(i => i !== action.id)]
            };

        case COUNT_PERSON:
            return {...state, totalCountPerson: action.int};

        default:
            return state;
    }
}

type FollowFriendsActionCreatorType = {
    type: typeof FOLLOW_FRIENDS,
    id: number
}
export const followFriendsActionCreator = (id: number): FollowFriendsActionCreatorType => ({ type: FOLLOW_FRIENDS, id });

type UnfollowFriendsActionCreatorType = {
    type: typeof UNFOLLOW_FRIENDS,
    id: number,
}
export const unfollowFriendsActionCreator = (id: number): UnfollowFriendsActionCreatorType => ({ type: UNFOLLOW_FRIENDS, id })

type LoadFriendsActionCreatorType = {
    type: typeof LOAD_FRIENDS,
    users: Array<UserType>,
}

export const loadFriendsActionCreator = (users: Array<UserType>): LoadFriendsActionCreatorType  => ({ type: LOAD_FRIENDS, users });

type ClickOnPageActionCreatorType = {
    type: typeof CLICK_ON_PAGE,
    id: number,
}
export const clickOnPageActionCreator = (id: number): ClickOnPageActionCreatorType => ({ type: CLICK_ON_PAGE, id });

type LoaderActionCreatorType = {
    type: typeof LOADER,
    loader: boolean,
}
export const loaderActionCreator = (loader: boolean): LoaderActionCreatorType => ({ type: LOADER, loader });

type IsToggleActionCreatorType = {
    type: typeof IS_TOGGLE,
    state: boolean,
    id: number,
}
export const isToggleActionCreator = (state: boolean, id: number): IsToggleActionCreatorType => ({ type: IS_TOGGLE, id, state });

type SetTotalCountPersonType = {
    type: typeof COUNT_PERSON,
    int: number
}
export const setTotalCountPerson = (int: number): SetTotalCountPersonType => ({type: COUNT_PERSON, int})




// *******************************************************************
export const getUsersThunkCreator = (pageSize: number, currentPage: number) => {     //   <-- thunkCreator
    return async (dispatch: any) => {                                                //   <-- thunk
        dispatch(loaderActionCreator(true));
        let response = await userAPI.getUsers(pageSize, currentPage);
        console.log(response)
        dispatch(setTotalCountPerson(response.totalCount))
        dispatch(loaderActionCreator(false));
        dispatch(loadFriendsActionCreator(response.items));
    }
}

const followUnfollowFlow = (id: number, dispatch: any, actionCreator: any, methodAPI: any) => {
    dispatch(loaderActionCreator(true));
    dispatch(isToggleActionCreator(true, id));
    let response = methodAPI

    if (response.data.resultCode === 0) {
        dispatch(loaderActionCreator(false));
        dispatch(isToggleActionCreator(false, id));
        dispatch(actionCreator)
    }
}


export const isFollowThunkCreator = (id: number) => {
    return async (dispatch: any) => {

        let actionCreator = followFriendsActionCreator(id);
        let methodAPI = await userAPI.follow(id)
        followUnfollowFlow(id, dispatch, actionCreator, methodAPI)
    }
}

export const isUnfollowThunkCreator = (id: number) => {
    return async (dispatch: any) => {

        let actionCreator = unfollowFriendsActionCreator(id)
        let methodAPI = await userAPI.unfollow(id);
        followUnfollowFlow(id, dispatch, actionCreator, methodAPI)
    }
}


export default findUsersReducer
