const ADD_POSTS = 'ADD-POSTS';
const UPDATE_TEXT = 'UPDATE-TEXT';


let initialState = {
    PostsData: [
        { likes: 23, id: 1, message: 'Hi, how you doing?' },
        { likes: 17, id: 2, message: 'I have very bad day...' },
        { likes: 6, id: 3, message: 'Sorry, but i`m late' }
    ],
    textForArea: 'some words'
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSTS: {
            let obj = {
                likes: 0,
                id: 4,
                message: state.textForArea,
            };
            return { 
                ...state,
                PostsData: [...state.PostsData, obj],
                textForArea: ''
            };
        }

        case UPDATE_TEXT: {
            return { 
                ...state, 
                textForArea: action.newText
            };
        }

        default:
            return state;
    }
}

export default contentReducer;


export const addPostsActionCreator = () => ({ type: ADD_POSTS });
export const updateTextActionCreator = (text) => ({ type: UPDATE_TEXT, newText: text });
