import React, { Component } from 'react';

function NeighborhoodSection(props) {
  return (
    <div className='column'>
      <p className='sub-header'>{props.areaName}</p>
      <ul className='neighborhood-sections'>
        <li>{props.subAreaOne}</li>
        <li>{props.subAreaTwo}</li>
        <li>{props.subAreaThree}</li>
      </ul>
    </div>
  );
}

class Neighborhoods extends Component {
  render() {
    return (
      <div className='page-container'>
        <p className='header'>Neighborhoods</p>
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
            subAreaOne='Intracoastal'
            subAreaTwo='Beachfront'
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
