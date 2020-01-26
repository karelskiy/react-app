import { textUpdateActionCreator, clickActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.DialogsData,
        messages: state.dialogPage.MessageData,
        newText: state.dialogPage.newText,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;

