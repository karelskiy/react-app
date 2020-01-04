const TEXT_UPDATE = 'TEXT-UPDATE';
const CLICK = 'CLICK';

const dialogReducer = (state, action) => {
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



export const textUpdateActionCreator = (text) => ({type: TEXT_UPDATE, newText: text});
export const clickActionCreator = () => ({type: CLICK});
export default dialogReducer;
