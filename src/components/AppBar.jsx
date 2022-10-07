import React from 'react'
import { Layout, NavItem } from 'MoviesStyled'

export const AppBar = () => {
  return (
      <Layout>
          <NavItem to="home" key="home"> Home</NavItem>
           <NavItem to="movies" key="movies">Movies</NavItem>
      </Layout>
  )
}
