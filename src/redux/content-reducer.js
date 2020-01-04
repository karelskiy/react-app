const ADD_POSTS = 'ADD-POSTS';
const UPDATE_TEXT = 'UPDATE-TEXT';

const contentReducer = (state, action) => {
    switch (action.type) {
        case ADD_POSTS:
            let obj = {
                likes: 0,
                id: 4,
                message: state.textForArea,
            }
            state.PostsData.push(obj);
            state.textForArea = '';
            break;

        case UPDATE_TEXT:
            state.textForArea = action.newText;
            break;
    }
    return state;
}

export default contentReducer;
 

export const addPostsActionCreator = () => ({ type: ADD_POSTS });
export const updateTextActionCreator = (text) => ({ type: UPDATE_TEXT, newText: text });
