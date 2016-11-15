import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import StorePicker from './components/StorePicker'
import Order from './components/Order'
import Inventory from './components/Inventory'


class App extends Component {
  render() {
    return (
      <div className="burgerOftheDay">
      <div className="menu">
        <Header />
        <StorePicker />
        <Order />
        <Inventory />
      </div>
      </div>
    )
  }
}





export default App;
