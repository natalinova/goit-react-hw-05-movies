import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Suspense } from 'react';
import { Search } from 'api/FetchConst';
import {Button, TotalMovies, MovieCard, ItemText, ItemTitle} from '../MoviesStyled'
const imageUrl = 'https://image.tmdb.org/t/p/w500'

// const SearchById = async (id) => {
  
//     const resultMovie= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=575a9af20b08903ff7761ed5bfc17287`)
  
//   console.log(id)
//   console.log(resultMovie)
//     if (resultMovie.length === 0) {
//         return Promise.reject(new Error(` Not any movies with key word ${id}`))
//     }
//         return resultMovie
// }


export default function MovieDetails() {
    
    const { moviesId } = useParams();
    
  const [movie, setMovie] = useState(null);
  const location = useLocation();
    useEffect(() => {
        const fetchMovie = async (id) => { 
        try {   
          const searchResult = await Search("",`/${id}`, "","");
          const data = searchResult.data;
          setMovie(data)    
        }
        catch (error){        
  }
        }
      fetchMovie(moviesId, "")
      // eslint-disable-next-line
    }, [])
    
  if (!movie) {
      return
  };
  const BackLink = location.state?.from ?? "/home"
  return (
    <TotalMovies>
      <Link to={BackLink}> <Button>Back to preview page</Button></Link>
      <MovieCard>
        <ItemTitle>{movie.title}</ItemTitle>
        <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
        <ItemText>{ movie.overview}</ItemText>
      <ul>
        <li>
     <Link to="casts" ><Button>Link to Casts</Button>  </Link>
        </li>
        <li>
     <Link to="reviews" > <Button>Link to Review</Button> </Link>
        </li>
      </ul>
      </MovieCard>
        
     
      <Suspense fallback=". ..Loading">
        <Outlet/>
      </Suspense>
      
     
    </TotalMovies>
    
  )
}
