import React, { Component } from 'react';
import logo from './../logo.svg';
import * as firebase from 'firebase/app';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component {
    state = {
        toSignIn: false,
        authUser: null
    }
    doSubmit = (e) => {
        e.preventDefault();
        firebase.auth().signOut();
        this.setState({
            toSignIn: true
        })
    }
    
    render() {
        if (this.state.toSignIn === true){
            return <Redirect to= '/'></Redirect>
        }

        return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome {firebase.auth().currentUser.email}.
            </p>

            <form onSubmit={this.doSubmit} className="container">
                <div>
                    <button className="login-button" type="submit">Sign Out</button>
                </div>
            </form>
            </header>
        </div>
        );
    }
}

export default Dashboard;
