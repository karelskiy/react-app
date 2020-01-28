import Content from './Content'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProfileThunkCreator, getStatusThunkCreator, setStatusThunkCreator } from '../../redux/content-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ContentContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.myId || (this.props.history.push('/login'))
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidUpdate() {
        let userId = this.props.match.params.userId || this.props.myId || (this.props.history.push('/login'))
        this.props.getProfile(userId);
        this.props.getStatus(userId);

    }


    render() {
        return (
            <div>
                <Content {...this.props} id={this.props.match.params.userId} currentProfile={this.props.currentProfile} status={this.props.status} setStatus={this.props.setStatus} />
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

    }
}



// let AuthRedirectComponent = withAuthRedirect(ContentContainer);

// let withURLRouterContentContainer = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, mapDispatchToProps)(withURLRouterContentContainer)

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(ContentContainer)