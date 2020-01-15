const FOLLOW_FRIENDS = 'FOLLOW_FRIENDS';
const LOAD_FRIENDS = 'LOAD_FRIENDS';

let initiateState = {
    usersData: [
        { id: 1, src: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg', status: true, name: 'Svetlana D.', desire: 'I`m looking for a job right now...', location: { country: 'Belarus', city: 'Minsk' } },
        { id: 2, src: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg', status: false, name: 'Mihail I.', desire: 'I like football!!!', location: { country: 'Ukraine', city: 'Kiev' } },
        { id: 3, src: 'https://mdbootstrap.com/img/Photos/Avatars/img(30).jpg', status: false, name: 'Katarina St.', desire: 'Why do guys younger than me like me?', location: { country: 'England', city: 'London' } },
    ]

}

let findUsersReducer = (state = initiateState, action) => {
    switch (action.type) {
        case FOLLOW_FRIENDS: {
            let stateCopy = {
                ...state, usersData: [...state.usersData]
            };
            stateCopy.usersData[action.id - 1].status = !stateCopy.usersData[action.id - 1].status;
            return stateCopy;
        }

        case LOAD_FRIENDS: {
            return { ...state, usersData: [...state.usersData, ...action.users] }
        }
        default:
            return state;
    }
}

export const findUsersActionCreator = (id) => ({ type: FOLLOW_FRIENDS, id: id });
export const loadFriendsActionCreator = (users)=>({type: LOAD_FRIENDS, users: users})

export default findUsersReducer
