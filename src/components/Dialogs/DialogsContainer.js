import { textUpdateActionCreator, clickActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.DialogsData,
        messages: state.dialogPage.MessageData,
        newText: state.dialogPage.newText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        click(){
            dispatch(clickActionCreator())
        },
        textUpdate(text){
            dispatch(textUpdateActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

