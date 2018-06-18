import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reviewsCopy from '../utils/reviews.json';

function DisplayReview(props) {
  return (
    <div className='reviews'>
      <p className='review-text'>{props.text}</p>
      <p><em>- {props.author}</em></p>
    </div>
  )
}

DisplayReview.PropTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

class Reviews extends Component {
  render(){
    const reviews = reviewsCopy.reviews;

    return (
      <div>
        <h1>Reviews</h1>
        <DisplayReview 
          text={reviews.review01.text}
          author={reviews.review01.author}
        />
        <DisplayReview 
          text={reviews.review02.text}
          author={reviews.review02.author}
        />
        <DisplayReview 
          text={reviews.review03.text}
          author={reviews.review03.author}
        />
        <DisplayReview 
          text={reviews.review04.text}
          author={reviews.review04.author}
        />
      </div>
    );
  }
}

export default Reviews;


