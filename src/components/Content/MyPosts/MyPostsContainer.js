import React from 'react';
import { addPostsActionCreator, updateTextActionCreator } from '../../../redux/content-reducer';
import MyPosts from './MyPosts';


function MyPostsContainer(props) {

    const addToState = () => {
        props.store.dispatch(addPostsActionCreator());
    }
    const onTextChange = (text) => {
        props.store.dispatch(updateTextActionCreator(text));
    }

    return (<MyPosts addPost={addToState} updateText={onTextChange} posts={props.store.getState().contentPage.PostsData} />)
}

export default MyPostsContainer;
