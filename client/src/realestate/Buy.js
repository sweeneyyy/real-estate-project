import React, { Component } from 'react';

function BuyIntroduction(props) {
  return (
    <div>
      <p>We love helping buyers find their dream home. That's why we work with each client individually, taking the time to understand their unique lifestyles, needs and wishes. This is about more than a certain number of bedrooms or a particular ZIP code. It's about your life, and it's important to us.</p>
      <img src="https://picsum.photos/g/1300/300/?random" className="image-buy"/>
    </div>
  )
}

function BuySection(props) {
  return (
    <div className='buy-sections'>
      <h3>
        <i className={props.icon}></i>
        {props.buySectionHeader}
      </h3>
        <p>{props.buySectionText}</p>
    </div>
  )
}

class Buy extends Component {
  render(){
    return (
      <div>
        <h1>Buy with Sharon & Caron</h1>
        <BuyIntroduction />
        <div className='buy-container'>
          <BuySection 
            icon='fas fa-mobile-alt'
            buySectionHeader='We Are Tech Savvy'
            buySectionText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at turpis condimentum, cursus est quis, finibus turpis. Sed ac lacinia elit, eu molestie orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
          />
          <BuySection 
            icon='far fa-comments'
            buySectionHeader='We Communicate Via Your Preferred Method'
            buySectionText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at turpis condimentum, cursus est quis, finibus turpis. Sed ac lacinia elit, eu molestie orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
          />
          <BuySection 
            icon='far fa-thumbs-up'
            buySectionHeader='We Handle Stress For You'
            buySectionText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at turpis condimentum, cursus est quis, finibus turpis. Sed ac lacinia elit, eu molestie orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
          />
          <BuySection 
            icon='far fa-calendar-alt'
            buySectionHeader='We Work With Your Schedule'
            buySectionText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at turpis condimentum, cursus est quis, finibus turpis. Sed ac lacinia elit, eu molestie orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
          />
          <BuySection 
            icon='fas fa-home'
            buySectionHeader='We Have Been There Before'
            buySectionText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at turpis condimentum, cursus est quis, finibus turpis. Sed ac lacinia elit, eu molestie orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
          />
          <BuySection 
            icon='far fa-money-bill-alt'
            buySectionHeader='We Negotiate The Best Deal For You'
            buySectionText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at turpis condimentum, cursus est quis, finibus turpis. Sed ac lacinia elit, eu molestie orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
          />
        </div>
      </div>
      );
  }
}

export default Buy;
