const ADD_POSTS = 'ADD-POSTS';
const UPDATE_TEXT = 'UPDATE-TEXT';
const CLICK = 'CLICK';
const TEXT_UPDATE = 'TEXT-UPDATE';

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
            newText: 'kamasutra'
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
        switch (action.type) {
            case 'ADD-POSTS':
                let obj = {
                    likes: 0,
                    id: 4,
                    message: this._state.contentPage.textForArea,
                }
                this._state.contentPage.PostsData.push(obj);
                this._state.contentPage.textForArea = '';
                this._callSubscriber(this._state);
                break;

            case 'UPDATE-TEXT':
                this._state.contentPage.textForArea = action.newText;
                this._callSubscriber(this._state);
                break;

            case 'CLICK':
                let obj1 = {
                    message: this._state.dialogsPage.newText
                };

                this._state.dialogsPage.MessageData.push(obj1);
                this._state.dialogsPage.newText = '';
                this._callSubscriber(this._state);
                break;

            case 'TEXT-UPDATE':
                this._state.dialogsPage.newText = action.text;
                this._callSubscriber(this._state);
                break;
        }
    }
}

export const addPostsActionCreator = () => ({ type: ADD_POSTS});
export const updateTextActionCreator = (text) => ({type: UPDATE_TEXT, newText: text});
export const clickActionCreator = () => ({type: CLICK});
export const textUpdateActionCreator = (text) => ({type: TEXT_UPDATE, text: text});

// window.state = state;

export default store;
