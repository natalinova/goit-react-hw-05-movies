import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Casts from 'components/Casts';
const imageUrl = 'https://image.tmdb.org/t/p/w500'

const SearchById = async (id) => {
  
    const resultMovie= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=575a9af20b08903ff7761ed5bfc17287`)
  
  console.log(id)
  console.log(resultMovie)
    if (resultMovie.length === 0) {
        return Promise.reject(new Error(` Not any movies with key word ${id}`))
    }
        return resultMovie
}


export default function MovieDetails() {
    
    const { moviesId } = useParams();
    const cleanId = moviesId.slice(1);
    console.log(cleanId)
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const fetchMovie = async (id) => { 
        try {   
          const searchResult = await SearchById(id);
            const data = searchResult.data
            console.log(data)
        setMovie(data)
          
          // return Promise.resolve(searchResult.data.results)      
        }
        catch (error){
        
          // setError(`Not any images with key word ${query}` )          
  }
        }
      fetchMovie(cleanId)
      // eslint-disable-next-line
    }, [])
    
  if (!movie) {
      return
  };
  return (
      <>
          <h2>{movie.title}</h2>;
      <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
      <Link to="casts" > Link to Casts <Casts id={ cleanId} /></Link>
      
      </>
  )
}
