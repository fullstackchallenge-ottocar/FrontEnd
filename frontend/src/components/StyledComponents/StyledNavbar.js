import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavbar = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	width: 90%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 20px;
	@media (max-width: 700px) {
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0;
		height: 250px;
		margin: 0 auto 20px auto;
	}
`;

export const StyledH1 = styled.h1`
	font-family: 'Shadows Into Light', cursive;
	font-weight: 400;
	font-size: 40px;
	padding: 20px;
	@media (max-width: 700px) {
		padding: 0;
	}
`;
export const StyledLinks = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	@media (max-width: 700px) {
		font-size: 0.8rem;
	}
`;

export const StyledNavLink = styled(NavLink)`
	font-family: Roboto, sans-serif;
	padding: 20px;
    font-size:1rem;
    color: #FFCE00;
    text-decoration:none;
    :hover {
        color:black;
    }
	@media (max-width: 700px){
		font-size: 0.8rem;
	}
`;

export const StyledLogout = styled.button`
	font-family: Roboto, sans-serif;
	padding: 5px 10px;
	background-color: white;
	border: 2px solid #ffce00;
	font-size: 1rem;
	color: #ffce00;
	text-decoration: none;
	:hover {
		color: black;
		cursor: pointer;
	}
	@media (max-width: 700px) {
		font-size: 0.8rem;
	}
`;