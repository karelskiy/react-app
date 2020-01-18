import React from 'react'
import { connect } from 'react-redux'
import Content from './Content'
import { clickOnProfilePageActionCreator } from '../../redux/findUsers-reducer'


let mapStateToProps = (state) => {
    return {
        currentPerson: state.findUsersPage.currentPerson
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        clickOnPage(){
            dispatch(clickOnProfilePageActionCreator())
        }
    }
}


let ContentContainer = connect(mapStateToProps,mapDispatchToProps)(Content);
export default ContentContainer;