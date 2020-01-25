import Content from './Content'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../redux/content-reducer';
import { withRouter, Redirect } from 'react-router-dom';

class ContentContainer extends Component {

    componentDidMount() {
        this.props.getProfile(!this.props.match.params.userId ? 2 : this.props.match.params.userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login' />
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
        isAuth: state.auth.isAuth
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        getProfile(userId){
            dispatch(getProfileThunkCreator(userId))
        }
    }
}

let withURLRouterContentContainer = withRouter(ContentContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withURLRouterContentContainer)
