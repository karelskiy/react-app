const FOLLOW_FRIENDS = 'FOLLOW_FRIENDS';
const UNFOLLOW_FRIENDS = 'UNFOLLOW_FRIENDS';
const LOAD_FRIENDS = 'LOAD_FRIENDS';
const CLICK_ON_PAGE = 'CLICK_ON_PAGE';
const LOADER = 'LOADER';

let initiateState = {
    usersData: [],
    loaderState: false,
    currentPage: 1,
    pageSize: 4,
    totalCountPerson: 50,
}
let findUsersReducer = (state = initiateState, action) => {
    switch (action.type) {

        case FOLLOW_FRIENDS: {
            let stateCopy = {
                ...state, usersData: state.usersData.map(i => {
                    if (i.id === action.id){
                        return {...i,followed: true}
                    }
                    return i
                })
            };


            return stateCopy;
        };

        case UNFOLLOW_FRIENDS: {
            let stateCopy = {
                ...state, usersData: state.usersData.map(i => {
                    if (i.id === action.id){
                        return {...i,followed: false}
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


        default:
            return state;
    }
}

export const followFriendsActionCreator = (id) => ({ type: FOLLOW_FRIENDS, id });
export const unfollowFriendsActionCreator = (id) => ({ type: UNFOLLOW_FRIENDS, id })
export const loadFriendsActionCreator = (users) => ({ type: LOAD_FRIENDS, users });
export const clickOnPageActionCreator = (id) => ({ type: CLICK_ON_PAGE, id });
export const loaderActionCreator = (loader) => ({ type: LOADER, loader });


export default findUsersReducer
