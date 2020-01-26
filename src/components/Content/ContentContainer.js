import Content from './Content'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../redux/content-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ContentContainer extends Component {

    componentDidMount() {
        this.props.getProfile(!this.props.match.params.userId ? 2 : this.props.match.params.userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />
        return (
            <div>
                <Content {...this.props} currentProfile={this.props.currentProfile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentProfile: state.contentPage.currentProfile,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        getProfile(userId) {
            dispatch(getProfileThunkCreator(userId))
        }
    }
}



// let AuthRedirectComponent = withAuthRedirect(ContentContainer);

// let withURLRouterContentContainer = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, mapDispatchToProps)(withURLRouterContentContainer)

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ContentContainer)