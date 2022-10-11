import { ItemError, ErrorMessage } from 'MoviesStyled'
import React from 'react'
import ErrorImage from "../api/error.jpg"

export default function Error({message}) {

  return (
    <ItemError>
         <img src={ErrorImage} width="400" alt="error" />
          <ErrorMessage>{ message}</ErrorMessage>
      </ItemError>
  )
}
