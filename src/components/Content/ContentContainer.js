import Content from './Content'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProfileThunkCreator, getStatusThunkCreator, setStatusThunkCreator, editProfileThunkCreator, loadPhotoThunkCreator } from '../../redux/content-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ContentContainer extends Component {

    refresh() {
        let userId = this.props.match.params.userId || this.props.myId || (this.props.history.push('/login'))
        this.props.getProfile(userId);
        this.props.getStatus(userId);

    }

    componentDidMount() {
        this.refresh();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refresh();
        }
    }
    

    render() {

        return (
            <div>
                <Content loadPhoto={this.props.loadPhoto} editProfile={this.props.editProfile} {...this.props} id={this.props.match.params.userId} currentProfile={this.props.currentProfile} status={this.props.status} setStatus={this.props.setStatus} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {

    return {

        currentProfile: state.contentPage.currentProfile,
        status: state.contentPage.status,
        isAuth: state.auth.isAuth,
        myId: state.auth.userId

    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        getProfile(userId) {
            dispatch(getProfileThunkCreator(userId))
        },
        getStatus(id) {
            dispatch(getStatusThunkCreator(id))
        },
        setStatus(status) {
            dispatch(setStatusThunkCreator(status))
        },

        editProfile(profile) {
            dispatch(editProfileThunkCreator(profile));
        },

        loadPhoto(photo){
            dispatch(loadPhotoThunkCreator(photo));
        }

    }
}



// let AuthRedirectComponent = withAuthRedirect(ContentContainer);

// let withURLRouterContentContainer = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, mapDispatchToProps)(withURLRouterContentContainer)

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(ContentContainer)