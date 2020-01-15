import { counter } from "../components/Nav-bar/Nav-bar";

const SAY_HI = 'SAY_HI';
const CHANGE_OUR_TEXT = 'CHANGE_OUR_TEXT';

let initiateState = {
    friends: [
        { id:1, img: 'http://www.ukrworker.com/pub/skin/default-skin/img/avatar.png', response: '' },
        { id:2, img: 'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png', response: '' },
        { id:3, img: 'http://49.231.30.115/emrcleft/assets/images/avatars/avatar2_big@2x.png', response: '' }
    ],
    text: ''
}
const sidebarReducer = (state = initiateState, action) => {
    switch (action.type) {
        case CHANGE_OUR_TEXT: {
            let copyState = { ...state }
            copyState.text = action.text;
            return copyState;
        }

        case SAY_HI: {
            let copyState = { ...state }
            copyState.friends[counter].response = action.text;
            copyState.text = '';
            return copyState;
        }
        default:
            return state;
    }
}

export default sidebarReducer;

export const sayHiActionCreator = (text) => ({ type: SAY_HI, text: text });
export const changeOurTextActionCreator = (text) => ({ type: CHANGE_OUR_TEXT, text: text });
