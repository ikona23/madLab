import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import StorePicker from './components/StorePicker'
import Order from './components/Order'
import Inventory from './components/Inventory'
import NotFound from './components/NotFound'


class App extends Component {
  render() {
    return (
      <div className="burgerOftheDay">
      <div className="menu">
        <Header tagline="Today is: "/>
      </div>
        <StorePicker />
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;
