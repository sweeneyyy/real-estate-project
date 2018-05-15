import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BuyerInput extends Component {
  render() {
    return (
      <form action="https://formspree.io/sweeneyarnett@gmail.com"
      method="POST">
        <input type='text' name='name' placeholder='Name'/>
        <input type='email' name='_replyto' placeholder='email'/>
        <input type='submit' value='send' />
      </form>
    )
  }
}

function BuySectionCTA(props) {
  return (
    <div className='buy-CTA'>
      <h1>Ready to Start Your Home Search?</h1>
      <p>Our experienced and knowledgeable team is ready to help. The first step is to complete your buyer profile!</p>
    </div>
  )
}

function BuySectionDivider(props) {
  return (
    <div className='divider'>
      <h2>{props.message}</h2>
    </div>
  )
}

BuySectionDivider.PropTypes = {
  message: PropTypes.string.isRequired
}

function BuySection(props) {
  return (
    <div className='buy-sections'>
      <h3><i className={props.icon}></i>
        {props.buySectionHeader}
      </h3>
        <p>{props.buySectionText}</p>
    </div>
  )
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
        <BuySectionDivider 
            message={'It\'s Free to Have Us As Your Buyer\'s Agent!'} 
          />
          <div className='buy-container'>
            <BuySectionCTA />
            <BuyerInput />
          </div>
      </div>
      );
  }
}

export default Buy;
