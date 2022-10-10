import React, { useEffect, useState } from 'react'
import { SearchCasts } from '../api/Fetcher';
const imageUrl = 'https://image.tmdb.org/t/p/w500'

export default function Casts({ id }) {
   
    const [casts, setCasts] = useState([]);
    const fetchCasts = async (id) => { 
        try {   
            const searchResult = await SearchCasts(id);
            console.log(searchResult)
            const data = searchResult.data.cast
            console.log(data)
        setCasts(data)
          console.log(casts)
          // return Promise.resolve(searchResult.data.results)      
        }
        catch (error){
        
          // setError(`Not any images with key word ${query}` )          
  }
  }

    
    useEffect(() => {
        fetchCasts(id)
        // eslint-disable-next-line
    }, [id])

    const markupCasts = casts.map(({ id, name, profile_path, character }) => {
        return <li key={id}>
            <img src={`${imageUrl}${profile_path}`} alt={name} />
            <p>{name}</p>
            <p>{character}</p>
        </li>
    })
    if (casts !== []) {
        return (
            <ul>
                {markupCasts}
    </ul>
  )
    }
    else {
        return
    }
}
