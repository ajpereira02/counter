import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';

class App extends Component  {
  render() {
  return (
    <div className="App">
    <h1>Work Space</h1>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    </div>
  );
  }
}

export default App;
