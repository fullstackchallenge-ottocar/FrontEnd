import React from 'react';
import { Redirect } from 'react-router-dom';
import { StyledForm } from '../StyledComponents/StyledForm';
import { StyledInput } from '../StyledComponents/StyledInput';
import { StyledButton } from '../StyledComponents/StyledButton';
import { StyledTH2 } from '../StyledComponents/StyledAddTripForm';
import { StyledLink } from '../StyledComponents/StyledLink';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      username: '',
    };
  }
  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return this.props.token ? (
      <Redirect to="/" />
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
          placeholder="Name"
          type="text"
          name="name"
          value={this.state.name}
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
          onClick={location =>
            this.props.login(
              {
                password: this.state.password,
                username: this.state.user,
                name: this.state.name
              },
              location
            )
          }
        >
          Log in
        </StyledButton>
        <div>
          <StyledLink to="/sign-up">
            {' '}
            Don't have an account? Sign up here!
          </StyledLink>
        </div>
      </StyledForm>
    );
  }
}
