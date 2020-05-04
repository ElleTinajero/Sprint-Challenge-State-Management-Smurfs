import React, { Component } from 'react';
import './App.css';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello! These are just a bunch of smurfs and whatnot. Thank you.</h1>
        <SmurfList/>
      </div>
    )
  }
}

export default App;