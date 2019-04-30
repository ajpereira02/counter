import React, { Component } from 'react';
import Counter from './Counter';
import Profile from './Profile';
import './App.css';

class App extends Component  {
  render() {
  return (
    <div className="App">
    <h1>Work Space</h1>
    <Counter/>
    <Profile/>
    </div>
  );
  }
}

export default App;
