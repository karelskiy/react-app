import { changeOurTextActionCreator, sayHiActionCreator } from '../../redux/sidebar-reducer';
import Nav from './Nav-bar';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friends: state.sidebarPage.friends,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sayHi(text){
            dispatch(sayHiActionCreator(text))
        },
    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default NavContainer;
