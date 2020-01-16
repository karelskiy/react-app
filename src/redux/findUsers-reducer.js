const FOLLOW_FRIENDS = 'FOLLOW_FRIENDS';
const LOAD_FRIENDS = 'LOAD_FRIENDS';

let initiateState = {
    usersData: []

}
let findUsersReducer = (state = initiateState, action) => {
    switch (action.type) {
        
        case FOLLOW_FRIENDS: {
            let stateCopy = {
                ...state, usersData: [...state.usersData]
            };

            if(stateCopy.usersData[action.id - 1].gender === 'male') stateCopy.usersData[action.id-1].gender = 'female';
            else stateCopy.usersData[action.id - 1].gender = 'male';

            return stateCopy;
        };

        case LOAD_FRIENDS:
            let counter = 1;

            let stateCopy = { ...state, usersData: [...state.usersData, ...action.users] };
            stateCopy.usersData.map((i)=>{
                i.id = counter;
                counter++;
                return
            })
            console.log(stateCopy)
            return stateCopy

        default:
            return state;
    }
}

export const findUsersActionCreator = (id) => ({ type: FOLLOW_FRIENDS, id: id});
export const loadFriendsActionCreator = (users)=>({type: LOAD_FRIENDS, users: users});


export default findUsersReducer
