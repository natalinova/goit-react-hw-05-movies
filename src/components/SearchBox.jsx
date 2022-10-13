import React from 'react';
import {Input} from "../MoviesStyled"

export const SearchBox = ({value, onChange}) => {
return (
    <Input
      type='text'
      value = {value}
      placeholder='Insert your query'
      onChange={e => onChange(e.target.value)}
      />
  )
}