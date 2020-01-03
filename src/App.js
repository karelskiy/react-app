import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav-bar/Nav-bar.js';
import Content from './components/Content/Content.js';
import Example from './components/example';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


function App(props) {
  // console.log(props)
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <div className='AppContents'>
          <Route path='/profile' render={() => <Content dispatch={props.dispatch} postsData={props.state.contentPage.PostsData} text={props.state.contentPage.textForArea}/>} />
          <Route path='/dialogs' render={() => <Dialogs dispatch={props.dispatch} textForDialogs={props.state.dialogsPage.newText} dialogs={props.state.dialogsPage.DialogsData} messages={props.state.dialogsPage.MessageData} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        {/* <Example /> */}
      </div>
    </BrowserRouter>
  );
}


export default App;
