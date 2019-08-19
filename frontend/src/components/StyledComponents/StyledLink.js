import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
   color: black;
   border-bottom: 1px solid #FFCE00;
   text-decoration: none;
   &:hover{
       background: #FFCE00;
       transition: ease-in-out 1s;
       border: none;
   }
`;