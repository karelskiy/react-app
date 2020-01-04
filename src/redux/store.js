import contentReducer from "./content-reducer";
import dialogReducer from "./dialogs-reducer";


export const store = {

    _state: {
        contentPage: {
            PostsData: [
                { likes: 23, id: 1, message: 'Hi, how you doing?' },
                { likes: 17, id: 2, message: 'I have very bad day...' },
                { likes: 6, id: 3, message: 'Sorry, but i`m late' }
            ],
            textForArea: 'some words'
        },
        dialogsPage: {
            DialogsData: [
                { id: 1, name: 'Andrew' },
                { id: 2, name: 'Nikolzy' },
                { id: 3, name: 'Alina' },
                { id: 4, name: 'Denis' },
                { id: 5, name: 'Marina' },
            ],
            MessageData: [
                { message: 'Hi, how are you?)' },
                { message: 'How much it cost?' },
                { message: 'Sorry, but i can`t' },
            ],
            newText: ''
        }
    },
    _callSubscriber() { },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.contentPage = contentReducer(this._state.contentPage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

// window.state = state;

export default store;
