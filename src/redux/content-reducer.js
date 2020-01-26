import { userAPI } from "../axios/api";

const ADD_POSTS = 'ADD-POSTS';
const UPDATE_TEXT = 'UPDATE-TEXT';
const CURRENT_PROFILE = 'CURRENT_PROFILE';


let initialState = {
    PostsData: [
        { likes: 23, id: 1, message: 'Hi, how you doing?' },
        { likes: 17, id: 2, message: 'I have very bad day...' },
        { likes: 6, id: 3, message: 'Sorry, but i`m late' }
    ],
    textForArea: 'some words',
    currentProfile: null,
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

        case CURRENT_PROFILE:
            return {
                ...state, currentProfile: action.data
            };



        default:
            return state;
    }
}

export default contentReducer;


export const addPostsActionCreator = () => ({ type: ADD_POSTS });
export const updateTextActionCreator = (text) => ({ type: UPDATE_TEXT, newText: text });
export const loadProfileActionCreator = (data) => ({ type: CURRENT_PROFILE, data });


export const getProfileThunkCreator = userId => {
    return dispatch => {
        userAPI.getProfileFromURL(userId)
            .then(response => {
                dispatch(loadProfileActionCreator(response.data));
            });
    }
}

