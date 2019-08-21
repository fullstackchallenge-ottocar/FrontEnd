import React from 'react';
import { StyledButton } from '../StyledComponents/StyledButton';
import { StyledForm } from '../StyledComponents/StyledForm';
import { StyledInput } from '../StyledComponents/StyledInput';
import { StyledTH2 } from '../StyledComponents/StyledAddCarForm';
import { StyledLink } from '../StyledComponents/StyledLink';

export default class Login extends React.Component {
  state = {
    email: '',
    username: '',
    password: ''
  };
  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <StyledForm>
        <StyledTH2> Fill in the details to sign up </StyledTH2>
        <StyledInput
          placeholder='Username'
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.onChangeHandler}
        />
        <StyledInput
          placeholder='email'
          type='email'
          name='email'
          value={this.state.email}
          onChange={this.onChangeHandler}
        />
        <StyledInput
          placeholder='Password'
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.onChangeHandler}
        />
        <StyledButton
          onClick={() =>
            this.props.signUp({
              username: this.state.username,
              password: this.state.password,
              email: this.state.email
            })
          }
        >
          Sign up
        </StyledButton>
        <div>
          <StyledLink to='/login'>
            {' '}
            Do you already have an account ?{' '}
          </StyledLink>
        </div>
      </StyledForm>
    );
  }
}
