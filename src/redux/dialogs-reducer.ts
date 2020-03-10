const CLICK: string = 'CLICK';

type DialogsType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

let initialState = {
    DialogsData: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Nikolzy' },
        { id: 3, name: 'Alina' },
        { id: 4, name: 'Denis' },
        { id: 5, name: 'Marina' },
    ] as Array<DialogsType>,
    MessageData: [
        { id:1, message: 'Hi, how are you?)' },
        { id:2, message: 'How much it cost?' },
        { id:3, message: 'Sorry, but i can`t' },
    ] as Array<MessageType>,
};

type InitiateStateType = typeof initialState

const dialogReducer = (state: InitiateStateType = initialState, action: any): InitiateStateType => {
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


type ClickActionCreatorType = {
    type: typeof CLICK,
    data: any
}
export const clickActionCreator = (data: any): ClickActionCreatorType => ({ type: CLICK, data });
export default dialogReducer;
