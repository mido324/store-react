import React, { Component } from 'react';
import List from './List';
import Cart from './Cart';
import './App.css';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import Details from './Details';
import axios from 'axios';
// import express from 'express';

class App extends Component {
  
  constructor() {
    super()
  
  this.state = {
    products: [{id:1, color: 'blue', size: 12},
    {id:2, color: 'red', size: 10},
    {id:3, color: 'white', size: 11}
  ],
    cart: []
  }
  this.updateCart = this.updateCart.bind(this);
  }
  updateCart(product) {
    const newCart = this.state.cart.slice();//
    newCart.push(product);
    this.setState({
      //cart:[...this.state.cart, product]    
      cart: newCart
    })
  }
  componentWillMount() {
    axios.get('api/products').then((response)=>{
      response.data 
      this.setState({
        products:response.data
      })
    })
  }
  render() {

    
    return (
      <div className="App">  
      <Link to='/'>
      <h1>products</h1>
      </Link>
      <Link to='/cart'>
      <h1>cart({this.state.cart.length})</h1>
      </Link>
      <Route exact path='/' render={() => {
        return <List productPassing={this.state.products} movingToCart={this.updateCart}/>
      }}  />
      <Route path='/cart' render={ () => {

       return <Cart itemsToCart={this.state.cart}/>
      }}/>
      <Route path='/productdetails/:id' component={Details}/>
      </div>

    );
  }
}

export default App;
