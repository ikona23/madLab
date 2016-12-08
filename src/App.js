import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import StorePicker from './components/StorePicker'
import Order from './components/Order'
import Burger from './components/Burger'
import Drink from './components/Drink'
import Addon from './components/Addon'
import Inventory from './components/Inventory'
import { getNow } from './helpers'
import sampleData from './sampleData'
import sampleData2 from './sampleData2'
import sampleData3 from './sampleData3'


class App extends Component {
  constructor() {
    super()
    this.addBurger = this.addBurger.bind(this)
    this.addDrink = this.addDrink.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    //get initial state
    this.state = {
      burgers:{},
      drinks:{},
      order:{},
      addons:{}
    }
  }

  addBurger(burger){
    //update state
    const burgers = {...this.state.burgers}
    const timestamp = Date.now
    burgers[`burger-${timestamp}`] = burger
    this.setState({burgers})
}

  addDrink(drink){
    //update state
    const drinks = {...this.state.drinks}
    const timestamp = Date.now
    drinks[`drink-${timestamp}`] = drink
    this.setState({drinks})
}

  addAddon(addon){
    //update state
    const addons = {...this.state.addons}
    const timestamp = Date.now
    addons[`drink-${timestamp}`] = addon
    this.setState({addons})
}



  loadSamples(){
    this.setState({
      burgers:sampleData,
      drinks:sampleData2,
      addons:sampleData3

    })
      //set state
    }

    render() {
      return (
        <div className="burgerOftheDay">
        <div className="menu">
          <Header tagline='Today is:'/>

          <ul className="listOfBurgers">
          <hr/>
            {
              Object.keys(this.state.burgers)
              .map(key => <Burger key={key} details={this.state.burgers[key]}/>)
            }
          </ul>

          <ul className="listOfBurgers">
          <hr/>
            {
              Object.keys(this.state.drinks)
              .map(key => <Drink key={key} details={this.state.drinks[key]}/>)
            }
          </ul>
          <ul className="listOfAddons">
          <hr/>
            {
              Object.keys(this.state.addons)
              .map(key => <Addon key={key} details={this.state.addons[key]}/>)
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
