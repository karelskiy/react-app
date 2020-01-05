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
        { message: 'Hi, how are you?)' },
        { message: 'How much it cost?' },
        { message: 'Sorry, but i can`t' },
    ],
    newText: ''
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEXT_UPDATE:
            state.newText = action.newText;
            break;

        case CLICK:

            let obj1 = {
                message: state.newText
            };
            state.MessageData.push(obj1);
            state.newText = '';
            break;
    }
    return state
}



export const textUpdateActionCreator = (text) => ({ type: TEXT_UPDATE, newText: text });
export const clickActionCreator = () => ({ type: CLICK });
export default dialogReducer;
