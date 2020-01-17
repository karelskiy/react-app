const FOLLOW_FRIENDS = 'FOLLOW_FRIENDS';
const LOAD_FRIENDS = 'LOAD_FRIENDS';
const CLICK_ON_PAGE = 'CLICK_ON_PAGE';

let initiateState = {
    usersData: [],
    pageSize: 4,
    totalPageCount: 19,
    choosedPage: 1

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

        default:
            return state;
    }
}

export const findUsersActionCreator = (id) => ({ type: FOLLOW_FRIENDS, id });
export const loadFriendsActionCreator = (users) => ({ type: LOAD_FRIENDS, users });
export const clickOnPageActionCreator = (id) => ({ type: CLICK_ON_PAGE, id })


export default findUsersReducer
