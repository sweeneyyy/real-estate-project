import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Footer from './layout/Footer.js';
import Home from './Home.js';
import Nav from './layout/Nav.js';
import Toolbar from './layout/Toolbar.js';
import Buy from './components/Buy.js';
import Sell from './components/Sell.js';
import Rent from './components/Rent.js';
import Search from './components/Search.js';
import Neighborhoods from './components/Neighborhoods.js';
import About from './components/About.js';

class App extends Component {

  componentDidMount() {
    axios.post('/listings/sparkSession', {})
    .then(({ data }) => console.log(data))
  }
  
  render() {
    return (
      <div>
        <Router>
          <div>
            <Toolbar />
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
