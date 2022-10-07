import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
display: flex;
padding-left: 50px;
font-size:25px;
width: 100vw;
height: 60px;
background-color: blanchedalmond;
`

export const NavItem = styled(NavLink)`
  /* display: flex; */
  padding: 20px;
  border-radius: 4px;
  text-decoration: none;
  color:#0c229c33;
  &.active {
    background-color: #a4dc0ae4;
    color: #4006b4e2;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #9b0720e1;
  }
`;
