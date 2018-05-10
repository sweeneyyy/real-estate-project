import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  render() {
    return (
      <div>
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
