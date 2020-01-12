import React from 'react';
import { addPostsActionCreator, updateTextActionCreator } from '../../../redux/content-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


function MyPostsContainer() {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const addToState = () => {
                        store.dispatch(addPostsActionCreator());
                    }
                    const onTextChange = (text) => {
                        store.dispatch(updateTextActionCreator(text));
                    }

                    return (
                        <MyPosts addPost={addToState} updateText={onTextChange} posts={store.getState().contentPage.PostsData} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
