import React, { Component } from 'react';

function NeighborhoodSection(props) {
  return (
    <div>
      <h1>{props.areaName}</h1>
      <ul>
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
      <div className="page-container">
        <NeighborhoodSection
          areaName="Downtown and East Boca Raton"
          subAreaOne="Urban/ City"
          subAreaTwo="Intracoastal"
          subAreaThree="Beachfront"
        />
        <NeighborhoodSection
          areaName="Downtown and East Delray Beach"
          subAreaOne="Urban/ City"
          subAreaTwo="Intracoastal"
          subAreaThree="Beachfront"
        />
        <NeighborhoodSection
          areaName="Highland Beach"
          subAreaOne="Intracoastal"
          subAreaTwo="Beachfront"
        />
        <NeighborhoodSection
          areaName="New Construction"
          subAreaOne="Boca Raton"
          subAreaTwo="Delray Beach"
          subAreaThree="Highland Beach"
        />
      </div>
    );
  }
}

export default Neighborhoods;
