import { changeOurTextActionCreator, sayHiActionCreator } from '../../redux/sidebar-reducer';
import { clickOnProfilePageActionCreator } from '../../redux/findUsers-reducer'
import Nav from './Nav-bar';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friends: state.sidebarPage.friends,
        text: state.sidebarPage.text
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sayHi(text){
            dispatch(sayHiActionCreator(text))
        },
        changeOurText(text){
            dispatch(changeOurTextActionCreator(text))
        },
        clickOnPage(){
            dispatch(clickOnProfilePageActionCreator())
        }
    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default NavContainer;
