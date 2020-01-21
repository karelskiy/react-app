import Content from './Content'
import React, { Component } from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux';
import { loadProfileActionCreator } from '../../redux/content-reducer';

class ContentContainer extends Component {
    
    componentDidMount() {
        // this.props.loader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            console.log(response.data)
            // this.props.loader(false);
            this.props.loadProfile(response.data);
        });
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
        loadProfile(data){
            dispatch(loadProfileActionCreator(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)
