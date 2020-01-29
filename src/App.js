import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav-bar/Nav-barContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ContentContainer from './components/Content/ContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isAuthorizedThunkCreator } from './redux/app-reducer';
import Preloader from './components/Preloader/Preloader';


class App extends Component {

  componentDidMount(){
    this.props.isAuthorizedThunkCreator()
    
  }


  render() {
    if(!this.props.isAuthorized) return <Preloader />
    return (
      <div className="App">
        <HeaderContainer />
        <NavContainer />
        <div className='AppContents'>
          <Route path='/profile/:userId?' render={() => <ContentContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/users/' render={() => <FindUsersContainer />} />
          <Route path='/login' render={() => <LoginContainer />} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
      // <Example />

    );
  }

}
let mapStateToProps=(state)=>{
  return {
    isAuthorized: state.app.isAuthorized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps,{isAuthorizedThunkCreator}))(App)
