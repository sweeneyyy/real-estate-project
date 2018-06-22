import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Layout elements
import Nav from './layout/Nav.js';
import Toolbar from './layout/Toolbar.js';
import Footer from './layout/Footer.js';

// Page routes
import Home from './components/Home.js';
import Buy from './components/Buy.js';
import Sell from './components/Sell.js';
import Rent from './components/Rent.js';
import Search from './components/Search.js';
import Neighborhoods from './components/Neighborhoods.js';
import Results from './components/Results.js';
import ListingDetail from './components/ListingDetail.js';
import Reviews from './components/Reviews.js';
import Contact from './components/Contact.js';

class App extends Component {
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
              <Route path='/results' component={Results} />
              <Route path='/listing-detail' component={ListingDetail} />
              <Route path='/reviews' component={Reviews} />
              <Route path='/contact' component={Contact} />
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
