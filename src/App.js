import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebaseConfig from './Components/Firebase';
import * as firebase from 'firebase/app';
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Switch>
                <Route exact path='/' component ={SignIn}/>
                <Route path='/dashboard' component={Dashboard}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
