import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js';
import Example from './components/example';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav-bar/Nav-barContainer';


function App(props) {
  // console.log(props)
  return (
      <div className="App">
        <Header />
        <NavContainer store={props.store}/>
        <div className='AppContents'>
          <Route path='/profile' render={() => <Content store={props.store} />} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} /> }/>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        {/* <Example /> */}
      </div>
  );
}


export default App;
