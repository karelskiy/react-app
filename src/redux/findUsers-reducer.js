const FOLLOW_FRIENDS = 'FOLLOW_FRIENDS';
const LOAD_FRIENDS = 'LOAD_FRIENDS';
const CLICK_ON_PAGE = 'CLICK_ON_PAGE';
const LOADER = 'LOADER';

let initiateState = {
    usersData: [],
    loaderState: false
}
let findUsersReducer = (state = initiateState, action) => {
    switch (action.type) {

        case FOLLOW_FRIENDS: {
            let stateCopy = {
                ...state, usersData: [...state.usersData]
            };

            if (stateCopy.usersData[action.id - 1].gender === 'male') stateCopy.usersData[action.id - 1].gender = 'female';
            else stateCopy.usersData[action.id - 1].gender = 'male';

            return stateCopy;
        };

        case LOAD_FRIENDS:
            let counter = 1;

            let stateCopy = { ...state, usersData: [...state.usersData, ...action.users] };
            stateCopy.usersData.map((i) => {
                i.id = counter;
                counter++;
            })
            return stateCopy;

        case CLICK_ON_PAGE:
            return {
                ...state,
                choosedPage: action.id
            };
        case LOADER:
            return{
                ...state,
                loaderState: action.loader
            }

        default:
            return state;
    }
}

export const findUsersActionCreator = (id) => ({ type: FOLLOW_FRIENDS, id });
export const loadFriendsActionCreator = (users) => ({ type: LOAD_FRIENDS, users });
export const clickOnPageActionCreator = (id) => ({ type: CLICK_ON_PAGE, id });
export const loaderActionCreator = (loader) => ({type:LOADER, loader})


export default findUsersReducer
