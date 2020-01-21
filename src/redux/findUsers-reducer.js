const FOLLOW_FRIENDS = 'FOLLOW_FRIENDS';
const UNFOLLOW_FRIENDS = 'UNFOLLOW_FRIENDS'; 
const LOAD_FRIENDS = 'LOAD_FRIENDS';
const CLICK_ON_PAGE = 'CLICK_ON_PAGE';
const LOADER = 'LOADER';
const CURRENT_API = 'CURRENT_API';
const CLICK_ON_PROFILE = 'CLICK_ON_PROFILE';

let initiateState = {
    usersData: [],
    loaderState: false,
    currentPage: 1,
    pageSize: 4,
    totalCountPerson: 20,
    currentPerson: {}
}
let findUsersReducer = (state = initiateState, action) => {
    switch (action.type) {

        case FOLLOW_FRIENDS: {
            let stateCopy = {
                ...state, usersData: [...state.usersData]
            };
            stateCopy.usersData[action.id - 1].followed = true;

            return stateCopy;
        };

        case UNFOLLOW_FRIENDS: {
            let stateCopy = {
                ...state, usersData: [...state.usersData]
            };
            stateCopy.usersData[action.id - 1].followed = false;

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


        default:
            return state;
    }
}

export const followFriendsActionCreator = (id) => ({ type: FOLLOW_FRIENDS, id });
export const unfollowFriendsActionCreator= (id) => ({type: UNFOLLOW_FRIENDS, id })
export const loadFriendsActionCreator = (users) => ({ type: LOAD_FRIENDS, users });
export const clickOnPageActionCreator = (id) => ({ type: CLICK_ON_PAGE, id });
export const loaderActionCreator = (loader) => ({ type: LOADER, loader });

export const getCurrentApiActionCreator = (api) => ({ type: CURRENT_API, api });
export const clickOnProfilePageActionCreator = () => ({ type: CLICK_ON_PROFILE });

export default findUsersReducer
