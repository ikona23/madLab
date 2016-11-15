import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import StorePicker from './components/StorePicker'


class App extends Component {
  render() {
    return (
      <div className="burgerOftheDay">
      <div className="menu">
        <Header />
        <StorePicker />
      </div>
        <h1>Inventory</h1>
      </div>
    )
  }
}





export default App;
