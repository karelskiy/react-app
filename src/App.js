import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav-bar/Nav-barContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ContentContainer from './components/Content/ContentContainer';


function App() {
  return (
      <div className="App">
        <Header />
        <NavContainer />
        <div className='AppContents'>
          <Route path='/profile' render={() => <ContentContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer /> }/>
          <Route path='/find-users' render={() => <FindUsersContainer /> } />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
        // <Example />

  );
}


export default App;
