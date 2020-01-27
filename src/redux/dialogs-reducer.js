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
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {

        case CLICK: {
            let copyState = {...state }
            let obj1 = {
                message: action.data,
                id: 4

            };
            copyState.MessageData = [...state.MessageData, obj1];
            return copyState;
        }
        
        default:
            return state;
    }
}


export const clickActionCreator = (data) => ({ type: CLICK, data });
export default dialogReducer;
