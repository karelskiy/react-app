import React from 'react';
import { addPostsActionCreator, updateTextActionCreator } from '../../../redux/content-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'


// function MyPostsContainer() {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {

//                     const addToState = () => {
//                         store.dispatch(addPostsActionCreator());
//                     }
//                     const onTextChange = (text) => {
//                         store.dispatch(updateTextActionCreator(text));
//                     }

//                     return (
//                         <MyPosts addPost={addToState} updateText={onTextChange} posts={store.getState().contentPage.PostsData} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.contentPage.PostsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost(){
            dispatch(addPostsActionCreator());
        },
        updateText(text){
            dispatch(updateTextActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
