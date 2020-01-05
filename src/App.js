import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav-bar/Nav-bar.js';
import Content from './components/Content/Content.js';
import Example from './components/example';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


function App(props) {
  console.log(props)
  return (
      <div className="App">
        <Header />
        <Nav text={props.state.sidebarPage.text} dispatch={props.dispatch} friends={props.state.sidebarPage.friends}/>
        <div className='AppContents'>
          <Route path='/profile' render={() => <Content dispatch={props.dispatch} postsData={props.state.contentPage.PostsData} text={props.state.contentPage.textForArea} />} />
          <Route path='/dialogs' render={() => <Dialogs 
                                                dispatch={props.dispatch} 
                                                newText={props.state.dialogPage.newText} 
                                                dialogs={props.state.dialogPage.DialogsData} 
                                                messages={props.state.dialogPage.MessageData} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        {/* <Example /> */}
      </div>
  );
}


export default App;
