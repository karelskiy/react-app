import Content from './Content'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../redux/content-reducer';
import { withRouter } from 'react-router-dom';

class ContentContainer extends Component {

    componentDidMount() {
        this.props.getProfile(!this.props.match.params.userId ? 2 : this.props.match.params.userId)
    }

    render() {
        return (
            <div>
                <Content {...this.props} currentProfile={this.props.currentProfile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentProfile: state.contentPage.currentProfile
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
