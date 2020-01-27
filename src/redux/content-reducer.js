import { userAPI } from "../axios/api";

const ADD_POSTS = 'ADD-POSTS';
const UPDATE_TEXT = 'UPDATE-TEXT';
const CURRENT_PROFILE = 'CURRENT_PROFILE';
const GET_STATUS = 'GET_STATUS';

let initialState = {
    PostsData: [
        { likes: 23, id: 1, message: 'Hi, how you doing?' },
        { likes: 17, id: 2, message: 'I have very bad day...' },
        { likes: 6, id: 3, message: 'Sorry, but i`m late' }
    ],
    currentProfile: null,
    status: '',
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSTS: {
            let obj = {
                likes: 0,
                id: 4,
                message: action.text,
            };
            return {
                ...state,
                PostsData: [...state.PostsData, obj],
            };
        }

        case CURRENT_PROFILE:
            return {
                ...state, currentProfile: action.data
            };

        case GET_STATUS:
            return {
                ...state, status: action.status
            }


        default:
            return state;
    }
}

export default contentReducer;


export const addPostsActionCreator = (text) => ({ type: ADD_POSTS, text });
export const loadProfileActionCreator = (data) => ({ type: CURRENT_PROFILE, data });
export const getStatusActionCreator = status => ({ type: GET_STATUS, status })


export const getProfileThunkCreator = userId => {
    return dispatch => {
        userAPI.getProfileFromURL(userId)
            .then(response => {
                dispatch(loadProfileActionCreator(response.data));
            });
    }
}

export const getStatusThunkCreator = id => {
    return dispatch => {
        userAPI.getStatusFromURL(id)
            .then(response => {
                dispatch(getStatusActionCreator(response.data))
            })
    }
}

export const setStatusThunkCreator = status => {
    return dispatch => {
        userAPI.setStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getStatusActionCreator(status))
                }
            })
    }
}

