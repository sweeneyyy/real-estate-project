import React, { Component } from 'react';
import BuyOrSellSections from './BuyOrSellSections';
import copyData from '../buyOrSell.json';

function SellIntroduction(props) {
  return (
    <div>
      <p className='buyOrSell-intro'>With over 50 years of combined experience we have the know-how to <strong>put a sold sign</strong> on your property. We commit to working with you individually and take the time to understand the unique selling points of your home and neighborhood.  Most agents simply list homes.  We market them - actively targeting the types of buyers most likely to want your home.</p>
      <img src="https://picsum.photos/g/1300/300/?random" className="image-buy"/>
    </div>
  );
}

class Sell extends Component {
  render(){
    const sellCopy = copyData.sell.sections;

    return (
      <div>
        <h1>Sell With Sharon & Caron</h1>
        <SellIntroduction />
        <div className='buyOrSell-container'>
          <BuyOrSellSections 
            icon='fas fa-clipboard-check'
            heading={sellCopy.sectionOneHeading}
            text={sellCopy.sectionOneText}
          />
          <BuyOrSellSections
            icon='fas fa-camera-retro'
            heading={sellCopy.sectionTwoHeading}
            text={sellCopy.sectionTwoText}
          />
          <BuyOrSellSections 
            icon='far fa-money-bill-alt'
            heading={sellCopy.sectionThreeHeading}
            text={sellCopy.sectionThreeText}
          />
          <BuyOrSellSections 
            icon='far fa-calendar-alt'
            heading={sellCopy.sectionFourHeading}
            text={sellCopy.sectionFourText}
          />
          <BuyOrSellSections 
            icon='fas fa-dollar-sign'
            heading={sellCopy.sectionFiveHeading}
            text={sellCopy.sectionFiveText}
          />
          <BuyOrSellSections 
            icon='fas fa-globe'
            heading={sellCopy.sectionSixHeading}
            text={sellCopy.sectionSixText}
          />
        </div>
      </div>
    );
  }
}

export default Sell;
