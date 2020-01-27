import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav-bar/Nav-barContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ContentContainer from './components/Content/ContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import LoginContainer from './components/Login/LoginContainer';


function App() {
  return (
      <div className="App">
        <HeaderContainer />
        <NavContainer />
        <div className='AppContents'>
          <Route path='/profile/:userId?' render={() => <ContentContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer /> }/>
          <Route path='/find-users' render={() => <FindUsersContainer /> } />
          <Route path='/login' render={() => <LoginContainer /> } />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
        // <Example />

  );
}


export default App;
