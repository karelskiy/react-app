const TEXT_UPDATE = 'TEXT-UPDATE';
const CLICK = 'CLICK';


let initialState = {
    DialogsData: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Nikolzy' },
        { id: 3, name: 'Alina' },
        { id: 4, name: 'Denis' },
        { id: 5, name: 'Marina' },
    ],
    MessageData: [
        { id:1, message: 'Hi, how are you?)' },
        { id:2, message: 'How much it cost?' },
        { id:3, message: 'Sorry, but i can`t' },
    ],
    newText: ''
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEXT_UPDATE: {
            let copyState = { ...state }
            copyState.newText = action.newText;
            return copyState;
        }

        case CLICK: {
            let copyState = {...state }
            let obj1 = {
                message: state.newText,
                id: 4

            };
            copyState.newText = '';
            copyState.MessageData = [...state.MessageData, obj1];
            return copyState;
        }
        
        default:
            return state;
    }
}



export const textUpdateActionCreator = (text) => ({ type: TEXT_UPDATE, newText: text });
export const clickActionCreator = () => ({ type: CLICK });
export default dialogReducer;
