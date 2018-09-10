import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MapContainer extends Component {
  // Load map on Contact page load
  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if(this.props && this.props.google) { 
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map; // looks for HTML div ref 'map'
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = {
        center: {lat: 26.371750, lng: -80.075057}, // sets center to office location
        zoom: 9, // higher number is closer in
        mapTypeId: 'roadmap'
      }

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on specified node

      // Add marker
      const marker = new google.maps.Marker({
        position: {lat: 26.371750, lng: -80.075057},
        map: this.map,
        title: 'The Sharon & Caron Group'
      });
    }
  }

  render() {
    // Map works best when style is specified inside the render function
    // Dimensions must be set in order for it render
    const style = {
      width: '50%',
      height: '40vh',
      display: 'inline-block',
      top: '70px'
    }

    return (
      <div ref='map' style={style}>
        Loading map...
      </div>
    );
  }
}