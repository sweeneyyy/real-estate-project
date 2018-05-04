import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then(result => {
      localStorage.setItem('mernToken', result.data.token);
      this.props.updateUser();
    }).catch(error => {
      console.log(error.response);
      this.props.setFlash('error', 'Failure message here');
    })
  }

  render() {
    let form = '';
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    else {
      form = (<form className='column' onSubmit={this.handleSubmit}>
                <input name="Name"
                      placeholder="First name"
                      value={this.state.name}
                      autoComplete='off'
                      onChange={this.handleNameChange}
                />
                <input name="Email"
                      placeholder="Email address"
                      value={this.state.email}
                      autoComplete='off'
                      onChange={this.handleEmailChange} 
                />
                <input name="Password"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    autoComplete='off'
                    onChange={this.handlePasswordChange} 
                />
                 <input type="submit" value="Sign up!" className="btn-primary" />
              </form>);
    }
    return (
      <div>
        {form}
        {this.props.user ? <Redirect to="/profile" /> : ''}
      </div>
    );
  }
}

export default Signup;
