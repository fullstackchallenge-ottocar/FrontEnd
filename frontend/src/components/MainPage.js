import React from 'react';
import { Route } from 'react-router-dom';
import { StyledNavbar, StyledH1, StyledLinks, StyledNavLink, StyledLogout } from './StyledComponents/StyledNavbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MainPage extends React.Component {
	handleLogout = () => {
		localStorage.clear();
		window.location.reload(true);
	};
	render() {
		return (
			<div>
				<StyledNavbar>
					<StyledH1>Otto Car</StyledH1>
					<StyledLinks>
						<StyledNavLink to='/'>HOME</StyledNavLink>
						<StyledNavLink to='/stats'>STATISTICS</StyledNavLink>
						<StyledNavLink to='/add-car'>ADD CAR</StyledNavLink>
						<StyledLogout type='submit' onClick={() => this.handleLogout()}>
							LOGOUT
						</StyledLogout>
					</StyledLinks>
				</StyledNavbar>

			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
		
		},
		dispatch
	);
}

function mapStateToProps({ trips }) {
	return {
		
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);