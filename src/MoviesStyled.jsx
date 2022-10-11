import styled from "styled-components";
import { NavLink, Link } from 'react-router-dom';

export const Layout = styled.div`
display: flex;
margin-top: 10px;
margin-bottom: 50px;
font-size:25px;
width: 100vw;
height: 100px;
background-color: #837d7d;
`

export const NavItem = styled(NavLink)`
  width:100px;
  padding: 20px;
  border-radius: 4px;
  text-decoration: none;
  color:#0c229c33;
  &.active {
    background-color: #535a3b;
    color: #837d7d;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #d6d0b8;
  }
`
export const TotalMovies = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
export const LinkItem = styled(Link)`
text-decoration: none;
`
export const List = styled.ul`
list-style-type:none;
width: 90vw;
margin: 40px;
display:grid;
grid-template-columns:1fr 1fr 1fr;
column-gap:30px;
row-gap:30px;
`
export const Button = styled.button`
width: 220px;
margin-bottom: 30px;
background-color:#d6d0b8;
color: #837d7d;
height: 50px;
border-radius:5px;
border: 1px solid grey ;
font-family: Oxygen 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 20px;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.42);
`

export const Item = styled.li`
text-align: center;
background-color: #e2ded3;
padding: 10px;
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.42);
border-radius:4px;
`
export const ItemReviews = styled.li`
width: 90%;
text-align: start;
background-color: #e2ded3;
padding: 30px;
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.42);
border-radius:4px;
`
export const ItemTitle = styled.h2`
font-size: 35px;
padding-left: 20px;
font-family: Oxygen, 'Open Sans', 'Helvetica Neue', sans-serif;
color: #837d7d;
`
export const ItemText = styled.p`
color: #837d7d;
font-size: 15px;
line-height: 1.6;
padding-left: 15px;
`
export const ListCasts = styled.ul`
list-style-type:none;
width: 90vw;
margin: 40px;
display:grid;
grid-template-columns: 300px 300px 300px 300px; 
column-gap:30px;
row-gap:30px;`

export const Input = styled.input`
width: 200px;
height: 30px;
background-color: #d6d0b8 ;
border-radius: 5px;
border:0.5 px solid black;
font-family: Oxygen, sans-serif;
font-size: 16px;
font-style: italic;
`
export const MovieCard = styled.div`
width: 500px;
border-radius: 5px;
padding: 30px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.42);
`
export const ItemError = styled.div`
margin: 30px auto;
width: 500px;
text-align: center;
background-color: #e2ded3;
padding: 10px;
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.42);
border-radius:4px;
`
export const ErrorMessage = styled.h2`
font-size: 30px;
color:#ea4c4c;
`