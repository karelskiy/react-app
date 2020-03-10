import { userAPI } from "../axios/api";
import { stopSubmit } from "redux-form";
import { InitialStatePostsDataType, CurrentProfileType } from "../types/types";

const ADD_POSTS: string = 'ADD-POSTS';
const CURRENT_PROFILE: string = 'CURRENT_PROFILE';
const GET_STATUS: string = 'GET_STATUS';
const DELETE_POST: string = 'DELETE_POST';
const LOAD_PHOTO: string = 'LOAD_PHOTO';


let initialState = {
    PostsData: [
        { likes: 23, id: 1, message: 'Hi, how you doing?' },
        { likes: 17, id: 2, message: 'I have very bad day...' },
        { likes: 6, id: 3, message: 'Sorry, but i`m late' }
    ] as Array<InitialStatePostsDataType>,
    currentProfile: null as CurrentProfileType | any,
    status: '',
};

type InitialStateType = typeof initialState

const contentReducer = (state = initialState, action: any): InitialStateType => {
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
                ...state, currentProfile: { ...state.currentProfile, photos: action.photos }
            }


        default:
            return state;
    }
}

export default contentReducer;

type AddPostsActionCreatorType = {
    type: typeof ADD_POSTS,
    text: string
}
export const addPostsActionCreator = (text: string): AddPostsActionCreatorType=> ({ type: ADD_POSTS, text });

type LoadProfileActionCreatorType = {
    type: typeof CURRENT_PROFILE,
    data: Object
}
export const loadProfileActionCreator = (data: any): LoadProfileActionCreatorType => ({ type: CURRENT_PROFILE, data });

type GetStatusActionCreatorType = {
    type: typeof GET_STATUS,
    status: string
}
export const getStatusActionCreator = (status: string): GetStatusActionCreatorType => ({ type: GET_STATUS, status });

type DeletePostActionCreatorType = {
    type: typeof DELETE_POST,
    postId: number
}
export const deletePostActionCreator = (postId: number): DeletePostActionCreatorType => ({ type: DELETE_POST, postId });

type LoadPhotoActionCreatorType = {
    type: typeof LOAD_PHOTO, 
    photos: Array<string>
}
export const loadPhotoActionCreator = (photos: Array<string>): LoadPhotoActionCreatorType => ({ type: LOAD_PHOTO, photos })


export const getProfileThunkCreator = (userId: number) => {
    return async (dispatch: any) => {
        let response = await userAPI.getProfileFromURL(userId);
        dispatch(loadProfileActionCreator(response.data));
    }
}

export const getStatusThunkCreator = (id: number) => {
    return async (dispatch: any) => {
        let response = await userAPI.getStatusFromURL(id);

        dispatch(getStatusActionCreator(response.data))
    }
}

export const setStatusThunkCreator = (status: string) => {
    return async (dispatch: any) => {
        let response = await userAPI.setStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(getStatusActionCreator(status))
        }
    }
}

export const editProfileThunkCreator = (profile: any) => async (dispatch: any, getState: Function) => {
    let userId = getState().auth.userId;
    let response = await userAPI.editProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getProfileThunkCreator(userId))
    } else {
        dispatch(stopSubmit('editMode', { _error: response.data.messages[0] }));
    }

}

export const loadPhotoThunkCreator = (photoFile: string) => {
    return async (dispatch: any) => {
        let response = await userAPI.loadPhoto(photoFile);

        if (response.data.resultCode === 0) {
            dispatch(loadPhotoActionCreator(response.data.data.photos))
        }
    }
}