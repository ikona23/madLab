import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import StorePicker from './components/StorePicker'
import Order from './components/Order'
import Burger from './components/Burger'
import Inventory from './components/Inventory'
import { getNow } from './helpers'
import sampleData from './sampleData'


class App extends Component {
  constructor() {
    super()
    this.addBurger = this.addBurger.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
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
}

  loadSamples(){
    this.setState({
      burgers:sampleData
    })
      //set state
    }
    render() {
      return (
        <div className="burgerOftheDay">
        <div className="menu">
          <Header tagline='Today is:'/>
          <ul className="listOfBurgers">
            {
              Object.keys(this.state.burgers)
              .map(key => <Burger />)
            }
          </ul>
          <p> {getNow()} </p>
        </div>
          <Order />
          <Inventory addBurger={this.addBurger} loadSamples={this.loadSamples} />
        </div>
      )
    }
}

export default App;
