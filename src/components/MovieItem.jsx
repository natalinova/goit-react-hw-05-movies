import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieItem({ data }) {
    // console.log(data)
    const imageUrl = 'https://image.tmdb.org/t/p/w500'
    
   const listMovie =  data.map((item) => {
     return <li key={item.id}> <Link to={`/movies/:${item.id}`}>
     <img src={`${imageUrl}${item.poster_path}`} alt={item.title} />
            <p>{ item.title}</p></Link>
            
        </li>
   }
   )
return (
      <ul>
          {listMovie}
    </ul>
  )
}
