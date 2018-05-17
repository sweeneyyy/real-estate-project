import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BuyerForm from './BuyerForm.js';
import copyData from '../buyOrSell.json';

function BuySectionDivider(props) {
  return (
    <div className='divider'>
      <h2>{props.message}</h2>
    </div>
  );
}

BuySectionDivider.PropTypes = {
  message: PropTypes.string.isRequired
}

function BuySection(props) {
  return (
    <div className='buy-sections'>
      <h3>
        <i className={props.icon}></i>
        {props.heading}
      </h3>
        <p>{props.text}</p>
    </div>
  );
}

BuySection.PropTypes = {
  icon: PropTypes.string.isRequired,
  buySectionHeader: PropTypes.string.isRequired,
  buySectionText: PropTypes.string.isRequired
}

function BuyIntroduction(props) {
  return (
    <div>
      <p className='buy-intro'>We love helping buyers <strong>find their dream home</strong>. That's why we work with each client individually, taking the time to understand their unique lifestyles, needs and wishes. This is about more than a certain number of bedrooms or a particular ZIP code. It's about your life, and it's important to us.</p>
      <img src="https://picsum.photos/g/1300/300/?random" className="image-buy"/>
    </div>
  );
}

class Buy extends Component {
  render(){
    const buyCopy = copyData.buy.sections;

    return (
      <div>
        <h1>Buy with Sharon & Caron</h1>
        <BuyIntroduction />
        <div className='buy-container'>
          <BuySection 
            icon='fas fa-mobile-alt'
            heading={buyCopy.sectionOneHeading}
            text={buyCopy.sectionOneText}
          />
          <BuySection 
            icon='far fa-comments'
            heading={buyCopy.sectionTwoHeading}
            text={buyCopy.sectionTwoText}
          />
          <BuySection 
            icon='far fa-thumbs-up'
            heading={buyCopy.sectionThreeHeading}
            text={buyCopy.sectionThreeText}
          />
          <BuySection 
            icon='far fa-calendar-alt'
            heading={buyCopy.sectionFourHeading}
            text={buyCopy.sectionFourText}
          />
          <BuySection 
            icon='fas fa-home'
            heading={buyCopy.sectionFiveHeading}
            text={buyCopy.sectionFiveText}
          />
          <BuySection 
            icon='far fa-money-bill-alt'
            heading={buyCopy.sectionSixHeading}
            text={buyCopy.sectionSixText}
          />
        </div>
        <BuySectionDivider 
            message={'It\'s Free to Have Us As Your Buyer\'s Agent!'} 
        />
        <div className='buy-container'>
          <BuyerForm />
        </div>
      </div>
    );
  }
}

export default Buy;
