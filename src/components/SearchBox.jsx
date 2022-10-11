import React from 'react';
import {Input, TotalMovies} from "../MoviesStyled"

export const SearchBox = ({value, onChange}) => {
return (
    <TotalMovies>
    <Input
      type='text'
      value = {value}
      placeholder='Insert your query'
      onChange={e => onChange(e.target.value)}
      />
    </TotalMovies>
  )
}
  

