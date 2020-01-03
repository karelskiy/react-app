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
    getState(){
        return this._state;
    },
    _callSubscriber(){},

    addPosts() {

        let obj = {
            likes: 0,
            id: 4,
            message: this._state.contentPage.textForArea,
        }
        this._state.contentPage.PostsData.push(obj);
        this._state.contentPage.textForArea = '';
        this._callSubscriber(this._state)
    },

    updateText(newText){
        this._state.contentPage.textForArea = newText;
        this._callSubscriber(this._state)
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    // *************
    textUpdate(text){
        this._state.dialogsPage.newText = text;
        this._callSubscriber(this._state);
    },
    click(){
        let obj = {
            message: this._state.dialogsPage.newText
        };
    
        this._state.dialogsPage.MessageData.push(obj);
        this._state.dialogsPage.newText = '';
        this._callSubscriber(this._state);
    }
}


// window.state = state;

export default store;
