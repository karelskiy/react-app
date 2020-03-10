import { counter } from '../components/Nav-bar/Nav-bar'
const SAY_HI: string = 'SAY_HI';

type actionType = {
    type: typeof SAY_HI,
    text?: string
}

type friendsObjectType = {
    id: number,
    img: string,
    response: string
}

type initiateStateType = {
    friends: Array<friendsObjectType>
}

let initiateState: initiateStateType = {
    friends: [
        { id:1, img: 'http://www.ukrworker.com/pub/skin/default-skin/img/avatar.png', response: '' },
        { id:2, img: 'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png', response: '' },
        { id:3, img: 'http://49.231.30.115/emrcleft/assets/images/avatars/avatar2_big@2x.png', response: '' }
    ],
}
const sidebarReducer = (state: initiateStateType = initiateState, action: actionType): initiateStateType => {
    switch (action.type) {
        case SAY_HI: {
            let copyState = { ...state, friends: [...state.friends]  }
            copyState.friends[counter].response = action.text!;
            return copyState;
        }
        default:
            return state;
    }
}

export default sidebarReducer;

export const sayHiActionCreator = (text: string) => ({ type: SAY_HI, text });
