import { counter } from "../components/Nav-bar/Nav-bar";

const SAY_HI = 'SAY_HI';
const CHANGE_OUR_TEXT = 'CHANGE_OUR_TEXT';

let initiateState = {
    friends: [
        {img: 'http://www.ukrworker.com/pub/skin/default-skin/img/avatar.png', response:''},
        {img: 'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png', response:''},
        {img: 'http://49.231.30.115/emrcleft/assets/images/avatars/avatar2_big@2x.png', response: ''}
    ],
    text: ''
}
const sidebarReducer = (state = initiateState, action) => {
    switch(action.type){
        case CHANGE_OUR_TEXT:
            state.text = action.text;
            break;
        case SAY_HI: 
            state.friends[counter].response = action.text;
            state.text = '';
            break;
    }
    return state;

}

export default sidebarReducer;

export const sayHiActionCreator = (text) => ({type: SAY_HI, text: text});
export const changeOurTextActionCreator = (text) => ({type: CHANGE_OUR_TEXT, text: text});
