import { addPostsActionCreator, updateTextActionCreator } from '../../../redux/content-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {

    return {
        posts: state.contentPage.PostsData,
        text: state.contentPage.textForArea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost(text){
            dispatch(addPostsActionCreator(text));
        },

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
