import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      listings: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (event) => {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('data', data);
    // this.props.onSubmit(
    //   this.props.id,
    //   this.state.query
    // )
    axios.post('/listings/search', {
      query: this.state.query,
    }).then((res) => {
      console.log('promise reached');
      // this.setState({listings: res.data.results});
    }).catch((err) => {
      console.log("error:", err);
    });
  }

  render(){
    const { query } = this.state
    const { label } = this.props

    return (
      <div>
        <h1>SEARCH</h1>
          <form className='column' onSubmit={this.handleSubmit}>
            <label htmlFor='query'>
              {label}
            </label>
            <input 
              id='query'
              placeholder='City...'
              type='text'
              autoComplete='off'
              value={query}
              onChange={this.handleChange}
            />
            <button 
              className='button'
              type='submit'
              disabled={!query}>
              Submit
            </button>
          </form>
      </div>
    );
  }
}

export default Search;
