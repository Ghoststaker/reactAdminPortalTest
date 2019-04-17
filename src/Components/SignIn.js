import React, { Component } from 'react';
import logo from './../logo.svg';
import * as firebase from 'firebase/app';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    toDashboard: false
  }

  doChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  doSubmit = (e) => {
    e.preventDefault();
        
    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(
      (user) => {
        alert('Logged in. ')
        this.setState({
            toDashboard: true
        });
      },
      (err) => {
        alert('Something went wrong. ' + err.message)
      }
    )
    console.log(this.state);
  }
  render() {
    if (this.state.toDashboard === true){
        console.log(this.state);
        return <Redirect to= '/dashboard'></Redirect>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Login
          </p>

          <form onSubmit={this.doSubmit} className="container">
            <div>
                <input id="username" type="text" placeholder="Username" onChange={this.doChange} required/>
            </div>
            <div id="passwordArea">
                <input id="password" type="password" placeholder="Password" onChange={this.doChange} required/>
            </div>
            <div>
                <button className="login-button" type="submit">Login</button>
            </div>
          </form>
        </header>
      </div>
    );
  }
}

export default SignIn;
