import React from 'react'
import { Layout, NavItem } from 'MoviesStyled';
import Cinema from "../api/cinema1.jpeg"

export const AppBar = () => {
  return (
    <Layout>
          <img src={Cinema} alt="popcorn" width='250' />
          <NavItem to="home" key="home"> Home</NavItem>
           <NavItem to="movies" key="movies">Movies</NavItem>
      </Layout>
  )
}
