import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

function NeighborhoodSection(props) {
  return (
    <div className='column'>
      <h2>{props.areaName}</h2>
      <ul className='neighborhood-sections'>
        <li>{props.subAreaOne}</li>
        <li>{props.subAreaTwo}</li>
        <li>{props.subAreaThree}</li>
      </ul>
    </div>
  );
}

NeighborhoodSection.propTypes = {
  subAreaOne: PropTypes.string.isRequired,
  subAreaTwo: PropTypes.string.isRequired,
  subAreaThree: PropTypes.string.isRequired
}

class Neighborhoods extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedNeighborhood: '',
      listings: []
    }
  }
  componentDidMount() {
    axios.get('/listings/neighborhoods')
    .then((res) => {
      this.setState({neighborhoodListings: res.data.D.Results});
      console.log('listings', res.data.D.Results);
    }).catch((err) => {
      console.log('error:', err);
    });
  }

  render() {
    return (
      <div className='neighborhoods'>
        <p className='coming-soon'>[ Listings Coming Soon! ]</p>
        <h1>Neighborhoods</h1>
        <div className='row'>
          <NeighborhoodSection
            areaName='Downtown + East Boca Raton'
            subAreaOne='Urban/ City'
            subAreaTwo='Intracoastal'
            subAreaThree='Beachfront'
          />
          <NeighborhoodSection
            areaName='Downtown + East Delray Beach'
            subAreaOne='Urban/ City'
            subAreaTwo='Intracoastal'
            subAreaThree='Beachfront'
          />
        </div>
        <div className='row'>
          <NeighborhoodSection
            areaName='Highland Beach'
            subAreaOne='Intracoastal Condos'
            subAreaTwo='Beachfront Condos'
            subAreaThree='Single Family Homes'
          />
          <NeighborhoodSection
            areaName='New Construction'
            subAreaOne='Boca Raton'
            subAreaTwo='Delray Beach'
            subAreaThree='Highland Beach'
          />
        </div>
      </div>
    );
  }
}

export default Neighborhoods;
