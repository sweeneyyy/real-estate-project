import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Footer from './layout/Footer.js';
import Home from './Home.js';
import Nav from './layout/Nav.js';
import Buy from './realestate/Buy.js';
import Sell from './realestate/Sell.js';
import Rent from './realestate/Rent.js';
import Search from './realestate/Search.js';
import Neighborhoods from './realestate/Neighborhoods.js';
import About from './realestate/About.js';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <div className='container'>
              <Route exact path='/' component={Home} />
              <Route path='/buy' component={Buy} />
              <Route path='/sell' component={Sell} />
              <Route path='/rent' component={Rent} />
              <Route path='/search' component={Search} />
              <Route path='/neighborhoods' component={Neighborhoods} />
              <Route path='/about' component={About} />
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
