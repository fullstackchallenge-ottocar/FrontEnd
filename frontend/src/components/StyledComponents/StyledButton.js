import styled, { keyframes } from 'styled-components';

const fillIn = keyframes`
  
`;

export const StyledButton = styled.button`
  background: white;
  border: 2px solid black;
  color: black;
  width: 60%;
  padding: 2% 0%;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 40px auto;
  :hover {
    animation: ${fillIn} 100ms;
  }
`;
