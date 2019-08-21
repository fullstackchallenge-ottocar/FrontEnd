import React from 'react';
import { Redirect } from 'react-router-dom';
import { StyledForm } from '../StyledComponents/StyledForm';
import { StyledInput } from '../StyledComponents/StyledInput';
import { StyledButton } from '../StyledComponents/StyledButton';
import { StyledTH2 } from '../StyledComponents/StyledAddCarForm';
import { StyledLink } from '../StyledComponents/StyledLink';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      username: '',
      emai: ''
    };
  }
  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return this.props.token ? (
      <Redirect to='/home' />
    ) : (
      <StyledForm>
        <StyledTH2> Please log In </StyledTH2>
        <StyledInput
          placeholder="Username..."
          type="text"
          name="user"
          value={this.state.user}
          onChange={this.onChangeHandler}
        />
        <StyledInput
          placeholder="Email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.onChangeHandler}
        />
        <StyledInput
          placeholder="Password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChangeHandler}
        />
        <StyledButton
          type="submit"
            onClick={(location) =>
              this.props.login(
                { password: this.state.password, username: this.state.user, email: this.state.email },
                location
              )}>
          Log in
        </StyledButton>
        <div>
          <StyledLink to='/sign-up'>
            {' '}
            Don't have an account? Sign up here!
          </StyledLink>
        </div>
      </StyledForm>
    );
  }
}
