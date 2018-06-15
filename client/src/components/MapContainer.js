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

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = {
        center: {lat: 26.371750, lng: -80.075057}, // sets center to office location
        zoom: 9,
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
    const style = {
      width: '50vw',
      height: '40vh'
    }

    return (
      <div ref='map' style={style}>
        Loading map...
      </div>
    )
  }
}