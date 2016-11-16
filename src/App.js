import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import StorePicker from './components/StorePicker'
import Order from './components/Order'
import Inventory from './components/Inventory'
import { getNow } from './helpers'


class App extends Component {
  render() {
    return (
      <div className="burgerOftheDay">
      <div className="menu">
        <Header tagline='Today is:'/>
        <p> {getNow()} </p>
      </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;
