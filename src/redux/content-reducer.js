import { userAPI } from "../axios/api";
import { stopSubmit } from "redux-form";

const ADD_POSTS = 'ADD-POSTS';
const CURRENT_PROFILE = 'CURRENT_PROFILE';
const GET_STATUS = 'GET_STATUS';
const DELETE_POST = 'DELETE_POST';
const LOAD_PHOTO = 'LOAD_PHOTO';

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

        case DELETE_POST:
            return {
                ...state, PostsData: [...state.PostsData.filter(i => i.id !== action.postId)] 
            }
        
        case LOAD_PHOTO: 
            return {
                ...state, currentProfile: {...state.currentProfile, photos: action.photos}
            }


        default:
            return state;
    }
}

export default contentReducer;


export const addPostsActionCreator = (text) => ({ type: ADD_POSTS, text });
export const loadProfileActionCreator = (data) => ({ type: CURRENT_PROFILE, data });
export const getStatusActionCreator = status => ({ type: GET_STATUS, status });
export const deletePostActionCreator = (postId) => ({ type: DELETE_POST, postId })
export const loadPhotoActionCreator = photos => ({type: LOAD_PHOTO, photos})


export const getProfileThunkCreator = userId => {
    return async dispatch => {
        let response = await userAPI.getProfileFromURL(userId);
        dispatch(loadProfileActionCreator(response.data));
    }
}

export const getStatusThunkCreator = id => {
    return async dispatch => {
        let response = await userAPI.getStatusFromURL(id);

        dispatch(getStatusActionCreator(response.data))
    }
}

export const setStatusThunkCreator = status => {
    return async dispatch => {
        let response = await userAPI.setStatus(status);
        
        if (response.data.resultCode === 0) {
            dispatch(getStatusActionCreator(status))
        }
    }
}

export const editProfileThunkCreator = profile => {
    return async (dispatch, getState) => {
        let userId = getState().auth.userId;
        let response = await userAPI.editProfile(profile);

        if(response.data.resultCode === 0){
            dispatch(getProfileThunkCreator(userId))
        } else {
            dispatch(stopSubmit('editMode', { _error: response.data.messages[0] }))
            return Promise.reject(response.data.messages[0])
        }
    }
}

export const loadPhotoThunkCreator = photoFile => {
    return async dispatch => {
        let response = await userAPI.loadPhoto(photoFile);

        if(response.data.resultCode === 0) {
            dispatch(loadPhotoActionCreator(response.data.data.photos))
        }
    }
}