import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import StorePicker from './components/StorePicker'
import Order from './components/Order'
import Inventory from './components/Inventory'
import { getNow } from './helpers'


class App extends Component {
  constructor() {
    super()
    this.addBurger = this.addBurger.bind(this)
    //get initial state
    this.state = {
      burgers:{},
      order:{}
    }
  }
  addBurger(burger){
    //update state
    const burgers = {...this.state.burgers}
    const timestamp = Date.now
    burgers[`burger-${timestamp}`] = burger
    this.setState({burgers})

    //set state
  }
  render() {
    return (
      <div className="burgerOftheDay">
      <div className="menu">
        <Header tagline='Today is:'/>
        <p> {getNow()} </p>
      </div>
        <Order />
        <Inventory addBurger={this.addBurger} />
      </div>
    )
  }
}

export default App;
